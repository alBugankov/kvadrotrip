<script setup lang="ts">

</script>

<template>
<section class="tariffs-section">
  <div class="title-container container">
    <div class="separator">
      <p class="section-title">У нас <span class="last-world">доступно</span></p>
    </div>
    <div class="separator">
      <h2 class="section-name">[ тарифы ]</h2>
    </div>
  </div>
  <div class="cards-container container">
    <div class="card single">
      <div class="card-body">
        <div class="card-body-content">
        <div class="card-image-container">
          <div class="left-card-image card-image"></div>
        </div>
        <div class="card-info-container">
          <div class="card-describe-container">
          <p class="card-text-describe">Одноместный квадроцикл для одинокого рейнджера</p>
          </div>
          <div class="card-coast-container">
          <p class="card-text-coast">40$</p>
          </div>
          <div class="card-button-container">
            <a href="#order">
          <button
              class="tariffs-button button"
              type="button"
          >
            Забронить тур
          </button>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="card double">
      <div class="card-body">
        <div class="card-body-content">
          <div class="card-image-container">
            <div class="center-card-image card-image"></div>
          </div>
          <div class="card-info-container">
            <div class="card-describe-container">
              <p class="card-text-describe">Двухместный квадроцикл - вдвоем веселей и экономней</p>
            </div>
            <div class="card-coast-container">
              <p class="card-text-coast">60$</p>
            </div>
            <div class="card-button-container">
              <a href="#order">
              <button
                  class="tariffs-button button"
                  type="button"
              >
                Забронить тур
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card pax">
      <div class="card-body">
        <div class="card-body-content">
          <div class="card-image-container">
            <div class="right-card-image card-image"></div>
          </div>
          <div class="card-info-container">
            <div class="card-describe-container">
              <p class="card-text-describe">Пассажиром к инструктору - доверьтесь профессионалам</p>
            </div>
            <div class="card-coast-container">
              <p class="card-text-coast">20$</p>
            </div>
            <div class="card-button-container">
              <a href="#order">
              <button
                  class="button tariffs-button"
                  type="button"
              >
                Забронить тур
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.tariffs-section {
  width: 100%;
  max-width: 1920px;
  min-height: 946px;
  height: auto;
  margin: 0 auto;
}
.cards-container {
  max-width: 1702px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card {
  position: relative;
  width: 544px;
  height: 600px;
  background: url("@/assets/icons/tarrifs-icon/card-background.svg") center/contain no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 484px;
}
.card-body-content {
  width: 100%;     /* НЕ ТРОГАТЬ */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-image-container {
  width: 100%;
  z-index: 100;
}
.card-image {
  max-width: 100%;
  height: 271px;
}
.card::after {
  content: "";
  position: absolute;
  width: 221px;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(0%, -85%);
  z-index: 10;
  transition: transform var(--transition-duration) ease;
}
.card:hover::after {
  transform: translateY(-94%);
}
.single::after {
  background: url("@/assets/icons/tarrifs-icon/single-card-ellipse.svg") center/contain no-repeat;
}
.double::after {
  background: url("@/assets/icons/tarrifs-icon/double-car-ellipse.svg") center/contain no-repeat;
}
.pax::after {
  background: url("@/assets/icons/tarrifs-icon/pax-card-ellipse.svg") center/contain no-repeat;
}
.left-card-image {
  background: url("@/assets/images/tarrifs-img/left-card-image.png") center/contain no-repeat;
}
.center-card-image {
  background: url("@/assets/images/tarrifs-img/center-card-image.png") center/contain no-repeat;
}
.right-card-image {
  background: url("@/assets/images/tarrifs-img/right-card-image.png") center/contain no-repeat;
}
.card-info-container {
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.card-describe-container {
  width: 100%;
  height: 84px;
}
.card-text-describe {
  text-align: center;
  width: 100%;
  font-family: var(--raleway-regular);
  font-size: 16px;
  color: var(--color-light);
  cursor: default;
  padding-inline: 25px;
}
.card-coast-container {
  width: 100%;
}
.card-text-coast {
  text-align: center;
  width: 100%;
  font-family: var(--erbaum-medium);
  font-weight: 500;
  font-size: 42px;
  color: var(--color-light);
  cursor: default;
}
.card-button-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.card-coast-container {
  margin-bottom: 30px;
}


@media (max-width: 1801px) {
  .cards-container {
    flex-direction: column;
    row-gap: 20px;
  }
}

@media (max-width: 768px) and (min-width: 320px) {
  .card {
    width: calc(300px + (544 - 300) * ((100vw - 320px) / (768 - 320)));
    height: calc(330px + (600 - 330) * ((100vw - 320px) / (768 - 320)));
  }
 .card-image {
    height: calc(150px + (271 - 150) * ((100vw - 320px) / (768 - 320)));
    width: calc(267px + (484 - 267) * ((100vw - 320px) / (768 - 320)));
  }
  .card::after {
    width: calc(121px + (221 - 121) * ((100vw - 320px) / (768 - 320)));
  }
  .card-image-container {
    display: flex;
    justify-content: center;
  }
  .card-describe-container {
    height: calc(46px + (84 - 46) * ((100vw - 320px) / (768 - 320)));
  }
  .card-coast-container {
    margin-bottom: calc(10px + (30 - 10) * ((100vw - 320px) / (768 - 320)));
  }
  .card-info-container {
    margin-top: calc(10px + (20 - 10) * ((100vw - 320px) / (768 - 320)));
  }
  .card-text-coast {
    font-size: calc(20px + (42 - 20) * ((100vw - 320px) / (768 - 320)));
  }
  .card-text-describe {
    font-size: calc(11px + (16 - 11) * ((100vw - 320px) / (768 - 320)));;
  }
}

@media (max-width: 768px) and (hover: none) {
  .card:hover::after {
    transform: translateY(-85%); /* Сбрасываем к стандартному положению */
  }
}

@media (max-width: 700px) {
 .tariffs-button {
   width: 286px;
   font-size: 14px;
  }
}

@media (max-width: 414px) {
  .card-image-container {
    margin-top: 10px;
  }
}
</style>