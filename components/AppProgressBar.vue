<script setup lang="ts">
import { useCoursesStore } from "~/store/courses";

const bar = ref<HTMLElement | null>(null);

const store = useCoursesStore();
const progressWidth = ref(0);

const calculateProgress = () => {
    if (bar.value) {
        const barWidth = bar.value.offsetWidth;
        const calculatedProgress = (store.progressPercentage * barWidth) / 100;
        progressWidth.value = calculatedProgress;
    }
};

onMounted(() => {
    calculateProgress();
});

watch(() => store.progressPercentage, calculateProgress);
</script>

<template>
    <div class="barWrapper">
        <div class="bar" ref="bar">
            <div class="progress" :style="{ width: `${progressWidth}px` }" />
        </div>
        <span>{{ store.progressPercentage }}%</span>
    </div>
</template>

<style scoped>
@import "/assets/css/variables.css";

.barWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.bar {
    position: relative;
    width: 245px;
    height: 6px;
    background-color: var(--secondary-bg);
    border-radius: 3px;
    overflow: hidden;
}

.progress {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--red-color);
}
</style>
