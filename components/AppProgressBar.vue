<script setup lang="ts">
const bar = ref<HTMLElement | null>(null);

const progressCount = ref(72);
const progressWidth = ref(0);

onMounted(() => {
    if (bar.value) {
        const barWidth = bar.value.offsetWidth;
        const calculatedProgress = (progressCount.value * barWidth) / 100;
        progressWidth.value = calculatedProgress;
    }
});
</script>

<template>
    <div class="barWrapper">
        <div class="bar" ref="bar">
            <div class="progress" :style="{ width: `${progressWidth}px` }" />
        </div>
        <span>{{ progressCount }}%</span>
    </div>
</template>

<style>
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
    background-color: #c7c7c7;
    border-radius: 3px;
    overflow: hidden;
}

.progress {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: red;
}
</style>
