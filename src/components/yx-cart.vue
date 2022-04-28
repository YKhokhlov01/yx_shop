<template>
  <div class="yx-cart">
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
        <div class="col-8">
          <h2 v-if="!CART.length">Ваша корзина пуста... Ждем ваших покупок!</h2>
          <section class="h-100" style="background-color: #eee">
            <yx-cart-item
              v-for="(item, index) in CART"
              :key="item.id"
              :cart_item_data="item"
              @deleteCart="deleteCart(index)"
              @incrementItem="incrementItem(index)"
              @decrementItem="decrementItem(index)"
              @addFavorite="addToFavorite"
            />
          </section>
        </div>

        <div class="col-4 bg-grey">
          <section class="h-100 h-custom" style="background-color: #d2c9ff">
            <div class="p-5">
              <h3 class="fw-bold mb-5 mt-2 pt-1">Итого</h3>
              <hr class="my-4" />

              <div class="d-flex justify-content-between mb-6">
                <h5 class="text-uppercase">
                  Количество позиций: {{ cartTotalItem }} ед.
                </h5>
              </div>
              <div class="d-flex justify-content-between mb-6">
                <h5 class="text-uppercase">
                  Всего (без скидки):{{ cartTotal }} р.
                </h5>
              </div>

              <h5 class="text-uppercase mb-3">Доставка</h5>

              <div class="mb-4 pb-2">
                <select v-model.number="select">
                  <option disabled value="">Выберите один из вариантов</option>
                  <option value="0">Первый радиус- бесплатно</option>
                  <option value="200">Второй радиус 200 р.</option>
                  <option value="300">Третий радиус 300 р.</option>
                  <option value="500">Четвертый радиус 500 р.</option>
                </select>
              </div>

              <h5 class="text-uppercase mb-3">Промокод</h5>

              <div class="mb-5">
                <div class="form-outline">
                  <input
                    v-model="promo"
                    type="text"
                    id="form3Examplea2"
                    placeholder="промокод: promo2022"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Examplea2"
                    >Введите промокод: promo2022</label
                  >
                </div>
              </div>

              <hr class="my-4" />
              <div class="d-flex justify-content-between mb-3">
                <h5 class="text-uppercase">Всего</h5>
                <h5>{{ total }}р.</h5>
              </div>
              <!--  <button
                type="button"
                class="btn btn-dark btn-block btn-lg"
                data-mdb-ripple-color="dark"
              >
                Register
              </button> -->

              <div class="conteiner" v-show="CART.length">
                <div class="d-flex justify-content-between text-secondary mb-3">
                  <p class="font-weight-light text-secondary">Доставка:</p>
                  <p>{{ select }}р.</p>
                </div>
                <div class="d-flex justify-content-between text-success mb-3">
                  <p class="font-weight-light text-success">Скидка:</p>
                  <p>{{ cartTotal - total + select }}р.</p>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <p class="font-weight-light o">Количество ед.:</p>
                  <p>{{ cartTotalItem }}</p>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import yxCartItem from "./yx-cart-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "yx-cart",
  components: {
    yxCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      select: "",
      promo: "",
      prm: Number,
      promototal: "qq",
    };
  },
  methods: {
    ...mapActions([
      "DELETE_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
      "ADD_TO_FAVORITE",
    ]),
    deleteCart(index) {
      this.DELETE_CART(index);
    },
    incrementItem(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrementItem(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    addToFavorite(data) {
      console.log(data);
      this.ADD_TO_FAVORITE(data);
    },
  },
  computed: {
    ...mapGetters(["COLOR", "CART", "FAVORITE"]),
    cartTotal() {
      let totalCart = [];
      for (let item of this.CART) {
        totalCart.push(item.price * item.quantity);
      }
      totalCart = totalCart.reduce(function (sum, el) {
        return sum + el;
      }, 0);
      return totalCart;
    },
    total() {
      if (this.promo === "promo2022") {
        let finaltotal = Math.floor(this.cartTotal * 0.9 + this.select);
        return finaltotal;
      } else {
        let finaltotal = this.cartTotal + this.select;
        return finaltotal;
      }
    },

    cartTotalItem() {
      let totalCartItem = [];
      for (let item of this.CART) {
        totalCartItem.push(item.quantity);
      }
      totalCartItem = totalCartItem.reduce(function (sum, el) {
        return sum + el;
      }, 0);
      return totalCartItem;
    },
  },
  
};
</script>

<style>
</style>