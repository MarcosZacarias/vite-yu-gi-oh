<script>
import AppHeader from "./components/AppHeader.vue";
import MainContent from "./components/MainContent.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
    MainContent,
  },
};
</script>

<template>
  <div class="container">
    <AppHeader />
    <MainContent />
  </div>
</template>

<style lang="scss" scoped></style>
