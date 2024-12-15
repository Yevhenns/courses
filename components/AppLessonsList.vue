<script setup lang="ts">
import AppContainer from "~/shared/AppContainer.vue";
import AppIconButton from "~/shared/AppIconButton.vue";
import { lessons } from "~/assets/fakeData/lessons";
import { useCoursesStore } from "~/store/courses";

const store = useCoursesStore();
</script>

<template>
    <section class="lessonsListSection">
        <AppContainer>
            <div class="listWrapper">
                <div class="chapterWrapper">
                    <div>
                        <p class="chapter">Розділ 1</p>
                        <p class="chapterDescription">Почніть навчання</p>
                    </div>
                    <AppIconButton
                        class="icon-btn"
                        @click="store.toggleIsShownLessons()"
                    >
                        <Icon
                            class="icon"
                            :style="
                                store.isShownLessons
                                    ? { transform: 'rotate(180deg)' }
                                    : {}
                            "
                            name="line-md:chevron-small-up"
                            size="24"
                        />
                    </AppIconButton>
                </div>
                <AppLessonsListItem
                    v-if="store.isShownLessons"
                    v-for="lesson in lessons"
                    :id="lesson.id"
                    :title="lesson.title"
                    :description="lesson.description"
                    :img="lesson.img"
                />
            </div>
        </AppContainer>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/css/variables.scss" as *;

.lessonsListSection {
    margin: 16px;

    .listWrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .chapterWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .chapter {
        color: $heading-text-color;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 4px;
    }

    .chapterDescription {
        color: $secondary-grey-color;
    }
}
</style>
