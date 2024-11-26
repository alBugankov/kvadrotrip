<script setup lang="ts">

</script>

<template>
  <footer>
<div class="footer-container">
  <div class="personal-info">
    <p>+85 9897 98989</p>
    <p>Nha Trang, Khánh Hòa</p>
  </div>
  <div class="logo"><el-avatar
      class="logo"
      src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/277790162_293130482969680_3899159348314958617_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE72V6X01AkLtApoU34E7_0QDCO7vK_GbBAMI7u8r8ZsDXLlKd16mPyNXDTj4rCbk5UABCwE6Ato8nGrsz0S1RA&_nc_ohc=tRzTLprgnToQ7kNvgEIaM96&_nc_ht=scontent.fdad1-3.fna&_nc_gid=AteIGas_B6ywl3-g4HHBHkH&oh=00_AYCyBCqh9bhgXpRrsrWmbqYlP5RCYLOL3k2agYwT_Xl--w&oe=670EBFBF"
      size="default"
      shape="circle"
  /></div>
  <div class="social-media">
    <a href="">Instagram</a>
    <a href="">WhatsApp</a>
    <a href="">Telegram</a>
    <a href="">Zalo</a>
  </div>
</div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: lightgrey;
}
.social-media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 90px; /* Регулируемый размер */
  height: 90px; /* Регулируемый размер */
  border-radius: 50%; /* Круглая форма */
  object-fit: cover; /* Подгонка изображения под круг */
}
a {
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
}
.personal-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
}
</style>