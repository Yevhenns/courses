<script setup lang="ts">
import { useCoursesStore } from "~/store/courses";

const bar = ref<HTMLElement | null>(null);

const store = useCoursesStore();
const progressWidth = ref(0);

const calculateProgress = () => {
    if (bar.value) {
        const barWidth = bar.value.offsetWidth;
        const calculatedProgress = (store.progressCount * barWidth) / 100;
        progressWidth.value = calculatedProgress;
    }
};

onMounted(() => {
    calculateProgress();
});

watch(() => store.progressCount, calculateProgress);
</script>

<template>
    <div class="barWrapper">
        <div class="bar" ref="bar">
            <div class="progress" :style="{ width: `${progressWidth}px` }" />
        </div>
        <span>{{ store.progressCount }}%</span>
    </div>
</template>

<style scoped lang="scss">
@import "/assets/css/variables.scss";

.barWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    .bar {
        position: relative;
        width: 245px;
        height: 6px;
        background-color: $secondary-bg;
        border-radius: 3px;
        overflow: hidden;
    }

    .progress {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        background-color: $red-color;
    }
}
</style>
