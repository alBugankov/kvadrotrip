<template>
  <NavBar/>
      <div class="header-container">
        <div class="overlay">
          <h1 class="header-text">
            Туры на квадроциклах <br /> в Нячанге
          </h1>
          <h4 class="underheader-text">
            Любите экстрим и позитив, тогда вам к нам
          </h4>
          <el-button class="button">Оставить заявку</el-button>
        </div>
      </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/new/NavBar.vue'

</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: left; /* Центрирование по горизонтали */
  align-items: center; /* Центрирование по вертикали */
  width: 100%;
  height: 60vh; /* или нужная высота */
  background-image: url('@/img/gallery/k4.jpg');
  background-size: cover; /* Для заполнения контейнера */
  background-position: center; /* Центрирование изображения */
  background-attachment: fixed; /* Фиксированное положение фона !!!!*/
  overflow: hidden; /* Скрываем лишнее содержимое */
}
.overlay {
  margin-left: 10rem;
}
h1 {
  font-size: 5rem;
  color: white;
}
h4 {
  color: white;
  font-size: 1.3rem;
}
.button {
  margin-top: 1rem;
}
div.el-backtop {
  width: 60px;
  height: 60px;
  display: flex; /* Используем Flexbox для центрирования */
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center; /* Центрирование по вертикали */
  background-color: var(--el-bg-color-overlay); /* Цвет фона кнопки */
  color: #1989fa; /* Цвет текста */
  border-radius: 50%; /* Скругление углов */
  box-shadow: var(--el-box-shadow-lighter); /* Тень */
}
</style>

