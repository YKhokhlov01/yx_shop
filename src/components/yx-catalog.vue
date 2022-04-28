<template>
  <div class="yx-catalog">
    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-3">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Каталог</h1>
            <p class="lead text-muted">Листинг товара</p>
            <p>
              <a href="#" class="btn btn-primary my-2"></a>
              <a href="#" class="btn btn-secondary my-2"></a>
            </p>
          </div>
        </div>
      </section>
      <!-- body -->
      <div class="container">
        <div class="row">
          <div class="col -3">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Сортировка
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    @click="sortByPriceAZ"
                    class="dropdown-item active"
                    href="#"
                    >Сортировать по цене по убыванию</a
                  >
                </li>
                <li>
                  <a @click="sortByPriceZA" class="dropdown-item" href="#"
                    >Сортировать по цене по возрастанию</a
                  >
                </li>
                <li>
                  <a @click="sortByBrandAZ" class="dropdown-item" href="#"
                    >Сортировать по Бренду A-z</a
                  >
                </li>
                <li>
                  <a @click="sortByBrandZA" class="dropdown-item" href="#"
                    >Сортировать по Бренду Z-a</a
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <!--       <li>
                                    <a class="dropdown-item" href="#">Только акционные позиции</a>
                                </li> -->
              </ul>
            </div>
          </div>
          <div class="col-6">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Введите нужный бренд"
                aria-label="Имя пользователя получателя"
                aria-describedby="basic-addon2"
                v-model="inputFilters"
              />
              <div class="btn-group me-2" role="group" aria-label="First group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="button"
                  autocomplete="off"
                  @click="inputSearch(inputFilters)"
                >
                  Найти
                </button>
              </div>
              <div
                class="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="button"
                  autocomplete="off"
                  @click="cleanSearch"
                >
                  Сброс
                </button>
              </div>
              <!-- <button class="input-group-text" id="basic-addon2">найти</button>-->
            </div>
          </div>
        </div>
      </div>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <yx-catalog-item
              v-for="ecolor in filterColor"
              :key="ecolor.id"
              v-bind:colordata="ecolor"
              @addToFavorite="addToFavorite"
              @addToCart="addToCart"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import yxCatalogItem from "./yx-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "yx-catalog",
  components: {
    yxCatalogItem,
  },
  props: {},
  data() {
    return {
      title: "Каталог",
      color: [
        {
          id: 1,
          brand: "Matrix",
          name: "SoColor",
          price: "638",
          box: 6,
          vol: 90,
          shade: "100+",
          ratio: "1:1",
          image: require("../assets/image/1.jpg"),
        },
        {
          id: 2,
          brand: "Estel",
          name: "Essex",
          price: 346,
          box: 6,
          vol: 60,
          shade: "98",
          ratio: "1:1",
          image: require("../assets/image/2.jpg"),
        },
        {
          id: 3,
          brand: "Wella",
          name: "Сolor touch",
          price: 1960,
          box: 6,
          vol: 60,
          shade: "93",
          ratio: "1:2",
          image: require("../assets/image/3.jpg"),
        },
        {
          id: 4,
          brand: "Londa",
          name: "Color",
          price: 640,
          box: 6,
          vol: 60,
          shade: "many",
          ratio: "1:1",
          image: require("../assets/image/4.jpg"),
        },
        {
          id: 5,
          brand: "Wella",
          name: "Koleston",
          price: 1030,
          box: 6,
          vol: 60,
          shade: "many",
          ratio: "1:1",
          image: require("../assets/image/5.jpg"),
        },
        {
          id: 6,
          brand: "Estel",
          name: "De Luxe",
          price: 734,
          box: 6,
          vol: 60,
          shade: "125",
          ratio: "1:1",
          image: require("../assets/image/6.jpg"),
        },
        {
          id: 7,
          brand: "L’OREAL",
          name: " MAJIREL",
          price: 1165,
          box: 6,
          vol: 50,
          shade: "many",
          ratio: "1:1,5",
          image: require("../assets/image/7.jpg"),
        },
        {
          id: 8,
          brand: "Kapous",
          name: "Hyaluronic Acid",
          price: 329,
          box: 6,
          vol: 100,
          shade: "many",
          ratio: "1:1,5",
          image: require("../assets/image/8.jpg"),
        },
        {
          id: 9,
          brand: "Schwarzkopf",
          name: "Igora",
          price: 760,
          box: 6,
          vol: 60,
          shade: "159",
          ratio: "1:1",
          image: require("../assets/image/9.jpg"),
        },
      ],
      // pricetitle: "Цена",
      inputFilters: "",
      sortedProducts: [],
      sortName: [],
      sortPrice: [],
    };
  },
  methods: {
    ...mapActions([
      "GET_COLOR_FROM_API",
      "ADD_TO_FAVORITE",
      "ADD_TO_CART",
      "SET_VALUE",
      "GET_SEARCH_FILTER",
    ]),
    addToFavorite(data) {
      this.ADD_TO_FAVORITE(data);
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    inputSearch(value) {
      this.GET_SEARCH_FILTER(value);
    },
    inputFiltersMenu(value) {
      this.sortedProducts = [...this.COLOR];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.brand.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.COLOR;
      }
    },
    cleanSearch() {
      this.inputFilters = "";
      this.GET_SEARCH_FILTER();
    },
    sortByBrandAZ() {
      this.filterColor.sort((a, z) => a.brand.localeCompare(z.brand));
    },
    sortByBrandZA() {
      this.sortName = this.filterColor.sort((a, z) =>
        a.brand.localeCompare(z.brand)
      );
      this.sortName = this.sortName.reverse();
    },
    sortByPriceAZ() {
      this.filterColor.sort((a, z) => a.price - z.price);
    },
    sortByPriceZA() {
      this.sortPrice = this.filterColor.sort((a, z) => a.price - z.price);
      this.sortPrice = this.sortPrice.reverse();
    },
  },
  mounted() {
    this.GET_COLOR_FROM_API();
    this.inputFiltersMenu(this.SEARCH_FILTER);
  },

  watch: {
    SEARCH_FILTER() {
      this.inputFiltersMenu(this.SEARCH_FILTER);
    },
  },
  computed: {
    ...mapGetters(["COLOR", "CART", "FAVORITE", "SEARCH_FILTER"]),
    filterColor() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.COLOR;
      }
    },
  },
};
</script>

<style>
</style>