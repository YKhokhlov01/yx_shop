<template>
  <div class="yx-cart-item">
    <div class="card rounded-12 mb-2">
      <div class="card-body p-2">
        <div
          class="
            row
            d-flex
            justify-content-between
            align-items-center align-content-start
            flex-wrap
          "
        >
          <div class="col-md-2">
            <img
              :src="require('../assets/image/' + cart_item_data.image)"
              class="img-fluid rounded-3"
              border
              border-primary
              alt="img"
            />
          </div>
          <div class="col-md-2">
            <p class="lead fw-normal mb-2">
              {{ cart_item_data.brand }} {{ cart_item_data.name }}
            </p>
            <p>
              <span class="text-muted">Size: </span>M
              <span class="text-muted">Color: </span>Grey
            </p>
          </div>
          <div class="col-md-2 d-flex">
            <div class="qty mt-5">
              <span @click="decrementItem">-</span>
              {{ cart_item_data.quantity }}
              <span @click="incrementItem">+</span>
            </div>
          </div>
          <div class="col-md-3">
            <h5 class="mb-0">Цена за 1 ед.: {{ cart_item_data.price }}р.</h5>
          </div>
          <div class="col-md-3">
            <h5 class="mb-0">
              Сумма позиции:
              {{ cart_item_data.price * cart_item_data.quantity }}р.
            </h5>
          </div>
          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group mr-6" role="group" aria-label="First group">
              <button
                @click="deleteCart"
                type="button"
                class="btn btn-secondary"
              >
                Удалить позицию
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button
                type="button"
                class="btn btn-secondary"
                @click="addFavorite"
              >
                Перенести в избранное
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "yx-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapActions(["ADD_TO_FAVORITE"]),
    deleteCart() {
      this.$emit("deleteCart");
    },
    addFavorite() {
      this.$emit("addFavorite", this.cart_item_data);
    },
    decrementItem() {
      this.$emit("decrementItem");
    },
    incrementItem() {
      this.$emit("incrementItem");
    },
  },
  computed: {
    ...mapGetters(["COLOR", "CART", "FAVORITE"]),
  },
};
</script>

<style lang="scss">
</style>