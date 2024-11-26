<template>
  <div class="gallery-container">
    <div class="text-nav-container">
      <div class="firstSection">
        <h1 class="header-text">Галерея</h1>
      </div>
      <div class="secondSection">
        <el-button class="orderButton">Оставить заявку</el-button>
      </div>
    </div>

    <el-carousel :interval="5000" height="50vh" type="card" arrow="hover" class="image-carousel">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="carousel-image" alt="Carousel image" />
      </el-carousel-item>
    </el-carousel>


  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
  'https://picsum.photos/id/1015/800/400',
  'https://picsum.photos/id/1055/800/400',
  'https://picsum.photos/id/1025/800/400',
  'https://picsum.photos/id/1035/800/400',
  'https://picsum.photos/id/1039/800/400',
]);

</script>

<style scoped lang="scss">
.gallery-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header-text {
  font-size: 4rem;
}

.text-nav-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  padding: 0 100px;
}

.firstSection {
  display: flex;
  justify-content: flex-start;
}

.secondSection {
  display: flex;
  justify-content: flex-end;
}

.custom-large-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 20px;
}

.image-carousel {
  width: 100%; /* Задаем ширину карусели */
  margin: 0; /* Убираем любые отступы */
}
.carousel-image {
  width: 100%; /* Задаем ширину изображения */
  height: 100%; /* Устанавливаем высоту изображения */
  object-fit: cover; /* Подгоняем изображение по размеру */
  border-radius: 20px;
}
.orderButton {
  margin-top: 50px;
  border-radius: 20px;
  font-size: 20px;
}
</style>
