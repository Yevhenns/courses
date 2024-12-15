<script setup lang="ts">
import AppContainer from "~/shared/AppContainer.vue";
import AppIconButton from "~/shared/AppIconButton.vue";
import { lessons } from "~/assets/fakeData/lessons";
</script>

<template>
    <section class="lessonsListSection">
        <AppContainer>
            <div class="chapterWrapper">
                <div>
                    <p class="chapter">Розділ 1</p>
                    <p class="chapterDescription">Почніть навчання</p>
                </div>
                <AppIconButton />
            </div>
            <AppLessonsListItem v-for="lesson in lessons" />
        </AppContainer>
    </section>
</template>

<style>
.lessonsListSection {
    margin-top: 16px;
}

.chapterWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.chapter {
    color: #793708;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 4px;
}

.chapterDescription {
    color: #7a7a7a;
}
</style>
