<script>
import Cards from "./Cards.vue";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Cards,
  },
};
</script>

<template>
  <section class="container my-2">
    <div class="row g-2">
      <Cards
        class="col-3"
        v-for="card in store.yugiCards"
        :key="card.id"
        :card="card"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
