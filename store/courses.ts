import { lessons } from "~/assets/fakeData/lessons";

export const useCoursesStore = defineStore("courses", () => {
    const progressCount = ref(0);
    const isShownLessons = ref(true);
    const completedLessons = ref([] as string[]);

    function toggleIsShownLessons() {
        if (isShownLessons.value) {
            isShownLessons.value = false;
            return;
        }
        isShownLessons.value = true;
        return;
    }

    function setLessonCompleted(id: string) {
        if (completedLessons.value.includes(id)) {
            return;
        }
        completedLessons.value.push(id);
        progressCount.value =
            (completedLessons.value.length / lessons.length) * 100;
    }

    return {
        progressCount,
        isShownLessons,
        completedLessons,
        toggleIsShownLessons,
        setLessonCompleted,
    };
});
