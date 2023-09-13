<script>
// import MyComponent from "./components/MyComponent.vue";
import { store } from "../../data/store";
import axios from "axios";

export default {
  // components: {
  //   MyComponent,
  // },
  data() {
    return {
      store,
    };
  },

  methods: {
    fetchArchetypes(apiPath) {
      axios.get(apiPath).then((response) => {
        console.log(response.data);
        store.yugiArchetypes = response.data;
      });
    },
  },

  created() {
    this.fetchArchetypes(store.archetypeUrl);
  },
};
</script>

<template>
  <div class="container">
    <select
      class="form-select mb-3 archetype-select"
      aria-label="Default select example"
    >
      <option selected>Select archetype</option>
      <option
        v-for="archetype in store.yugiArchetypes"
        :key="archetype.archetype_name"
        :value="archetype.archetype_name"
      >
        {{ archetype.archetype_name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.archetype-select {
  width: 30%;
}
</style>
