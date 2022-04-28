<template>
  <div class="yx-main-wrapper">
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <router-link to="/catalog"> <h4>Каталог</h4></router-link>
              <router-link to="/cart">Корзина </router-link>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <router-link to="/favorite"
                ><h4 class="text-white">
                  Избранное({{ FAVORITE.length }})
                </h4></router-link
              >
              <ul class="list-unstyled">
                <li>
                  <router-link to="/pravana"
                    ><a href="#" class="text-white">Pravana</a></router-link
                  >
                </li>

                <li>
                  <router-link to="/yx"
                    ><a href="#" class="text-white">Информация</a></router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          <router-link to="/">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-columns"
                viewBox="0 0 20 16"
              >
                <path
                  d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z"
                />
              </svg>
              <strong> Главная страница </strong>
            </a>
          </router-link>
          <router-link to="/catalog">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-table"
                viewBox="0 0 20 16"
              >
                <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"
                />
              </svg>
              <strong> Каталог </strong>
            </a>
          </router-link>
          <router-link to="/cart">
            <a
              v-if="!CART.length == 0"
              href="#"
              class="navbar-brand d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 20 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
              <strong>
                Количество позиций: {{ CART.length }}/Количество шт.:
                {{ cartTotalItemNavi }}
              </strong>
            </a>
            <a v-else href="#" class="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 20 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
              <strong> Корзина </strong>
            </a>
          </router-link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label=""
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>

    <footer class="footer mt-auto py-3 bg-light">
      <div class="row">
        <h2 class="display-5 gx-5 text-center">Красота для Всех</h2>

        <div class="col-6 col-md">
          <ul class="list-unstyled text-small text-end">
            <router-link to="/yx">
              <li><a class="link-secondary" href="#">Команда</a></li>
            </router-link>
            <router-link to="/yx">
              <li><a class="link-secondary" href="#">Местоположение</a></li>
            </router-link>
            <router-link to="/yx">
              <li>
                <a class="link-secondary" href="#"
                  >Политика конфиденциальности</a
                >
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

//import yxCart from "./yx-cart.vue"
//import yxCatalog from "./yx-catalog.vue"
// import yxStartPage from "./yx-start-page.vue"

export default {
  name: "yx-main-wrapper",

  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
  computed: {
    ...mapGetters(["COLOR", "CART", "FAVORITE"]),

    cartTotalItemNavi() {
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