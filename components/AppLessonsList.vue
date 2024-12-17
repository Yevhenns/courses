<script setup lang="ts">
import { useCoursesStore } from "~/store/courses";
import AppSpinner from "./AppSpinner.vue";

const store = useCoursesStore();
const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 1500);
</script>

<template>
  <AppContainer v-if="isLoading" style="margin-top: 20px">
    <AppSpinner />
  </AppContainer>
  <section v-if="!isLoading" class="lessonsListSection">
    <h2>Список уроків</h2>
    <AppContainer>
      <div class="listWrapper">
        <div class="chapterWrapper">
          <div>
            <p class="chapter">Розділ 1</p>
            <p class="chapterDescription">Почніть навчання</p>
          </div>
          <AppIconButton class="icon-btn" @click="store.toggleIsShownLessons()">
            <Icon
              class="icon"
              :style="
                store.isShownLessons ? { transform: 'rotate(180deg)' } : {}
              "
              name="line-md:chevron-small-up"
              size="24"
            />
          </AppIconButton>
        </div>
        <AppLessonsListItem
          v-if="store.isShownLessons"
          v-for="lesson in store.allLessons"
          :id="lesson.id"
          :title="lesson.title"
          :description="lesson.description"
          :img="lesson.img"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style scoped>
@import "/assets/css/variables.css";

.lessonsListSection {
  margin: 16px 0;
}

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
  color: var(--heading-text-color);
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
}

.chapterDescription {
  color: var(--secondary-grey-color);
}

.icon-btn:hover .icon {
  color: var(--button-hover);
}

.icon {
  color: var(--accent-color);
  transition: var(--transition);
}
</style>
