<script setup lang="ts">
import { ref } from 'vue';

// Массив слайдов
const slides = [
  { image: new URL('@/assets/images/gallery/1.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/2.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/3.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/4.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/5.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/6.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/7.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/8.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/9.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/10.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/11.jpg', import.meta.url).href },
  { image: new URL('@/assets/images/gallery/12.jpg', import.meta.url).href },
];

// Индексы для left, front и right слайдов
const leftIndex = ref(0);
const frontIndex = ref(1);
const rightIndex = ref(2);

// Обновляем слайды для отображения
const slidesData = ref({
  leftSlide: slides[leftIndex.value].image,
  frontSlide: slides[frontIndex.value].image,
  rightSlide: slides[rightIndex.value].image,
});

// Функция для предзагрузки изображения
const preloadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
  });
};

// Функция для обновления слайдов
const updateSlides = async () => {
  await Promise.all([
    preloadImage(slides[leftIndex.value].image),
    preloadImage(slides[frontIndex.value].image),
    preloadImage(slides[rightIndex.value].image),
  ]);

  slidesData.value = {
    leftSlide: slides[leftIndex.value].image,
    frontSlide: slides[frontIndex.value].image,
    rightSlide: slides[rightIndex.value].image,
  };
};

// Функция для перехода вправо
const goToRight = () => {
  leftIndex.value = (leftIndex.value + 1) % slides.length;
  frontIndex.value = (frontIndex.value + 1) % slides.length;
  rightIndex.value = (rightIndex.value + 1) % slides.length;
  updateSlides();
};

// Функция для перехода влево
const goToLeft = () => {
  leftIndex.value = (leftIndex.value - 1 + slides.length) % slides.length;
  frontIndex.value = (frontIndex.value - 1 + slides.length) % slides.length;
  rightIndex.value = (rightIndex.value - 1 + slides.length) % slides.length;
  updateSlides();
};

// Логика для обработки свайпов
let touchStartX = 0;

const onTouchStart = (event) => {
  touchStartX = event.touches[0].clientX;
};

const onTouchEnd = (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > 30) { // проверка минимальной длины свайпа
    if (swipeDistance > 0) {
      goToLeft(); // свайп вправо
    } else {
      goToRight(); // свайп влево
    }
  }
};
</script>

<template>
  <section class="gallery-section">
    <div class="container-fullscreen">
      <div class="title-container container">
        <div class="separator">
          <p class="section-title">С нами <span class="last-world">Весело</span></p>
        </div>
        <div class="separator">
          <h2 class="section-name">[ галерея ]</h2>
        </div>
      </div>
      <div class="slider-container">
        <div class="slider" @touchstart="onTouchStart" @touchend="onTouchEnd">
          <div class="slides-container">
            <div class="left-slide">
              <img
                  :src="slidesData.leftSlide"
                  :key="leftIndex.value"
                  alt=""
                  loading="lazy"
              />
            </div>
            <div class="front-slide">
              <img
                  :src="slidesData.frontSlide"
                  :key="frontIndex.value"
                  alt=""
                  loading="lazy"
              />
            </div>
            <div class="right-slide">
              <img
                  :src="slidesData.rightSlide"
                  :key="rightIndex.value"
                  alt=""
                  loading="lazy"
              />
            </div>
          </div>
          <div class="controls-container">
            <div class="button-container">
              <img
                  class="left-button"
                  src="@/assets/icons/gallery-buttons/left-button.svg"
                  alt=""
                  width="85" height="33" loading="lazy"
                  @click="goToLeft"
              />
              <img
                  class="right-button"
                  src="@/assets/icons/gallery-buttons/right-button.svg"
                  alt=""
                  width="85" height="33" loading="lazy"
                  @click="goToRight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.slider {
  width: 100%;
  max-width: 1920px;
}

.slider-container {
}

.slides-container {
  display: flex;
  justify-content: center;
  height: auto;
  overflow: hidden;
}

.left-slide,
.right-slide,
.front-slide {
  flex: 0 0 auto;
}

.left-slide {
  width: 538px;
  height: 434px;
  opacity: 50%;
}

.front-slide {
  display: inline-flex;
  position: relative;
  width: 836px;
  height: 676px;
  margin-inline: 40px;
  z-index: 10;
}

.front-slide::after {
  content: '';
  top: 59%;
  left: 73%;
  width: 658px;
  height: 315px;
  position: absolute;
  background: url("@/assets/icons/gallery-splash/right-splash.svg") center/contain no-repeat;
  z-index: -1;
}

.front-slide::before{
  content: '';
  top: 59%;
  left: -52%;
  width: 658px;
  height: 315px;
  position: absolute;
  background: url("@/assets/icons/gallery-splash/left-splash.svg") center/contain no-repeat;
  z-index: -1;
}

.right-slide {
  width: 538px;
  height: 434px;
  opacity: 50%;
}

.slides-container img {
  width: 100%;
  height: 100%;
  border-radius: var(--element-radius);
  object-fit: cover;
  transition: opacity var(--transition-duration) ease-in-out;
}

@media (max-width: 1400px) {
  .front-slide::before,
  .front-slide::after {
    display: none;
  }
}

@media (max-width: 1024px) and (min-width: 320px) {
  .front-slide {
    width: calc(278px + (836 - 278) * ((100vw - 320px) / (1800 - 320)));
    height: calc(226px + (676 - 226) * ((100vw - 320px) / (1800 - 320)));
    margin-inline: 30px;
  }
  .left-slide,
  .right-slide {
    width: calc(181px + (836 - 181) * ((100vw - 320px) / (1800 - 320)));
    height: calc(145px + (676 - 145) * ((100vw - 320px) / (1800 - 320)));
  }
  .slider-container {
    height: auto;
  }
}

@media (max-width: 768px) {
  .controls-container {
    display: none;
  }
}

@media (max-width: 640px) {
  .front-slide {
    margin-inline: 10px;
  }
  .slides-container img {
    border-radius: var(--element-radius-mobile);
  }
  .slider-container {
    margin-top: 16px;
  }
}


</style>
