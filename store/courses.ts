export const useCoursesStore = defineStore("courses", () => {
    const progressCount = ref(18);
    const isShownLessons = ref(true);

    function toggleIsShownLessons() {
        if (isShownLessons.value) {
            isShownLessons.value = false;
            return;
        }
        isShownLessons.value = true;
        return;
    }

    return { progressCount, isShownLessons, toggleIsShownLessons };
});
