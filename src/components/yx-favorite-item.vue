<template>
  <div class="yx-favorite-item">
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
          <div class="col-md-3">
            <img
              :src="require('../assets/image/' + favorite_item_data.image)"
              class="img-fluid rounded-3"
              border
              border-primary
              alt="img"
            />
          </div>
          <div class="col-md-3">
            <p class="lead fw-normal mb-2">
              {{ favorite_item_data.brand }} {{ favorite_item_data.name }}
            </p>
            <p>
              <span class="text-muted">Size: </span>M
              <span class="text-muted">Color: </span>Grey
            </p>
          </div>

          <div class="col-md-3">
            <h5 class="mb-0">
              Цена за 1 ед.: {{ favorite_item_data.price }}р.
            </h5>
          </div>

          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group mr-6" role="group" aria-label="First group">
              <button
                @click="deleteFavorite"
                type="button"
                class="btn btn-secondary"
              >
                Удалить из листа
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "yx-favorite-item",
  props: {
    favorite_item_data: {
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
    deleteFavorite() {
      this.$emit("deleteFavorite");
    },
  },
  computed: {
    ...mapGetters(["COLOR", "CART", "FAVORITE"]),
  },
};
</script>

<style lang="scss">
</style>