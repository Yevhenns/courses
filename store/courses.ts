import { lessons } from "~/assets/fakeData/lessons";

export const useCoursesStore = defineStore("courses", () => {
    const progressPercentage = ref(0);
    const isShownLessons = ref(true);
    const completedLessonsArray = ref([] as string[]);

    function toggleIsShownLessons() {
        if (isShownLessons.value) {
            isShownLessons.value = false;
            return;
        }
        isShownLessons.value = true;
        return;
    }

    function setLessonCompleted(id: string) {
        if (completedLessonsArray.value.includes(id)) {
            return;
        }
        completedLessonsArray.value.push(id);
        progressPercentage.value =
            (completedLessonsArray.value.length / lessons.length) * 100;
    }

    return {
        progressPercentage,
        isShownLessons,
        completedLessonsArray,
        toggleIsShownLessons,
        setLessonCompleted,
    };
});
