<script>
import { store } from "../data/store";

import Pagination from "./ui/Pagination.vue";
import ListCards from "./cards/ListCards.vue";

export default {
  data() {
    return {};
  },

  computed: {
    showNextBtn() {
      return store.pages.next_page ? true : false;
    },

    showPrevBtn() {
      return store.pages.previous_page ? true : false;
    },
  },

  emits: ["go-next-page", "go-prev-page"],

  components: {
    ListCards,
    Pagination,
  },
};
</script>

<template>
  <main class="bg-warning">
    <div class="container bg-white">
      <Pagination
        :showPrevButton="showPrevBtn"
        @go-prev-btn="$emit(`go-prev-page`)"
        :showNextButton="showNextBtn"
        @go-next-btn="$emit(`go-next-page`)"
      />
      <ListCards />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
