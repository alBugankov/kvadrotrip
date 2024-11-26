<template>
  <div class="about-container">
<div class="describe-container">
  <h1 class="header-text">О нас</h1>
  <h4 class="underheader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.</h4>
  <div class="describe">
   <div>
     <p class="upper-text">Сложность</p>
     <p>СРЕДНЯЯ</p>
   </div>
    <div>
      <p class="upper-text">Длительность</p>
      <p>2ч</p>
    </div>
    <div>
      <p class="upper-text">Протяженность</p>
      <p>24км</p>
    </div>
  </div>
</div>
    <div class="video-container">
      <iframe
          src="https://www.youtube.com/embed/wjm42PHnNMs?si=0YibarVJ_qBeIts8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.about-container {
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.describe-container {
  width: 50%;
  height: 50vh;
  margin-left: 10rem;
}
.video-container {
  width: 50%;
  height: 50vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 20px;
  border-radius: 20px;
  overflow: hidden;
}
.describe {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
}
.header-text {
  font-size: 4rem;
  margin-top: 50px;
}
.underheader-text {
  font-size: 1rem;
  margin-top: 30px;
}
.video-container iframe {
  width: 100%; /* Занимает всю ширину контейнера */
  height: 100%; /* Занимает всю высоту контейнера */
  border: none; /* Убираем рамку */
  display: block; /* Убираем лишние отступы */
  border-radius: 20px;
}
.upper-text {
  font-size: 1.2rem;
  font-weight: 200;
}
p {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 0.7rem;
  text-align: center;
}
</style>