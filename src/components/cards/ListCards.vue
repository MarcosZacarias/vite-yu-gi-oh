<script>
import Cards from "./Cards.vue";
import { store } from "../../data/store";

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
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
      <Cards
        class="col"
        v-for="card in store.yugiCards"
        :key="card.id"
        :card="card"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
