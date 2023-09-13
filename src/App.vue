<script>
import axios from "../node_modules/axios";
import { store } from "../src/data/store";

import AppHeader from "./components/AppHeader.vue";
import BaseSelect from "./components/ui/BaseSelect.vue";

import MainContent from "./components/MainContent.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    MainContent,
    BaseSelect,
  },

  methods: {
    fetchCards(apiPath) {
      axios.get(apiPath).then((response) => {
        // console.log(response.data);
        const cardsData = response.data.data.map((card) => {
          const { id, name, archetype, card_images } = card;
          return { id, name, archetype, card_images };
        });

        // console.log(cardsData);
        store.yugiCards = cardsData;

        const { next_page, previous_page } = response.data.meta;
        store.pages = { next_page, previous_page };
      });

      // .catch((error) => {
      //   console.error(error);
      //   store.yugiCards = [];
      //   store.yugiArchetypes = [];
      //   store.pages.next_page = null;
      //   store.pages.previous_page = null;
      // });

      // .finally(() => {});
    },
    nextPage() {
      if (!store.pages.next_page) {
        return;
      } else {
        this.fetchCards(store.pages.next_page);
      }
    },

    prevPage() {
      if (!store.pages.previous_page) {
        return;
      } else {
        this.fetchCards(store.pages.previous_page);
      }
    },

    selectArchetype(archetypeSelected) {
      // console.log(archetypeSelected);
      const apiPath = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetypeSelected}`;
      // console.log(apiPath);
      // this.fetchCards(apiPath);

      store.pages.next_page = null;
      store.pages.previous_page = null;
      axios.get(apiPath).then((response) => {
        // console.log(response.data);
        store.yugiCards = response.data.data.map((card) => {
          const { id, name, archetype, card_images } = card;
          return { id, name, archetype, card_images };
        });
      });
    },

    resetPrint() {
      this.fetchCards(store.apiUrl);
    },
  },

  created() {
    this.fetchCards(store.apiUrl);
  },
};
</script>

<template>
  <AppHeader />

  <BaseSelect @form-submit="selectArchetype" @form-reset="resetPrint" />

  <MainContent @go-prev-page="prevPage()" @go-next-page="nextPage()" />
</template>

<style lang="scss" scoped></style>
