<script setup lang="ts">
    function login(){
        
    }
</script>

<template>
    <form @submit.prevent="login">
        <input type="text" placeholder="Логин">
        <input type="password" placeholder="Пароль">
        <button type="submit"> Войти </button>
    </form>
</template>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
        width: 350px;
        margin: 0 auto;
    }

    form>*{
        margin-bottom: 5px;
    }
</style>