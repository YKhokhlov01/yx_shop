<template>
  <div class="yx-yx">
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h1 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Команда
          </button>
        </h1>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">Разработчик Хохлов Юрий</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Местоположение
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">Россия, Тула</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Политика конфиденциальности
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Все материалы использованы для теста и обучения
          </div>
        </div>
      </div>
    </div>
    <div class="position-relative overflow-hidden text-center bg-light">
      <div class="row g-8">
        <div class="card" style="width: 60rem">
          <img
            :src="require('../assets/1/Spektr.jpg')"
            class="card-img-center"
            alt="..."
          />
        </div>
        <div class="col-4 p-lg-6 mx-auto my-5">
          <h1 class="display-2 font-weight-normal p-4">Жизнь в цвете</h1>
          <h3 class="display-3 text-success lead font-weight-normal p-3">
            Продолжение следует
          </h3>
          <p class="lead font-weight-normal text-success p-3">...</p>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div
          class="product-device product-device-2 shadow-sm d-none d-md-block"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "yx-yx",
  components: {},
};
</script>

<style>
</style>