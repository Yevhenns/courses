<script setup lang="ts">
import { useCoursesStore } from "~/store/courses";

const props = defineProps<{
    id: string;
    title: string;
    description: string;
    img: string;
}>();

const store = useCoursesStore();

const isLessonCompleted = () => {
    return store.completedLessons.some((item) => item === props.id);
};
</script>

<template>
    <div class="lessonsListItem" @click="store.setLessonCompleted(id)">
        <img :src="img" width="80" height="80" alt="lesson image" />
        <div>
            <p class="lessonTitle">{{ title }}</p>
            <p class="lessonDescription">{{ description }}</p>
        </div>
        <p v-if="isLessonCompleted()" class="successText">Пройдено</p>
    </div>
</template>

<style scoped>
@import "/assets/css/variables.css";

.lessonsListItem {
    background-color: var(--white-color);
    width: 100%;
    height: auto;
    border-radius: 16px;
    display: flex;
    gap: 20px;
    align-items: center;
    box-shadow: var(--box-shadow);
    padding-right: 8px;
    cursor: pointer;
    transition: var(--transition);
}

.lessonsListItem:hover {
    transform: scale(1.02);
}

.lessonTitle {
    background-color: inherit;
    color: var(--heading-light-color);
    margin-bottom: 4px;
}

.lessonDescription {
    background-color: inherit;
    color: var(--heading-text-color);
    font-size: 18px;
    font-weight: 700;
}

.successText {
    background-color: inherit;
    color: var(--success-color);
    margin-left: auto;
}
</style>
