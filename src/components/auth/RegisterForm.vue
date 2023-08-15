<script setup lang="ts">
    function register(){
        
    }
</script>

<template>
    <form @submit.prevent="register">
        <input type="text" placeholder="Логин">
        <input type="password" placeholder="Пароль">
        <input type="password" placeholder="Повторите ввод пароля">
        <button type="submit"> Зарегестрироваться </button>
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