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
  },

  created() {
    this.fetchCards(store.apiUrl);
  },
};
</script>

<template>
  <AppHeader />

  <BaseSelect />

  <MainContent @go-prev-page="prevPage()" @go-next-page="nextPage()" />
</template>

<style lang="scss" scoped></style>
