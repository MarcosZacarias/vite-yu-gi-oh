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
  <div>
    <img :src="card.card_images[0].image_url_small" alt="" />
    <h3>{{ card.name }}</h3>
    <p>{{ card.archetype }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
