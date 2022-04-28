<template>
  <div class="yx-start-page">
    <div
      class="bg-white shadow-sm mx-auto"
      style="width: 80%; border-radius: 21px 21px 0 0"
    >
      <div class="position-relative overflow-hidden text-center bg-white">
        <div class="row g-4">
          <div class="card" style="width: 50rem">
            <img
              :src="require('../assets/1/foto2.jpeg')"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="col-3 mx-auto my-4">
            <h1 class="display-3 font-weight-normal p-4">Жизнь в цвете</h1>
            <h3 class="display-4 text-success lead font-weight-normal p-3">
              Pravana
            </h3>
            <p class="lead font-weight-normal text-success p-3">
              Отпразднуйте жизнь, прожитую в цвете.
            </p>
            <router-link to="/pravana">
              <a class="btn btn-outline-secondary" href="#">Скоро в продаже</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-white shadow-sm mx-auto"
      style="width: 80%; border-radius: 21px 21px 0 0"
    >
      <div class="position-relative overflow-hidden text-center bg-white">
        <div class="row g-4">
          <div class="col-3 mx-auto my-4">
            <h1 class="display-3 font-weight-normal p-4">Жизнь в цвете</h1>
            <h3 class="display-4 text-success lead font-weight-normal p-3">
              Pravana
            </h3>
            <p class="lead font-weight-normal text-success p-3">
              Отпразднуйте жизнь, прожитую в цвете.
            </p>
            <router-link to="/pravana">
              <a class="btn btn-outline-secondary" href="#">Скоро в продаже</a>
            </router-link>
          </div>

          <div class="card" style="width: 50rem">
            <img
              :src="require('../assets/1/foto1.jpg')"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-white shadow-sm mx-auto"
      style="width: 80%; border-radius: 21px 21px 0 0"
    >
      <div class="position-relative overflow-hidden text-center bg-white">
        <div class="row g-4">
          <div class="card" style="width: 50rem">
            <img
              :src="require('../assets/1/foto3.jpg')"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="col-3 mx-auto my-4">
            <h1 class="display-3 font-weight-normal p-4">Жизнь в цвете</h1>
            <h3 class="display-4 text-success lead font-weight-normal p-3">
              Pravana
            </h3>
            <p class="lead font-weight-normal text-success p-3">
              Отпразднуйте жизнь, прожитую в цвете.
            </p>
            <router-link to="/pravana">
              <a class="btn btn-outline-secondary" href="#">Скоро в продаже</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "yx-start-page",
  components: {},
};
</script>

<style>
</style>