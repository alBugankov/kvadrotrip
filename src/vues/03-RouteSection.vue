<script setup lang="ts">
</script>

<template>
  <section class="route-section">
    <div class="title-container container">
      <div class="separator">
        <p class="section-title">С нами <span class="last-world">интересно</span></p>
      </div>
      <div class="separator">
        <h2 class="section-name">[ маршрут ]</h2>
      </div>
    </div>
    <div class="map-container-tablet">
      <img 
      src="../assets/images/map-tablet.png"
      alt="" 
      width="" height="" loading="lazy"
      />
    </div>
    <div class="map-container-mobile">
      <img
      src="../assets/images/map-mobile.png"
      alt="mobile route map"
      width="414" height="auto" loading="lazy"
      />
    </div>
    <div class="map-container">
      <!-- Круглые изображения с вложенными всплывающими окнами -->
      <div class="circle-container circle-image-1">
        <img src="../assets/images/route/6.png" class="circle-image">
        <div class="hover-popup hover-popup-1">
          <img src="../assets/images/route/6-6.png" alt="Увеличенное фото">
        </div>
      </div>

      <div class="circle-container circle-image-2">
        <img src="../assets/images/route/5.png" class="circle-image">
        <div class="hover-popup hover-popup-2">
          <img src="../assets/images/route/5-5.png" alt="Увеличенное фото">
        </div>
      </div>

      <div class="circle-container circle-image-3">
        <img src="../assets/images/route/2.png" class="circle-image">
        <div class="hover-popup hover-popup-3">
          <img src="../assets/images/route/2-2.png" alt="Увеличенное фото">
        </div>
      </div>

      <div class="circle-container circle-image-4">
        <img src="../assets/images/route/1.png" class="circle-image">
        <div class="hover-popup hover-popup-4">
          <img src="../assets/images/route/1-1.png" alt="Увеличенное фото">
        </div>
      </div>

      <div class="circle-container circle-image-5">
        <img src="../assets/images/route/3.png" class="circle-image">
        <div class="hover-popup hover-popup-5">
          <img src="../assets/images/route/3-3.png" alt="Увеличенное фото">
        </div>
      </div>

      <div class="circle-container circle-image-6">
        <img src="../assets/images/route/4.png" class="circle-image">
        <div class="hover-popup hover-popup-6">
          <img src="../assets/images/route/4-4.png" alt="Увеличенное фото">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.map-container-mobile {
  display: none;
  max-height: 767px;
}

.map-container-tablet {
  display: none;
}

.route-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  height: auto;
}

.map-container {
  position: relative;
  width: 100%;
  padding-top: 70.5%;
  background: url("@/assets/icons/mapSVGdetail.svg") center/contain no-repeat;
}

/* Контейнер для кружков и всплывающих окон */
.circle-container {
  position: absolute;
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.circle-image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}

/* Позиционирование контейнеров для кружков */
.circle-image-1 {
  top: 18%;
  left: 28%;
}

.circle-image-1::after {
  content: "Дамба";
  top: -24%;
  left: 50%;
}

.circle-image-2 {
  top: 25%;
  left: 59%;
}

.circle-image-2::after {
  content: "Плая \A (дно озера)";
  top: -47%;
  left: 50%;
}

.circle-image-3 {
  top: 50%;
  left: 82%;
}

.circle-image-3::after {
  content: "Манговые \A плантации";
  top: 100%;
  left: 50%;
}

.circle-image-4 {
  top: 70%;
  left: 67%;
}

.circle-image-4::after {
  content: "Эвкалиптовые \A леса";
  top: 100%;
  left: 50%;
}
.circle-image-5 {
  top: 71%;
  left: 37%;
}

.circle-image-5::after {
  content: "Горная река \A (остановка 15 мин)";
  top: 100%;
  left: 50%;
}
.circle-image-6 {
  top: 35%;
  left: 9%;
}

.circle-image-6::after {
  content: "Серпантин \A с красивыми видами";
  top: 100%;
  left: 50%;
}

.circle-image-1::after,
.circle-image-2::after,
.circle-image-3::after,
.circle-image-4::after,
.circle-image-5::after,
.circle-image-6::after {
  transform: translate(-50%);
  color: var(--color-light);
  text-align: center;
  font-size: 18px;
  font-family: var(--raleway-regular);
  font-weight: 400;
  white-space: pre-line;
  min-width: 180px;
  position: absolute;
  transition: top var(--transition-duration) ease;
  pointer-events: none;
}

