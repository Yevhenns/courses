<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";
import { useCoursesStore } from "~/store/courses";

const store = useCoursesStore();
</script>

<template>
    <div class="homeWrapper">
        <ConfettiExplosion
            v-if="store.progressCount === 100"
            :particleCount="200"
            :particleSize="20"
            :duration="5000"
        />
        <AppHeader />
        <AppBanner />
        <AppLessonsList />
    </div>
</template>

<style scoped lang="scss">
.homeWrapper {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
