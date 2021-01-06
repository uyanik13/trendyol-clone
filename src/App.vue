<template>
  <div id="app" class="min-h-screen">
      <Header/>
    <div id="nav">
          <Home></Home>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from './components/header/Header.vue'

export default {
  components: { Header },
 
}
</script>
