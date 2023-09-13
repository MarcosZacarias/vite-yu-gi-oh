import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  archetypeUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  yugiCards: [],
  yugiArchetypes: [],
  pages: { next_page: null, previous_page: null },
});
