<script setup lang="ts">
import { ref } from 'vue';
import k4Image from '@/img/gallery/k1.jpg';

const largeImage = ref<string | null>(null); // Уточняем тип


const showImage = (url) => {
  largeImage.value = url;
};

const hideImage = () => {
  largeImage.value = null;
};
</script>

<template>
  <div class="route-section-container">
    <h1 class="header-text">Маршрут</h1>
    <svg class="background-svg" viewBox="0 0 1108 768" preserveAspectRatio="xMidYMid meet">

      <image href="@/img/background/kbsim.png" width="100%" height="100%" />

      <defs>
        <clipPath id="circle-clip1">
          <circle cx="250" cy="200" r="50" />
        </clipPath>
        <clipPath id="circle-clip2">
          <circle cx="870" cy="290" r="50" />
        </clipPath>
        <clipPath id="circle-clip3">
          <circle cx="480" cy="430" r="50" />
        </clipPath>
        <clipPath id="circle-clip4">
          <circle cx="220" cy="600" r="50" />
        </clipPath>
        <clipPath id="circle-clip5">
          <circle cx="870" cy="650" r="50" />
        </clipPath>
      </defs>


      <!-- Первая картинка / блок текста / Увеличение при наведении -->
      <image
          class="circle-image"
          :href="k4Image" x="200" y="150"
          width="100"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clip-path="url(#circle-clip1)"
          @mouseover="showImage(k4Image)"
          @mouseleave="hideImage()"
      />
      <text x="320" y="150" font-size="16" fill="black">
        <tspan x="310" dy="1.5em">This is the first line of text</tspan>
        <tspan x="320" dy="1.5em">This is the second line</tspan>
        <tspan x="310" dy="1.5em">And this is the third line</tspan>
      </text>
      <text x="250" y="270" font-size="16" fill="black" text-anchor="middle">Text below</text>

      <!-- Вторая картинка / блок текста / Увеличение при наведении -->
      <image
          class="circle-image" href="https://picsum.photos/536/354" x="820" y="240"
          width="100"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clip-path="url(#circle-clip2)"
          @mouseover="showImage('https://picsum.photos/536/354')"
          @mouseleave="hideImage()"
      />
      <text x="940" y="245" font-size="16" fill="black">
        <tspan x="930" dy="1.5em">This is the first line</tspan>
        <tspan x="940" dy="1.5em">This is the second line</tspan>
        <tspan x="930" dy="1.5em">This is the third line</tspan>
      </text>
      <text x="870" y="360" font-size="16" fill="black" text-anchor="middle">Text below</text>

      <!-- Третья картинка / блок текста / Увеличение при наведении -->
      <image
          class="circle-image"
          href="https://picsum.photos/536/354" x="430" y="380"
          width="100"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clip-path="url(#circle-clip3)"
          @mouseover="showImage('https://picsum.photos/536/354')"
          @mouseleave="hideImage()"
      />
      <text x="550" y="385" font-size="16" fill="black">
        <tspan x="540" dy="1.5em">This is the first line</tspan>
        <tspan x="550" dy="1.5em">This is the second line</tspan>
        <tspan x="540" dy="1.5em">This is the third line</tspan>
      </text>
      <text x="480" y="500" font-size="16" fill="black" text-anchor="middle">Text below</text>

      <!-- Четвёртая картинка / блок текста / Увеличение при наведении -->
      <image
          class="circle-image"
          href="https://picsum.photos/536/354" x="170" y="550"
          width="100"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clip-path="url(#circle-clip4)"
          @mouseover="showImage('https://picsum.photos/536/354')"
          @mouseleave="hideImage()"
      />
      <text x="290" y="546" font-size="16" fill="black">
        <tspan x="280" dy="1.5em">This is the first line</tspan>
        <tspan x="290" dy="1.5em">This is the second line</tspan>
        <tspan x="280" dy="1.5em">This is the third line</tspan>
      </text>
      <text x="220" y="670" font-size="16" fill="black" text-anchor="middle">Text below</text>

      <!-- Пятая картинка / блок текста / Увеличение при наведении -->
      <image
          class="circle-image"
          href="https://picsum.photos/536/354"
          x="820"
          y="600"
          width="100"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clip-path="url(#circle-clip5)"
          @mouseover="showImage('https://picsum.photos/536/354')"
          @mouseleave="hideImage()"
      />
      <text x="940" y="605" font-size="16" fill="black">
        <tspan x="930" dy="1.5em">This is the first line</tspan>
        <tspan x="940" dy="1.5em">This is the second line</tspan>
        <tspan x="930" dy="1.5em">This is the third line</tspan>
      </text>
      <text x="870" y="720" font-size="16" fill="black" text-anchor="middle">Text below</text>
    </svg>
    <div class="image-container">
      <img
          v-if="largeImage"
          :src="largeImage"
          class="large-image"
          @mouseleave="hideImage"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.route-section-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(217,217,217);
}

.background-svg {
  width: 100%; /* Задаем ширину SVG */
  height: auto; /* Высота будет автоматически рассчитываться */
  max-width: 2200px; /* Ограничиваем максимальную ширину */
  display: block; /* Убираем дополнительные пробелы вокруг SVG */
}

.header-text {
  font-size: 4rem;
}
.large-image {
  object-fit: cover;
  object-position: 50% 70%;
  width: 536px;
  height: 354px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Добавляем тень для улучшения визуального восприятия */
  border-radius: 20px;
}
.circle-image {
  cursor: pointer; /* Курсор при наведении */
  z-index: 10; /* Убедитесь, что ваш элемент выше по слою */
}
.image-container {
  position: fixed; /* Используем fixed для позиционирования по всему экрану */
  top: 55%; /* Центрируем по вертикали */
  left: 15%; /* Центрируем по горизонтали */
  transform: translate(-50%, -50%); /* Смещаем на половину ширины и высоты изображения */
  z-index: 1000; /* Обеспечиваем, чтобы оно отображалось выше других элементов */
  display: flex; /* Используем Flexbox для центрирования */
  align-items: center; /* Центрируем по вертикали */
  justify-content: center; /* Центрируем по горизонтали */
}
</style>