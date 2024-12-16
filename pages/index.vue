<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";
import { useCoursesStore } from "~/store/courses";

const store = useCoursesStore();
</script>

<template>
    <main class="main">
        <ConfettiExplosion
            v-if="store.progressCount === 100"
            :particleCount="200"
            :particleSize="20"
            :duration="5000"
        />
        <AppHeader />
        <AppBanner />
        <AppLessonsList />
    </main>
</template>

<style scoped>
.main {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
