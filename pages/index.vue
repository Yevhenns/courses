<script setup lang="ts">
import { useCoursesStore } from "~/store/courses";
import useConfetti from "canvas-confetti";

const store = useCoursesStore();

const triggerConfetti = () => {
    useConfetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
};

watch(() => store.progressCount === 100, triggerConfetti);
</script>

<template>
    <main class="main">
        <AppHeader />
        <AppBanner />
        <AppLessonsList />
    </main>
</template>

<style scoped>
.main {
    padding-bottom: 80px;
}
</style>
