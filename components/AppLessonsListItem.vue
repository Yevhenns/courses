<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
    img: string;
}>();
</script>

<template>
    <div class="lessonsListItem">
        <img :src="img" width="80" height="80" alt="lesson image" />
        <div>
            <p class="lessonTitle">{{ title }}</p>
            <p class="lessonDescription">{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
.lessonsListItem {
    background-color: #ffffff;
    width: 100%;
    height: auto;
    border-radius: 16px;
    display: flex;
    gap: 20px;
    align-items: center;
    box-shadow: 0px 2px 7px 0px rgba(216, 107, 31, 0.14);
}

.lessonTitle {
    background-color: inherit;
    color: #a0a0a0;
    margin-bottom: 4px;
}

.lessonDescription {
    background-color: inherit;
    color: #793708;
    font-size: 18px;
    font-weight: 700;
}
</style>
