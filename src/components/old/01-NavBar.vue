<template>
  <header>
  <div class="navbar-container">
    <el-menu
        class="navbar" :style="navbarStyle"
        mode="horizontal"
        background-color="#333"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <a href="#about">О нас</a>
      </el-menu-item>
      <el-menu-item index="2">
        <a href="#route">Маршрут</a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="#gallery">Галерея</a>
      </el-menu-item>
      <el-menu-item index="4">
        <a href="#tariffs">Тарифы</a>
      </el-menu-item>
      <el-avatar
          class="logo"
          :style="avatarStyle"
          src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/277790162_293130482969680_3899159348314958617_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE72V6X01AkLtApoU34E7_0QDCO7vK_GbBAMI7u8r8ZsDXLlKd16mPyNXDTj4rCbk5UABCwE6Ato8nGrsz0S1RA&_nc_ohc=tRzTLprgnToQ7kNvgEIaM96&_nc_ht=scontent.fdad1-3.fna&_nc_gid=AteIGas_B6ywl3-g4HHBHkH&oh=00_AYCyBCqh9bhgXpRrsrWmbqYlP5RCYLOL3k2agYwT_Xl--w&oe=670EBFBF"
          size="default"
          shape="circle"
      />
      <el-menu-item index="5">
        <a href="#faq">Частые вопросы</a>
      </el-menu-item>
      <el-menu-item index="6">
        <a href="#reviews">Отзывы</a>
      </el-menu-item>
      <el-menu-item index="7">
        <a href="#contacts">Контакты</a>
      </el-menu-item>
    </el-menu>
  </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const navbarStyle = ref({
  backgroundColor: 'transparent',
  transition: 'background-color 0.2s linear'
});

const avatarStyle = ref( {
  opacity: 1,
});

const updateNavbarColorAndLogo = () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = Math.min(scrollY / maxScroll, 1); // от 0 до 1

  // Интерполяция цвета
  const redValue = Math.floor(scrollFraction * 255);
  navbarStyle.value.backgroundColor = `rgba(${redValue}, 0, 0, ${scrollFraction})`; // Красный с увеличением непрозрачности
  avatarStyle.value.opacity = 1 - scrollFraction * 20;
};

onMounted(() => {
  window.addEventListener('scroll', updateNavbarColorAndLogo);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateNavbarColorAndLogo);
});
</script>

<style lang="scss" scoped>


::v-deep .navbar {
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  border: 0;
  /**/
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
}
.navbar-container {
  position: fixed;
  z-index: 100;
}
.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  top: 40px;
}
.navbar .menu-item {
  font-size: 20px;
  &:hover {
    color: red;
  }
  &:active {
    background-color: blue;
  }
}
a {
  text-decoration: none;
}
</style>