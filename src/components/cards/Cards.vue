<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  props: {
    card: Object,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="card py-2">
    <div class="card-media">
      <img :src="card.card_images[0].image_url" alt="" />
    </div>
    <div class="card-text bg-warning">
      <p class="card-name">{{ card.name }}</p>
      <p class="card-archetype">{{ card.archetype }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  .card-media {
    img {
      width: 100%;
    }
  }

  .card-text {
    text-align: center;
    padding: 1rem 0 1rem 0;
    height: 100%;

    .card-name {
      color: whitesmoke;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
}
</style>
