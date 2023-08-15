<script setup lang="ts">
import { ref } from 'vue';

    const tabs = ref([{
        name:'Логин',
        route:'login'
    },
    {
        name:'Регистрация',
        route:'register'
    }])

    const activeTab = ref('Логин')

    function changeRoute(tab:any){
        activeTab.value = tab.name
    }

</script>

<template>
        <ul class="tabs">
            <li v-for="tab in tabs"
             class="tab" @click="changeRoute(tab)"
             :class="{'tab_active':activeTab === tab.name}"
             :key="tab.route">
             <router-link :to="tab.route" style="color: #181616;">
                <p>{{ tab.name }}</p>
            </router-link>
            </li>
        </ul>
</template>

<style scoped>

    .tabs{
        display: flex;
        justify-content: center;
    }
    .tab{
        cursor: pointer;
        margin: 10px 15px;
    }

    .tab_active p{
        color: #000000;
        font-weight: 700;
    }
</style>