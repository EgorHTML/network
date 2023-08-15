<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
console.log(store.state.test);

</script>

<template>
    <div class="container">
      <router-view></router-view>
    </div>
</template>

<style>
  :root{
    --background-color:#d4f9ea;
  }
  
  .container{
    height: 100%;
  }
</style>
