<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';

const windowWidth = inject('windowWidth') as Ref<number>;

</script>

<template>
<section class="faq-section container-fullscreen">
  <div class="title-container container">
    <div class="separator">
      <p class="section-title">С нами <span class="last-world">комфортно</span></p>
    </div>
    <div class="separator">
      <h2 class="section-name">[ Частые вопросы ]</h2>
      <h2 class="section-name forMobile" v-show="windowWidth <= 1200">[ Вопросы ]</h2>
    </div>
  </div>
  <div class="section-content-container">
    <div class="accordion-container">
    <el-collapse accordion>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">В какое время и откуда нас заберет трансфер?</div>
        </template>
        <template #icon>
          <span class="collapse-icon"></span>
        </template>
        <div class="item-answer">Вас заберут из вашего отеля. Туры проходят 2 раза в день:  утренний - 8.30 и дневной - 13:30</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Можно ли брать с собой детей?</div>
        </template>
        <template #icon>
          <span class="collapse-icon"></span>
        </template>
        <div class="item-answer">Дети могут принимать участие в туре с 5-ти лет, к управлению допускаются старше 16 лет</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Что нужно взять с собой?</div>
        </template>
        <template #icon>
          <span class="collapse-icon"></span>
        </template>
        <div class="item-answer">Удобную одежду, купальник или плавки, защиту от солнца, карманные деньги и позитивный настрой =)</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Что делать если не справился с управлением?</div>
        </template>
        <template #icon>
          <span class="collapse-icon"></span>
        </template>
        <div class="item-answer">Ничего страшного, вы продолжите маршрут вместе с инструктором</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Не отменится ли тур если пойдет дождь?</div>
        </template>
        <template #icon>
          <span class="collapse-icon"></span>
        </template>
        <div class="item-answer">Мы катаем в любую погоду - так еще больше эмоций и экстрима </div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Включена ли видеосъемка в тур?</div>
        </template>
        <template #icon>
          <span class="collapse-icon"></span>
        </template>
        <div class="item-answer">Видеосъемку можно приобрести после завершения тура за дополнительную плату, также вы можете использовать свою экшн-камеру</div>
      </el-collapse-item>
      <el-collapse-item class="item-question">
        <template #title>
          <div class="custom-title">Можно ли меняться местами  пассажиру и водителю на двухместном квадроцикле?</div>
        </template>
        <template #icon>
          <span class="collapse-icon"></span>
        </template>
        <div class="item-answer">Нет, нельзя - в целях безопасности.</div>
      </el-collapse-item>
    </el-collapse>
    </div>
    </div>
</section>
</template>

<style scoped>

.section-content-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.accordion-container {
  position: relative;
  width: 1128px;
  height: 624px;
  z-index: 10;
}
.accordion-container::after {
  content: "";
  position: absolute;
  background: url("@/assets/icons/faq-icon/faq-bamboo.svg") center/contain no-repeat;
  width: 572px;
  height: 645px;
  aspect-ratio: 1;
  top: 0;
  left: -35%;
  z-index: -1;
}
::v-deep(.el-collapse-item__content) {
  background-color: var(--color-red);
}
::v-deep(.el-collapse-item__header) {
  height: 72px;
  background-color: var(--color-red);
}

::v-deep(.el-collapse-item__header .collapse-icon) {
  transition: transform var(--transition-duration) ease;
}

::v-deep(.el-collapse-item.is-active .collapse-icon) {
  transform: rotate(-45deg);
}

.custom-title {
  margin-left: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: var(--raleway-regular), sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--color-light);
  line-height: 100%;
  text-align: left;
}
.item-answer {
  background-color: var(--color-red);
  font-family: var(--raleway-regular), sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--color-light);
  line-height: 100%;
  cursor: default;
  margin-inline: 40px;
}
.collapse-icon {
  background: url("@/assets/icons/faq-icon/faq-plus-icon.svg") center/contain no-repeat;
  width: 28px;
  aspect-ratio: 1;
  margin-right: 40px;
}
.item-question {
  border-radius: 28px;
  overflow: hidden;
  transition: opacity var(--transition-duration) ease;
}
.item-question:hover {
  opacity: 0.5;
}

.item-question.is-active {
  opacity: 1;
}

.el-collapse {
  border: none; /* Верхняя дефолтная границы всего el-collapse */
  --el-collapse-border-color: var(--color-red);
}
.el-collapse-item {
  margin-bottom: 20px;
}

@media (max-width: 1200px) {
  .accordion-container {
    padding-inline: 30px;
    height: auto;
  }
  .section-name:not(.forMobile) {
    display: none;
  }
  .accordion-container::after {
    display: none;
  }
}

@media (max-width: 768px) and (min-width: 320px) {

  .custom-title,
  .item-answer {
    font-size: calc(11px + (18 - 11) * ((100vw - 320px) / (768 - 320)));
  }

  ::v-deep(.el-collapse-item__header) {
    height: calc(44px + (72 - 44) * ((100vw - 320px) / (768 - 320)));
  }
  .item-question {
    border-radius: calc(16px + (28 - 16) * ((100vw - 320px) / (768 - 320)));
  }
  .accordion-container {
    padding-inline: calc(10px + (30 - 10) * ((100vw - 320px) / (768 - 320)));
  }
  ::v-deep(.el-collapse-item) {
    margin-bottom: calc(8px + (20 - 8) * ((100vw - 320px) / (768 - 320)));
  }
  .collapse-icon {
    width: calc(15px + (28 - 15) * ((100vw - 320px) / (768 - 320)));
  }
}

@media (max-width: 768px) and (hover: none) {

  .item-question:hover,
  .item-question:active {
    opacity: 1;
  }
}

@media (max-width: 500px) {
  .custom-title {
    margin-left: 15px;
  }
  .collapse-icon {
    margin-right: 15px;
  }
  .item-answer {
    margin-inline: 15px;
  }

}

</style>