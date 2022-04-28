<template>
  <div class="yx-catalog-item">
    <div class="card shadow-sm">
      <img
        class="yx-catalog-item_image"
        :src="require('../assets/image/' + colordata.image)"
        alt="img"
      />

      <div class="card-body">
        <p class="card-text">{{ pricetitle }}: {{ colordata.price }} руб.</p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="addToFavorite"
            >
              Избранное
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="addToCart"
            >
              Заказ
            </button>
          </div>

          <small class="text-muted"
            >{{ colordata.brand }} {{ colordata.name }}</small
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "yx-catalog-item",
  props: {
    colordata: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      pricetitle: "Цена",
    };
  },
  methods: {
    addToFavorite() {
      this.$emit("addToFavorite", this.colordata);
    },
    addToCart() {
      this.$emit("addToCart", this.colordata);
    },
  },
  computed: {
    ...mapGetters(["COLOR", "CART", "FAVORITE"]),
  },
};
</script>

<style lang="scss">
</style>