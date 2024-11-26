<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue';

const navbarStyle = ref({
  backgroundColor: 'transparent',
  transition: 'background-color 0.2s linear'
});

const windowWidth = inject('windowWidth');
const isMenuOpen = ref(false)


const avatarStyle = ref( {
  opacity: 1,
});

const updateNavbarColorAndLogo = () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = Math.min(scrollY / maxScroll, 1); // от 0 до 1

  // Изменяем прозрачность цвета хедера при скроле вниз и прячем лого на 5% скрола страницы
  if (windowWidth.value > 1400) {
    navbarStyle.value.backgroundColor = `rgba(255, 36, 66, ${scrollFraction})`;
  } else {
    navbarStyle.value.backgroundColor = `transparent`;
  }
  avatarStyle.value.opacity = 1 - scrollFraction * 20;

  if (avatarStyle.value.opacity <= 0) {
    avatarStyle.value.display = 'none'; // Скрываем логотип
    isMenuOpen.value = false;
  } else {
    avatarStyle.value.display = 'block'; // Показываем логотип
  }

  // Заполняем thumb цветом var(--color-red)
  const thumbFillFraction = scrollFraction; // Процент заполнения от 0 до 1
  const thumbBackgroundColor = `linear-gradient(to top, var(--color-red) ${thumbFillFraction * 100}%, var(--color-background-base) ${thumbFillFraction * 100}%)`;

  // Устанавливаем цвет thumb в зависимости от scrollFraction
  document.documentElement.style.setProperty('--scroll-thumb-color', thumbBackgroundColor);

  if (scrollFraction === 0) {
    document.documentElement.style.setProperty('--scroll-thumb-color', `var(--color-background-base)`); // Начальный цвет вверху
  }
};

/** Адаптив меню */


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}


onMounted(() => {
  window.addEventListener('scroll', updateNavbarColorAndLogo);

});

onUnmounted(() => {
  window.removeEventListener('scroll', updateNavbarColorAndLogo);

});
</script>
<template>
  <section class="header-section">
    <div class="section-container">
        <nav class="header-menu" :style="navbarStyle">
          <div class="burger-button" >
            <svg class="burger-svg" v-show="!isMenuOpen" :style="avatarStyle" @click="toggleMenu" width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 14L34 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M10 22.5L34 22.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M10 31L34 31" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="side-menu" v-show="isMenuOpen && windowWidth <= 1400">
              <div class="side-menu-icon">
                <svg class="x-svg" v-show="isMenuOpen" @click="toggleMenu" width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5146 30.4853L30.4852 13.5147" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M13.5146 13.5147L30.4852 30.4853" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="side-menu-content">
                <ul class="side-menu-list">
                  <li class="side-menu-item">
                    <a href="#about" class="header-menu-link">О нас</a>
                  </li>
                  <li class="side-menu-item">
                    <a href="#route" class="header-menu-link">Маршрут</a>
                  </li>
                  <li class="side-menu-item">
                    <a href="#gallery" class="header-menu-link">Галерея</a>
                  </li>
                  <li class="side-menu-item">
                    <a href="#tariffs" class="header-menu-link">Тарифы</a>
                  </li>
                  <li class="side-menu-item">
                    <a href="#faq" class="header-menu-link">Частые вопросы</a>
                  </li>
                  <li class="side-menu-item">
                    <a href="#reviews" class="header-menu-link">Отзывы</a>
                  </li>
                  <li class="side-menu-item">
                    <a href="#contacts" class="header-menu-link">Контакты</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div class="header-menu-content" v-show="windowWidth >= 1401">
            <ul class="header-menu-list-left">
              <li class="header-menu-item">
                <a href="#about" class="header-menu-link">О нас</a>
              </li>
              <li class="header-menu-item">
                <a href="#route" class="header-menu-link">Маршрут</a>
              </li>
              <li class="header-menu-item">
                <a href="#gallery" class="header-menu-link">Галерея</a>
              </li>
              <li class="header-menu-item">
                <a href="#tariffs" class="header-menu-link">Тарифы</a>
              </li>
            </ul>
          </div>
          <div class="header-menu-logo">
            <a href="/public" class="header-logo" :style="avatarStyle">
              <img
                  class="header-logo"
                  src="../assets/icons/logoSVG.svg"
                  alt="Bear ride on ATV"
                  loading="lazy"
              />
            </a>
          </div>
          <div class="header-menu-content" v-show="windowWidth >= 1401">
            <ul class="header-menu-list-right">
              <li class="header-menu-item">
                <a href="#faq" class="header-menu-link">Частые вопросы</a>
              </li>
              <li class="header-menu-item">
                <a href="#reviews" class="header-menu-link">Отзывы</a>
              </li>
              <li class="header-menu-item">
                <a href="#contacts" class="header-menu-link">Контакты</a>
              </li>
            </ul>
          </div>
        </nav>
