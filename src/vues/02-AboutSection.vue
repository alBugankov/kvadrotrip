<script setup lang="ts">
import { ref } from 'vue'

const isPlaying = ref(false)
const isLoading = ref(false) // Добавляем переменную isLoading
const svg = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; stroke: #FF2442; fill: rgba(0, 0, 0, 0)"/>
`

function playVideo() {
  // Устанавливаем isLoading в true на 2 секунды
  isLoading.value = true // Устанавливаем isLoading в true
  setTimeout(() => {
    isLoading.value = false // Сбрасываем isLoading в false через 2 секунды
  }, 1500)
  // Получаем iframe элемента
  const iframe = document.querySelector('.video-container iframe')

  // Проверяем, существует ли iframe
  if (iframe) {
    // Проверяем, если видео еще не проигрывается
    if (!isPlaying.value) {
      // Устанавливаем src заново с параметром autoplay
      iframe.src = 'https://www.youtube.com/embed/wjm42PHnNMs?autoplay=1&si=fsCtloQRXT2meuqz'
      isPlaying.value = true // Устанавливаем флаг, что видео запущено
    }
  }

  // Скрываем постер
  setTimeout(() => {
    const videoContainer = document.querySelector('.video-container')
    if (videoContainer) {
      videoContainer.classList.add('hidden')
    }
  }, 1000)
}
</script>

<template>
  <section class="about-section">
    <div class="container">
      <div class="about-section-title-container title-container">
        <div class="separator">
          <div>
            <p class="section-title">С нами <span class="last-world">надежно</span></p>
          </div>
        </div>
        <div class="separator">
          <h2 class="section-name">[ о нас ]</h2>
        </div>
      </div>
      <div class="about-section-content">
        <div class="text-container">
          <div class="description-container">
            <h3 class="description">
              Заберем вас из отеля и организуем тур на квадроциклах по живописным ландшафтам заповедника Хон Ба. Наши опытные русскоговорящие инструкторы проведут вас по интересному и разнообразному маршруту, открывая шикарные виды и скрытые уголки природы
            </h3>
            <div class="items-container">
              <div class="description-item">
                <p class="description-item-title">9 лет</p>
                <p class="description-item-subtitle">
                  предоставляем услуги по организации квадротуров
                </p>
              </div>
              <div class="description-item">
                <p class="description-item-title">>40 к</p>
                <p class="description-item-subtitle">
                  туристов <br />проехали с нами <br />по маршруту
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="video-container"
          @click="playVideo"
          v-loading="isLoading"
          element-loading-text="Loading..."
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
        >
          <iframe
            src="https://www.youtube.com/embed/wjm42PHnNMs?si=fsCtloQRXT2meuqz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
::v-deep .el-loading-mask {
  background-color: var(--color-background-accent);
  border-radius: var(--element-radius);
  transition: opacity 0.1s;
}
.container {
  margin-bottom: 40px;
}
::v-deep .el-loading-text {
  color: var(--color-red);
  font-size: 20px;
}

.about-section-content:last-child {
  justify-content: space-between;
}

.about-section {
  width: 100%;
}

.about-section-content::before {
  content: '';
  position: absolute;
  left: -17.5%;
  top: 24%;
  background: url('@/assets/icons/about/palm.svg') center/cover no-repeat;
  width: min(531px, 27.66vw); /*27.66vw  531px*/
  height: 472px; /*54.7vh  472px*/
  display: inline-block;
  z-index: 10;
}

.about-section-title-container {
 /*margin-top: 200px;*/
}

.about-section-content {
  height: 556px;
  position: relative;
  display: flex;
  flex-direction: row;
}

.text-container,
.video-container {
  width: calc(100% / 2);
}

.description-container {
  width: 534px;
  height: 356px;
}

.description {
  font-family: var(--raleway-regular);
  font-size: 16px;
  color: var(--color-light);
  cursor: default;
  height: auto;
}

.video-container {
  position: relative;
  width: 836px;
  height: 556px;
}

.video-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/poster.jpg') center/cover no-repeat;
  z-index: 100;
  border-radius: var(--element-radius);
}

.video-container.hidden::before {
  display: none;
}

.video-container::after {
  content: '';
  width: 224px;
  height: 127px;
  position: absolute;
  top: 422px;
  left: -264px;
  background: url('@/assets/icons/stickers/about-sticker.svg') center/contain no-repeat;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: var(--element-radius);
}

.items-container {
  display: flex;
  margin-top: 40px;
}

.description-item {
  width: 221px;
  aspect-ratio: 1;
  text-align: center;
  background: url('@/assets/icons/about/roundRedBall1.png') center/contain no-repeat;
  z-index: 100;
  cursor: default;
}

.description-item:last-child {
  background: url('@/assets/icons/about/roundRedBall2.png') center/contain no-repeat;
  cursor: default;
}

.description-item:last-child {
  margin-left: 30px;
}

.description-item-title {
  font-family: var(--erbaum-medium);
  font-weight: 500;
  font-size: 42px;
  color: var(--color-light);
  padding-top: 50px;
  line-height: 110%;
}

.description-item-subtitle {
  width: 212px;
  height: 54px;
  font-family: var(--raleway-semibold);
  font-weight: 600;
  font-size: 18px;
  color: var(--color-light);
  line-height: 100%;
}

@media (max-width: 1400px) {
  .video-container {
    margin-top: 60px;
    width: 92.18vw;
    height: 61.32vw;
    max-width: 100%;
  }
  .about-section-content::before {
    display: none;
  }
  .about-section-content {
    flex-direction: column;
    height: 100%;
  }
  .video-container::after {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  .container {
    width: 100vw;
  }
}

@media (max-width: 1024px) {
 .description-container,
 .about-section-content {
   height: auto;
 }
}

@media (max-width: 700px) {
  .description {
    font-size: clamp(11px, 2.08vw, 16px);
  }
  .description-container {
    max-width: 100%;
  }
  .text-container {
    width: 100%;
  }
  .container {
    padding-inline: clamp(10px, 3vw, 30px);
    margin-bottom: 0;
  }
  .video-container {
    max-width: 100%;
    margin-top: clamp(20px, 5vw, 60px);
  }
  .video-container::after {
    width: max(115px,29.16vw);
    height: max(50px, 16.53vw);
  }
  .video-container::before {
    border-radius: var(--element-radius-mobile);
  }
  .video-container iframe {
    border-radius: var(--element-radius-mobile);
  }
  ::v-deep .el-loading-mask {
    border-radius: var(--element-radius-mobile);
  }
  .description-item {
    width: max(131px, 28.77vw);
    aspect-ratio: 1;
  }
  .description-item-title {
    font-size: clamp(20px, 5.46vw, 42px);
  }
  .description-item-subtitle {
    font-size: clamp(11px, 2.34vw, 17px);
    width: clamp(131px, 27.6vw, 212px);
  }
  .items-container {
    margin-top: clamp(10px, 5.2vw, 40px)
  }
}

@media (max-width: 570px) {

  .description-item-title {
    padding-top: 10px;
  }
  .description-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .description {
    font-size: clamp(11px, 2.08vw, 16px);
  }
}
</style>
