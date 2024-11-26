<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const limit = ref(4)
const page = ref(1)
const isLoading = ref(true)
const printData = ref([])
const url = computed(() => {
  return `https://jsonplaceholder.typicode.com/users?_limit=${limit.value}&_page=${page.value}`
})

const fetchData = async (url: string) => {
  isLoading.value = true
  try {
    const data = await (await fetch(url)).json()
    return (printData.value = data)
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
    return null
  } finally {
    isLoading.value = false
  }
}

const prevPage = () => {
  page.value = page.value - 1
  fetchData(url.value)
}

const nextPage = () => {
  isLoading.value = true
   page.value = page.value + 1;
   fetchData(url.value)
}

onMounted(() => {
  fetchData(url.value)
})
const svg = `
 <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/> <!-- Добавь в конце stroke: rgba(0, 123, 255, 0.8) настройка цвет анимации-->
      `
</script>

<template>
  <div class="review-container">
    <h1 class="header-text">Отзывы</h1>
    <div class="card-container">
      <el-card
        v-loading="isLoading"
        element-loading-text="Loading..."
        :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(122, 122, 122, 0.8)"
        v-for="data in printData"
        :key="data.id"
        class="card-body"
      >
        <template #header>
          <h3 class="card-title">{{ data.name }}</h3>
        </template>
        <template #default>
          <h3 class="card-title">{{ data.id }}</h3>
          <h3 class="card-title">{{ data.address.street }}</h3>
          <h3 class="card-title">{{ data.phone }}</h3>
        </template>
        <template #footer>
          <a :href="data.website" target="_blank">Сайт</a>
        </template>
      </el-card>
    </div>
    <div class="button-container">
      <el-button @click="prevPage">Предыдущая страница</el-button>
      <el-button @click="nextPage">Следующая страница</el-button>
    </div>
  </div>
</template>

<style scoped>
/*.el-loading-spinner .el-loading-text{
  color: rgba(0, 123, 255, 0.8); !* Цвет текста Loading... *!
}*/
::v-deep .el-card__footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .el-card__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
}
::v-deep .el-card__header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.review-container {
  width: 100%;
  height: 90vh;
}

.header-text {
  font-size: 4rem;
  text-align: center;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
}

.button-container {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-body {
  width: 300px;
  height: auto;
  border-radius: 20px;
  margin-top: 50px;
}
.card-body:hover {
  /* background-color: rgba(135, 206, 250, 0.5); !* Светло-голубой цвет с прозрачностью *!
   transition: background-color 0.3s ease; !* Плавный переход *!*/
  border-color: goldenrod; /* Цвет границы при наведении */
  cursor: pointer;
}
</style>