<div class="header-section-text-container">
<div class="header-title-container">
  <div class="header-title-upper-part">
    <p class="header-title">Квадро</p>
  </div>
  <div class="header-title-lower-part">
    <p class="header-title haveSticker">-Туры</p>
  </div>
  <h1 class="header-subtitle">
    Пройдем на квадроциклах по уникальному, захватывающему маршруту, недоступному другим туристам. Хотите экстрима, ярких эмоций и красивой природы —  присоединяйтесь к нам!
  </h1>

  <button
      class="header-button button desktopVisible"
      type="button"
  >
    <a href="#order">Забронить тур</a>
  </button>

</div>
</div>
    </div>
    <button
        class="header-button button desktopVisible mobileVisible"
        type="button"
    >
      <a href="#order">Забронить тур</a>
    </button>
  </section>
</template>

<style scoped>

.section-container {
  height: 820px;
  display: flex;
  justify-content: flex-end;
  background: url("@/assets/images/headerMain.png") 40% 100%/cover no-repeat;
  border-bottom-left-radius: var(--element-radius);
  border-bottom-right-radius: var(--element-radius);
}

.header-section-text-container {
  width: calc(100% / 2);
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 153px;
}

.header-title-container {
  display: flex;
  width: 700px; /*36.46vw  700px*/
  height: 244px; /*23.46vh (подогнано под 244, действительное 30.46vh)  244px*/
  flex-direction: column;
  font-family: var(--erbaum-medium);
  font-size: 100px; /*5.21vw  100px*/
  color: var(--color-light);
  font-weight: 500;
}

.header-title-upper-part {
  display: flex;
  justify-content: flex-end;
  padding-right: 37px; /*1.93vw  37px*/
  text-transform: uppercase;
  line-height: 110%;
  cursor: default;
}

.header-title-lower-part {
  display: flex;
  position: relative;
  top: -18px;
  justify-content: flex-start;
  text-transform: uppercase;
  line-height: 110%;
  cursor: default;
}

.haveSticker {
  position: relative;
}

.haveSticker::after {
  content: "";
  width: 250px; /*13.02vw  250px*/
  height: 105px;  /*13.11vh  105px*/
  position: absolute;
  margin-top: 5px;
  top: -5px; /*-0.26vw   -5px*/
  left: 387px; /*20.16vw  387px*/
  background: url("@/assets/icons/stickers/header-sticker.svg") center/contain no-repeat;
}

.header-subtitle {
  font-family: var(--raleway-regular);
  font-size: 18px; /*0.94vw  18px*/
  color: var(--color-light);
  cursor: default;
}

.header-button {
  margin-top: 40px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-background-accent);
}

::-webkit-scrollbar-thumb {
  border: 2px solid var(--color-red);
  background: var(--scroll-thumb-color); /* Используем переменную для цвета thumb */
  border-radius: var(--input-radius);
  transition: background 0.2s, border 0.2s; /* Плавный переход цвета и границы */
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-red);
  border: 1px solid var(--color-background-base);
}

.header-menu {
  width: 100%;
  height: var(--header-height);
  display: flex;
  font-family: var(--raleway-medium);
  font-weight: 500;
  font-size: 17px; /*0.94vw 2.25vh 18px*/
  text-transform: uppercase;
  color: var(--color-light);
  position: fixed;
  z-index: 1000;
  justify-content: space-between;
  left: 0;
  right: 0;
  padding-inline: 104px;
}

