<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Загружаем скрипт Elfsight
  const script = document.createElement('script');
  script.src = 'https://static.elfsight.com/platform/platform.js';
  script.async = true;
  document.body.appendChild(script);

  // Наблюдаем за DOM на случай появления рекламного элемента
  const observer = new MutationObserver(() => {
    const elfsightLink = document.querySelector('a[href*="elfsight.com/google-reviews-widget"]');
    if (elfsightLink) {
      elfsightLink.classList.add('visually-hidden'); // Добавляем класс для скрытия
      observer.disconnect(); // Отключаем наблюдатель после выполнения
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
</script>

<template>
<section class="review-section container">
  <div class="title-container">
    <div class="separator">
      <p class="section-title">О нас <span class="last-world">честно</span></p>
    </div>
    <div class="separator">
      <h2 class="section-name">[ отзывы ]</h2>
    </div>
  </div>
  <div class="review-container">
    <div class="review-content">
      <div class="elfsight-app-5cdbd14c-1b28-492a-8c54-f590d3b0bc06" data-elfsight-app-lazy></div>
    </div>
  </div>
</section>
</template>

<style scoped>
.review-section {
  height: auto;
}
.review-container {
  width: 100%;
  height: auto;
  border-radius: var(--element-radius);
  background: url("@/assets/images/Review-background.svg") center/cover no-repeat;
  padding-top: 80px;
}

.review-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep(a[href*="elfsight.com/google-reviews-widget"]) {
  display: none !important;
}

@media (max-width: 1920px) and (min-width: 320px) {
  div.eapps-widget {
    padding-inline: calc(10px + (30 - 10) * ((100vw - 320px) / (1920 - 320)));
  }
}

@media (max-width: 767px) {
  .review-container {
    border-radius: var(--element-radius-mobile);
  }
  ::v-deep(.dIKKtD) {
    margin-inline: 5px;
  }
}
</style>