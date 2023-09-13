<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  emits: ["go-prev-btn", "go-next-btn"],

  props: {
    showPrevButton: Boolean,
    showNextButton: Boolean,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav
    aria-label="Page navigation example"
    class="d-flex justify-content-center"
  >
    <ul class="pagination m-0">
      <li class="page-item" v-if="showPrevButton">
        <a class="page-link" href="#" @click="$emit(`go-prev-btn`)">Previous</a>
      </li>
      <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
      <li class="page-item" v-if="showNextButton">
        <a class="page-link" href="#" @click="$emit(`go-next-btn`)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