.header-menu-link {
  display: flex;
  align-items: center;
  height: var(--header-height);
  position: relative; /* новое */
  transition: color var(--transition-duration);
}

.header-menu-link:hover {
  cursor: pointer;
}

.header-menu-list-left,
.header-menu-list-right {
  height: 100%;
  display: flex;
  align-items: center;
}

.header-menu-item:not(:first-child) {
  margin-left: 60px; /* 4.17vw  80px */
}


.header-menu-logo {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.header-logo {
  width: clamp(126px, 7.86vw, 151px); /* 7.86vw 151px */
  height: auto; /* 20.85vh  167px */
}

.header-menu-link::before {
  content: '[';
  left: -20px;
  position: absolute;
  opacity: 0;
  transition: opacity var(--transition-duration);
}

.header-menu-link::after {
  content: ']';
  right: -20px;
  position: absolute;
  opacity: 0;
  transition: opacity var(--transition-duration);
}

.header-menu-link:hover::before,
.header-menu-link:hover::after {
  opacity: 1;
}

.burger-button,
.burger-svg,
.x-svg,
.mobileVisible {
  display: none;
}

@media (max-width: 3840px) {
  .section-container {
    background: url("@/assets/images/headerMain.png") 10% 80%/cover no-repeat;
  }
}

@media (max-width: 2560px) {
  .section-container {
    background: url("@/assets/images/headerMain.png") 10% 85%/cover no-repeat;
  }
}



@media (max-width: 1400px) {
  .burger-button,
  .burger-svg,
  .x-svg {
    display: block;
    color: var(--color-light);
  }
  .header-menu {
    justify-content: center;
  }
  .burger-svg {
    position: absolute;
    top: 20px;
    left: 30px;
  }
  .side-menu {
    width: 320px;
    height: 381px;
    border-bottom-left-radius: var(--input-radius);
    border-bottom-right-radius: var(--input-radius);
    background-color: var(--color-background-accent);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .side-menu-icon {
    color: var(--color-light);
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 30px;
    margin-top: 20px;
    height: 43px;
  }
  .side-menu-content {
    width: 100%;
  }
  .side-menu ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  .side-menu ul li {
    height: 43px;
    font-size: 16px;
  }
  .section-container {
    justify-content: center;
    min-height: 1044px;
    background: url("@/assets/images/headerMain.png") 40% 100%/cover no-repeat;
  }
  .header-section-text-container {
    width: auto;
  }
}

@media (max-width: 1280px) and (min-width: 1024px) {
  .header-section-text-container {
    margin-top: calc(180px + (153 - 180) * ((100vw - 1024px) / (1280 - 1024)));
  }
}

@media (max-width: 1280px) {
  .section-container {
    justify-content: center;
    min-height: 100vh;
    background: url("@/assets/images/headerMain.png") 10% 100%/cover no-repeat;
    background-size: 135%;
  }
  .header-logo {
    width: clamp(108px, 7.86vw, 151px); /* 7.86vw 151px */
    height: auto; /* 20.85vh  167px */
  }
}

@media (max-width: 1125px) {
  .section-container {
    background: url("@/assets/images/headerMain.png") 10% 100%/cover no-repeat;
    background-size: 155%;
  }
}

@media (max-width: 1024px) {
  .section-container {

    background: url("@/assets/images/headerMain.png") 10% 100%/cover no-repeat;
    background-size: 175%;
  }
}

@media (max-width: 1024px) and (min-width: 700px) {
  .header-section-text-container {
    margin-top: calc(330px + (180 - 330) * ((100vw - 700px) / (1024 - 700)));
  }
}

@media (max-width: 860px) {
  .section-container {
    background: url("@/assets/images/headerMain.png") 0% 100%/cover no-repeat;
    background-size: 200%;
  }
}

@media (max-width: 768px) and (max-height: 1024px) {
  .header-section-text-container {
    margin-top: 180px;
  }
}

@media (max-width: 768px) {
  .section-container {
    background: url("@/assets/images/headerMain.png") 10% 80%/cover no-repeat;
    background-size: 230%;
  }

}

@media (max-width: 700px) {
  .section-container {
    min-height: 92vh;
    background: url("@/assets/images/headerMain.png") 18% 80%/cover no-repeat;
    background-size: 250%;
    border-bottom-left-radius: var(--element-radius-mobile);
    border-bottom-right-radius: var(--element-radius-mobile);
  }
  .header-title-container {
    width: 100%;
    padding-inline: 10px;
  }
.header-title-upper-part,
.header-title-lower-part {
  padding: 0;
  height: auto;
}
.header-title-lower-part {
  top: 0;
}
  .haveSticker::after {
    top: 5px;
    left: 385px;
    width: 260px; /*13.02vw  250px*/
    height: 75px; /*13.11vh  105px*/
    background-size: 90%;
  }
  .header-subtitle {
    font-family: var(--raleway-medium);
    font-weight: 500;
    text-align: center;
  }
  .desktopVisible {
    display: none;
  }
  .mobileVisible {
    display: block;
    margin-top: 8px;
    width: calc(100% - 20px);
    margin-inline: 10px;
  }
}

@media (max-width: 700px) and (min-width: 320px) {
  .header-title-container {
    font-size: calc(45px + (95 - 45) * ((100vw - 320px) / (700 - 320)));
  }
  .header-subtitle {
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (700 - 320)));
  }
  .haveSticker::after {
    top: calc(-17px + (5 + 17) * ((100vw - 320px) / (700 - 320)));
    left: calc(180px + (385 - 180) * ((100vw - 320px) / (700 - 320)));
    width: calc(104px + (260 - 104) * ((100vw - 320px) / (700 - 320)));
    height: 75px; /*13.11vh  105px*/
  }

}

