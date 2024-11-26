<script setup lang="ts">
import HeaderSection from '@/vues/01-HeaderSection.vue';
import AboutSection from '@/vues/02-AboutSection.vue';
import RouteSection from '@/vues/03-RouteSection.vue';
import GallerySection from '@/vues/04-GallerySection.vue';
import TariffsSection from '@/vues/05-TariffsSection.vue';
import FaqSection from '@/vues/06-FaqSection.vue';
import ReviewSection from '@/vues/07-ReviewSection.vue';
import FormSection from '@/vues/08-FormSection.vue';
import Footer from '@/vues/09-Footer.vue';

import { ref, onMounted, onUnmounted, provide } from 'vue';

// Логика обработки прокрутки
const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

// Логика обработки ширины окна
const windowWidth = ref<number>(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

// Логика отслеживания видимости секций
const initializeIntersectionObserver = () => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionNames = entry.target.querySelectorAll('.section-name');
          sectionNames.forEach((sectionName) => {
            if (entry.isIntersecting) {
              (sectionName as HTMLElement).style.color = 'var(--color-light)';
            } else {
              (sectionName as HTMLElement).style.color = 'var(--color-light-title)';
            }
          });
        });
      },
      {
        threshold: 0.4, // Секция считается видимой, если 50% её содержимого в пределах экрана
      }
  );

  const sections = document.querySelectorAll('section');
  sections.forEach((section) => observer.observe(section));
};

// Монтаж компонентов
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateWindowWidth);

  // Инициализация наблюдателя видимости секций
  initializeIntersectionObserver();
});

// Удаление событий при размонтировании
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateWindowWidth);
});

// Предоставляем реактивную ширину окна для дочерних компонентов
provide('windowWidth', windowWidth);
</script>

<template>
  <div class="app">
    <main class="main">
      <header-section />
      <about-section id="about" />
      <route-section id="route" />
      <gallery-section id="gallery" />
      <tariffs-section id="tariffs" />
      <faq-section id="faq" />
      <review-section id="reviews" />
      <form-section id="order"/>
    </main>
    <Footer id="contacts" />
  </div>
</template>

<style scoped>
.app {
  max-width: 100%;
  background-color: var(--color-background-base);
  overflow: hidden;
}
</style>
