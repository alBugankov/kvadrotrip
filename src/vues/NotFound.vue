<script setup lang="ts">

</script>

<template>
  <div class="container-fullscreen not-found">
    <div class="extra-block">
    <div class="title">4<span class="red">0</span>4</div>
    <div class="subtitle">ой, Страница не найдена</div>
    </div>
  </div>
</template>

<style scoped>
.not-found,
.extra-block {
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-base);
  position: relative;
  overflow-x: hidden;
}

.extra-block {
  position: relative;
}

.extra-block:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: url("@/assets/icons/404/404-bear.svg") center/contain no-repeat;
  width: 485px;
  height: 170px;
}

.not-found::before,
.not-found::after {
  content: "";
  position: absolute;
  top: 0;  /* Закрепляем их по верхнему краю */
  background-size: contain;
  background-repeat: no-repeat;
  width: 653px;
  height: 609px;
  transition: all 0.3s ease; /* Плавное изменение размеров */
  z-index: 100;
}

.not-found::before {
  left: 0;
  background: url("@/assets/icons/404/404-palm-left-new.svg") center/contain no-repeat;
}

.not-found::after {
  right: 0;
  background: url("@/assets/icons/404/404-palm-right-new.svg") center/contain no-repeat;
}

.subtitle {
  font-family: var(--erbaum-book);
  font-weight: 300;
  font-size: 40px;
  line-height: 110%;
  position: relative;
  color: var(--color-light);
  text-transform: uppercase;
}

.title,
.red {
  font-family: var(--erbaum-medium);
  font-weight: 400;
  font-size: 400px;
  line-height: 110%;
}

.title {
  color: var(--color-light);
}

.red {
  color: var(--color-red);
}

@media (max-width: 1920px) and (min-width: 768px) {
  .not-found::before,
  .not-found::after {
    width: calc(300px + (653 - 300) * ((100vw - 768px) / (1920 - 768)));
    height: calc(275px + (609 - 275) * ((100vw - 768px) / (1920 - 768)));
  }
  .not-found {
    height: calc(650px + (900 - 650) * ((100vw - 768px) / (1920 - 768)));;
  }
  .extra-block:after {
    height: calc(130px + (170 - 130) * ((100vw - 768px) / (1920 - 768)));
  }
}

@media (max-width: 1500px) and (min-width: 320px) {
  .not-found {
    height: calc(400px + (650 - 400) * ((100vw - 320px) / (1500 - 320)));;
  }
  .title,
  .title .red {
    font-size: calc(120px + (400 - 220) * ((100vw - 320px) / (1500 - 320)));
  }
  .subtitle {
    font-size: calc(16px + (40 - 25) * ((100vw - 320px) / (1500 - 320)));
  }
  .extra-block:after {
    height: calc(85px + (130 - 85) * ((100vw - 320px) / (1500 - 320)));
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .not-found::before,
  .not-found::after {
    display: none;
  }
}

</style>