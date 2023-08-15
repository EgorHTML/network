<script setup lang="ts">
    import { onMounted } from 'vue';
    import {useRouter}  from 'vue-router'
    import ModalAuth from '../../components/auth/ModalAuth.vue'
    const router = useRouter()

    onMounted(()=>{
        router.push('/auth/login')
    })
</script>

<template>
    <div class="container container__auth_page">
        <ModalAuth/>
    </div>
</template>

<style>
    .container__auth_page{
        background-color: var(--background-color);
    }
</style>