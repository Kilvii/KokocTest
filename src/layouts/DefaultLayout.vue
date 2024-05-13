<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import NavItemComponent from '@/components/NavItemComponent.vue';

const router = useRouter()
const route = useRoute()

const activeTab = ref(route.path.replace('/', ""))

const handleCalculatorNavigate = () => {
    activeTab.value = 'calculator'
    router.push({ name: 'main.calculator' });
}

const handleOResumeNavigate = () => {
    activeTab.value = 'resume'
    router.push({ name: 'main.resume' });
}


</script>

<template>
    <main class="layout">
        <div class="navigation">
            <NavItemComponent title="Резюме" :color="activeTab === 'resume' ? 'active' : 'default'"
                @click="handleOResumeNavigate" />
            <NavItemComponent title="Простые числа" :color="activeTab === 'calculator' ? 'active' : 'default'"
                @click="handleCalculatorNavigate" />
        </div>
        <RouterView />
    </main>
</template>

<style scoped>
.layout {
    background-color: #181818;
    width: 100%;
    height: 100vh;
}
</style>