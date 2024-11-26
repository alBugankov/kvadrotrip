<script setup lang="ts">
</script>

<template>
  <div class="faq-container" id="faq">
    <h1 class="header-text">Часто задаваемые вопросы</h1>
  </div>
  <div class="collapse-container">
    <el-collapse accordion>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Question 1</div>
        </template>
        <template #icon>
          <span class="collapse-icon">+</span>
        </template>
        <div class="item-answer">This is the answer to question 1.</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Question 2</div>
        </template>
        <template #icon>
          <span class="collapse-icon">+</span>
        </template>
        <div class="item-answer">This is the answer to question 2.</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Question 3</div>
        </template>
        <template #icon>
          <span class="collapse-icon">+</span>
        </template>
        <div class="item-answer">This is the answer to question 3.</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Question 4</div>
        </template>
        <template #icon>
          <span class="collapse-icon">+</span>
        </template>
        <div class="item-answer">This is the answer to question 4.</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Question 5</div>
        </template>
        <template #icon>
          <span class="collapse-icon">+</span>
        </template>
        <div class="item-answer">This is the answer to question 5.</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Question 6</div>
        </template>
        <template #icon>
          <span class="collapse-icon">+</span>
        </template>
        <div class="item-answer">This is the answer to question 6.</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
::v-deep .el-collapse-item__content {
  padding: 0; /* Нижний отступ внутри блока ответа который не закрашивался */
}
::v-deep .el-collapse-item__header {
  border-bottom: none; /* Нижняя дефолтная граница каждого вопроса */
  background-color: lightgrey; /* Цвет фона блока вопросов */
}
/* Новый стиль для заголовков вопросов */
.custom-title {
  text-align: center; /* Центрируем текст заголовка */
  padding: 10px; /* Внутренний отступ для заголовка */
  font-weight: bold; /* Полужирный шрифт для заголовка */
  width: 100%; /* Задаем ширину 100% */
  display: flex; /* Используем flex для центрирования */
  justify-content: center; /* Центрируем содержимое по горизонтали */
  align-items: center; /* Центрируем содержимое по вертикали */
}
.item-answer {
  font-size: 16px; /* Увеличение размера шрифта */
  padding: 10px; /* Отступы внутри блока с ответом */
  background-color: #f0f4f8; /* Цвет фона для лучшего контраста */
}
.faq-container{
  width: 100%;
  height: auto;
  text-align: center;
  margin-bottom: 50px;
}
.collapse-container {
  width: 60%;
  height: 80vh;
  margin: 0 auto;
}
.header-text {
  font-size: 4rem;
  text-align: center;
}
.collapse-icon {
  font-size: 20px; /* Увеличиваем размер значка */
  padding-right: 30px; /* Добавляем отступ справа */
  display: inline-block; /* Чтобы отступ работал */
}
.item-question {
  margin-bottom: 10px; /* Отступ между элементами */
  border-radius: 20px; /* Закругленные края всего блока вопроса */
  overflow: hidden; /* Избегаем обрезания содержимого */
  border: 1px solid #ebeef5; /* Граница вокруг вопроса */
  background-color: #f0f4f8; /* Фон для всего блока вопроса */
}
.el-collapse-item:hover {
  border: 1px solid goldenrod; /* Цвет границы при наведении */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Тень при наведении */
}
.el-collapse {
  border: none; /* Верхняя дефолтная границы всего el-collapse */
}
</style>
