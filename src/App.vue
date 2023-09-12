<script>
import axios from "../node_modules/axios";
import { store } from "../src/data/store";

import AppHeader from "./components/AppHeader.vue";
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
  },

  methods: {
    fetchCards(apiPath) {
      axios.get(apiPath).then((response) => {
        // console.log(response.data);
        const cardsData = response.data.data.map((card) => {
          const { id, name, archetype, card_images } = card;
          return { id, name, archetype, card_images };
        });

        console.log(cardsData);

        store.yugiCards = cardsData;
      });
    },
  },

  created() {
    this.fetchCards(store.apiUrl);
  },
};
</script>

<template>
  <AppHeader />
  <MainContent />
</template>

<style lang="scss" scoped></style>