@media (max-width: 700px) and (min-width: 500px) {
  .header-section-text-container {
    margin-top: calc(430px + (270 - 430) * ((100vw - 500px) / (700 - 500)));
  }
}

@media (max-width: 540px) and (max-height: 720px) {
  .header-section-text-container {
    margin-top: 180px;
  }
}

@media (max-width: 500px) {
  .section-container {
    background: url("@/assets/images/headerMain.png") 18% 100%/cover no-repeat;
    background-size: 270%;
    min-height: 80vh;
  }
}

@media (max-width: 500px) and (min-width: 414px) {
  .header-section-text-container {
    margin-top: calc(340px + (230 - 340) * ((100vw - 414px) / (500 - 414)));
  }
}

@media (max-width: 430px) and (max-height: 932px) {
  .header-section-text-container {
    margin-top: 180px;
  }
}

@media (max-width: 414px) {
  .section-container {
    min-height: 600px;
    background: url("@/assets/images/headerMain.png") 19% 90%/cover no-repeat;
    background-size: 290%;
  }
/*  .header-section-text-container {
    margin-top: 185px;
  }*/
  .header-logo {
    width: clamp(86px, 7.86vw, 151px); /* 7.86vw 151px */
    height: auto; /* 20.85vh  167px */
  }
}

@media (max-width: 414px) and (min-width: 320px) {
  .header-section-text-container {
    margin-top: calc(260px + (200 - 260) * ((100vw - 320px) / (414 - 320)));
  }
}

@media (max-width: 375px) {
  .section-container {
    background: url("@/assets/images/headerMain.png") 19% 90%/cover no-repeat;
    background-size: 290%;
  }
  .header-logo {
    width: clamp(70px, 7.86vw, 151px); /* 7.86vw 151px */
    height: auto; /* 20.85vh  167px */
  }
}

@media (max-width: 360px) {
  .section-container {
    background: url("@/assets/images/headerMain.png") 20% 80%/cover no-repeat;
    background-size: 330%;
  }
}

</style>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-background-accent);
}

::-webkit-scrollbar-thumb {
  border: 2px solid var(--color-red);
  background: var(--scroll-thumb-color); /* Используем переменную для цвета thumb */
  border-radius: var(--input-radius);
  transition: background 0.2s, border 0.2s; /* Плавный переход цвета и границы */
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-red);
  border: 1px solid var(--color-background-base);
}
</style>