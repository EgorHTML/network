<script setup lang="ts">
import AuthTabs from './AuthTabs.vue'

</script>

<template>
    <div class="modal_auth">
        <AuthTabs/>
        <router-view></router-view>
    </div>
</template>

<style scoped>
    .modal_auth{
        position: absolute;
        top: 25%;
        left: 35%;
        width: 27%;
        height: 35%;
        background-color: #a5c2b6;
        opacity: 0.8;
        border-radius: 10px;
        box-shadow: 1px 1px 10px 1px #666;
    }
</style>