<script setup lang="ts">

</script>

<template>
  <div class="tariff-container">
    <div class="header-container">
  <h1 class="header-text">Тарифы</h1>
    </div>
    <div class="card-container">

      <el-card class="card" :body-style="{ padding: '20px' }" :hoverable="true">
        <template #header>
          <h3 class="card-title">Одноместный квадроцикл</h3>
        </template>
        <div class="content" style="height: 410px;">
        <img
            src="../../img/tariffimg/single.jpg"
            class="card-image-single"
            alt="Image 1"
        />
          <p class="card-description settings">Создан что бы покорять бездорожье в гордом одиночестве!</p>
          </div>
        <template #footer>
            <el-button class="card-button">Оставить заявку</el-button>
          </template>
      </el-card>

      <el-card class="card" :body-style="{ padding: '20px' }" :hoverable="true">
        <template #header>
          <h3 class="card-title">Двухместный квадроцикл</h3>
        </template>
        <div class="content" style="height: 410px;">
        <img
            src="../../img/tariffimg/double.jpg"
            class="card-image-double"
            alt="Image 2"
        />
        <p class="card-description">Идеален для поездок вдвоем, имеет спинку для комфортного размещения пассажира и удобные рукоятки что бы держаться на лихих виражах. Так же подходит для тех кто хочет взять с собой ребенка</p>
        </div>
          <template #footer>
          <div class="footer-container">
            <el-button class="card-button">Оставить заявку</el-button>
          </div>
        </template>
      </el-card>

      <el-card class="card" :body-style="{ padding: '20px' }" :hoverable="true">
        <template #header>
          <h3 class="card-title">В тур с инструктором</h3>
        </template>
        <div class="content" style="height: 410px;">
          <img
              src="../../img/tariffimg/safe3.jpg"
              class="card-image-safe"
              alt="Image 3"
          />
          <p class="card-description">Если Вы по прежнему не уверены в своих навыках, добро пожаловать на борт в составе нашей команды. Наши профессиональные инструктора прокатят Вас с ветерком и вернут на базу в целости и сохранности!</p>
        </div>
        <template #footer>
          <div class="footer-container">
            <el-button class="card-button">Оставить заявку</el-button>
          </div>
        </template>
      </el-card>

      <el-card class="card" :body-style="{ padding: '20px' }" :hoverable="true">
        <template #header>
          <h3 class="card-title">Услуга ребенок в безопасности</h3>
        </template>
        <div class="content" style="height: 410px;">
        <img
            src="../../img/tariffimg/kid.jpg"
            class="card-image-kid"
            alt="Image 3"
        />
        <p class="card-description">Если вы хотите взять с собой в тур ребенка, но не уверены в своих навыках вождения и переживаете за него, то передайте ребенка опытному инструктору!</p>
        </div>
          <template #footer>
          <div class="footer-container">
            <el-button class="card-button">Оставить заявку</el-button>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.el-card__footer {
  height: 100px;
}
.el-card__body {
  height: 400px;
}
.el-card__header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tariff-container {
  width: 100%;
  height: 90vh;
}
.header-text {
  font-size: 4rem;
  text-align: center;
}
.card-container {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
}
.card {
  width: 400px;
  height: 600px;
  border-radius: 20px;
  text-align: center;
}
.card:hover {
  /* background-color: rgba(135, 206, 250, 0.5); !* Светло-голубой цвет с прозрачностью *!
   transition: background-color 0.3s ease; !* Плавный переход *!*/
  border-color: goldenrod; /* Цвет границы при наведении */
}
.card-image-double {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: 50% 55%;
  border-radius: 20px;
}
.card-image-single {
  width: 360px;
  height: 200px;
  object-fit: cover;
  object-position: 50% 90%;
  border-radius: 20px;
}
.card-image-kid {
  width: 360px;
  height: 200px;
  object-fit: cover;
  object-position: 50% 46%;
  border-radius: 20px;
}
.card-image-safe {
  width: 360px;
  height: 200px;
  object-fit: cover;
  object-position: 50% 20%;
  border-radius: 20px;
}
.card-title {
  font-size: 1.5rem; /* Размер заголовка */
  margin: 10px 0 5px; /* Отступы для заголовка */
  text-align: center;
}
.card-description {
  font-size: 1.1rem; /* Размер описания */
  color: #666; /* Цвет текста описания */
  text-align: center;
}
.card-button {
  border-radius: 20px;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.settings {
  margin: 30px;
}
.header-container {
  margin-top: 40px;
}
</style>