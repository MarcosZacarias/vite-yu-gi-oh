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
      archetypeSelect: "",
    };
  },

  emits: ["form-submit", "form-reset"],

  methods: {
    fetchArchetypes(apiPath) {
      axios.get(apiPath).then((response) => {
        console.log(response.data);
        store.yugiArchetypes = response.data;
      });
    },

    resetInputSelect() {
      this.archetypeSelect = "";
      this.$emit(`form-reset`);
    },
  },

  created() {
    this.fetchArchetypes(store.archetypeUrl);
  },
};
</script>

<template>
  <div class="container">
    <form class="archetype-select">
      <div class="input-group">
        <select
          v-model="archetypeSelect"
          id="inputGroupSelect04"
          class="form-select"
          aria-label="Example select with button addon"
        >
          <option selected>Select archetype</option>
          <option
            v-for="archetype in store.yugiArchetypes"
            :key="archetype.archetype_name"
            :value="archetype.archetype_name"
            @click="$emit(`form-submit`, archetypeSelect)"
          >
            {{ archetype.archetype_name }}
          </option>
        </select>
        <button
          @click="resetInputSelect"
          class="btn btn-outline-secondary"
          type="button"
        >
          Button
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.archetype-select {
  width: 40%;
}
</style>
