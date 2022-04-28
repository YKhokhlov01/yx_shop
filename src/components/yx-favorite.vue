<template>
  <div class="yx-favorite">
    <div class="container-fluid h-100 py-5">
      <div
        class="
          row
          d-flex
          justify-content-start
          align-items-start
          container-fluid
          h-100
        "
      >
        <div class="col-12">
          <h2 v-if="!FAVORITE.length">
            У Вас нет добавленных позиций ... Ждем ваших покупок!
          </h2>

          <yx-favorite-item
            v-for="(item, index) in FAVORITE"
            :key="item.id"
            :favorite_item_data="item"
            @deleteFavorite="deleteFavorite(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import yxFavoriteItem from "./yx-favorite-item.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "yx-favorite",
  components: {
    yxFavoriteItem,
  },
  props: {
    favorite_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["DELETE_FAVORITE"]),
    deleteFavorite(index) {
      this.DELETE_FAVORITE(index);
    },
  },
  computed: {
    ...mapGetters(["COLOR", "CART", "FAVORITE"]),
  },
};
</script>

<style>
</style>