<script setup lang="ts">

</script>

<template>
  <div class="container-fullscreen not-found">
    <div class="title">4<span class="red">0</span>4</div>
    <div class="subtitle">ой, Страница не найдена</div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-base);
  position: relative;
}

.subtitle:after {
  content: "";
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  background: url("@/assets/icons/404/404-bear.svg") center/contain no-repeat;
  width: 485px;
  height: 274px;
}

.not-found::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: url("@/assets/icons/404/404-palm-left.svg") center/contain no-repeat;
  width: 735px;
  height: 900px;
}

.not-found::after {
  content: "";
  position: absolute;
  top: -41px;
  left: 62%;
  background: url("@/assets/icons/404/404-palm-right.svg") center/contain no-repeat;
  width: 735px;
  height: 900px;
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

.subtitle {
  font-family: var(--erbaum-book);
  font-weight: 300;
  font-size: 40px;
  line-height: 110%;
  position: relative;
  color: var(--color-light);
  text-transform: uppercase;
}
</style>