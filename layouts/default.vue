<template>
  <div :class="$style.container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components:{
    Header
  }
}
</script>

<style module>
@font-face{
  font-family: codec-pro;
  src: url('../assets/fonts/codec-pro.ttf') format('opentype');
}

body{
  background: #FCFCFC;
  margin: 0px;
  font-family: 'codec-pro';
}

a {
  color: #000 !important;
  text-decoration: none
}

.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