.circle-image-1::before,
.circle-image-2::before,
.circle-image-3::before,
.circle-image-4::before,
.circle-image-5::before,
.circle-image-6::before {
  content: "";
  position: absolute;
  width: 150px;
  aspect-ratio: 1;
  display: inline-block;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-red);
  opacity: 0;
  transition: var(--transition-duration) ease;
}

.circle-container:hover.circle-image-1::before,
.circle-container:hover.circle-image-2::before,
.circle-container:hover.circle-image-3::before,
.circle-container:hover.circle-image-4::before,
.circle-container:hover.circle-image-5::before,
.circle-container:hover.circle-image-6::before {
  opacity: 1;
}
.circle-container:hover.circle-image-1::after,
.circle-container:hover.circle-image-2::after,
.circle-container:hover.circle-image-3::after,
.circle-container:hover.circle-image-4::after,
.circle-container:hover.circle-image-5::after,
.circle-container:hover.circle-image-6::after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 150px;
}

/* Общие стили для всплывающих окон */
.hover-popup {
  position: absolute;
  width: 460px;
  height: 300px;
  display: none;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: var(--input-radius);
  z-index: 100;
}

*::before {
  z-index: 1000;
}

*::after {
  z-index: 1000;
}

.hover-popup img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Показать всплывающее окно при наведении на кружок */
.circle-container:hover .hover-popup {
  display: block;
}

/* Индивидуальное позиционирование для каждого hover-popup */
.hover-popup-1 {
  position: absolute;
  transform: translate(15%, -10%)
}

.hover-popup-2 {
  top: 75%;
  left: -280%;
}

.hover-popup-3 {
  top: -40%;
  left: -300%;
}

.hover-popup-4 {
  top: -180%;
  left: -255%;
}

.hover-popup-5 {
  top: -180%;
  left: 60%;
}

.hover-popup-6 {
  top: 70%;
  left: 55%;
}

@media (max-width: 1800px) and (min-width: 768px) {
  .circle-image-1::before,
  .circle-image-2::before,
  .circle-image-3::before,
  .circle-image-4::before,
  .circle-image-5::before,
  .circle-image-6::before {
    width: calc(130px + (150 - 130) * ((100vw - 768px) / (1800 - 768)));
  }
  .circle-container {
    width: calc(80px + (150 - 80) * ((100vw - 768px) / (1800 - 768)));
  }
}

@media (max-width: 1800px) {
  .hover-popup img {
    width: clamp(280px, 23.95vw, 460px);
    height: clamp(180px, 15.62vw, 300px);
  }
}

@media (max-width: 1400px) {
  .circle-image-2::after {
    top: -55%;
  }
}

@media (max-width: 1220px) {
  .circle-image-2::after {
    top: -65%;
  }
  .circle-image-1::after {
    top: -35%;
  }
  .hover-popup-3 {
    top: -45%;
    left: -320%;
  }
}

@media (max-width: 1100px) {
  .hover-popup-3 {
    top: -55%;
    left: -350%;
  }
  .hover-popup-4 {
    top: -210%;
    left: -290%;
  }
  .circle-container:hover.circle-image-5::after,
  .circle-container:hover.circle-image-6::after {
    min-width: 120px;
  }
}

@media (max-width: 1024px) {
  .circle-image-1::after,
  .circle-image-2::after,
  .circle-image-3::after,
  .circle-image-4::after,
  .circle-image-5::after,
  .circle-image-6::after {
    font-size: 16px;
  }
  .circle-image-1::after {
    top: -40%;
  }
  .circle-image-2::after {
    top: -65%;
    line-height: normal;
  }
  .circle-image-3::after {
    line-height: normal;
  }
  .circle-image-4::after {
    line-height: normal;
  }
  .circle-image-5::after {
    line-height: normal;
  }
  .circle-image-6::after {
    line-height: normal;
  }
}

@media (max-width: 900px) {
  .hover-popup-3 {
    top: -55%;
    left: -370%;
  }
}

@media (max-width: 768px) {
  .circle-image-1::after,
  .circle-image-2::after,
  .circle-image-3::after,
  .circle-image-4::after,
  .circle-image-5::after,
  .circle-image-6::after {
    font-size: 14px;
  }
  .circle-image-1::after {
    top: -35%;
  }
  .circle-image-2::after {
    top: -55%;
  }
  .circle-image-3::after,
  .circle-image-4::after,
  .circle-image-5::after,
  .circle-image-6::after {
    top: 110%;
    }
  }

@media (max-width: 767px) {
  .map-container {
    display: none;
  }
  .map-container-tablet {
    display: block;
  }
}

@media (max-width: 414px) and (min-width: 320px) {
  .map-container-tablet {
    display: none;
  }
  .map-container-mobile {
    display: block;
  }
}
</style>