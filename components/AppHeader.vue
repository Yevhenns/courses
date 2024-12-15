<script setup lang="ts">
import AppContainer from "~/shared/AppContainer.vue";
import AppIconButton from "~/shared/AppIconButton.vue";
import AppPopover from "~/shared/AppPopover.vue";

const popoverIsShown = ref(false);

const togglePopover = () => {
    popoverIsShown.value = !popoverIsShown.value;
};
</script>

<template>
    <header class="header">
        <AppContainer>
            <div class="headerWrapper">
                <div class="wrapper">
                    <AppCourseSelector />
                    <AppIconButton
                        @click="togglePopover"
                        class="icon-btn"
                        :isCountShown="true"
                    >
                        <Icon
                            class="icon"
                            name="material-symbols:notifications-rounded"
                            size="24"
                        />
                    </AppIconButton>
                    <AppPopover v-if="popoverIsShown" class="popover" />
                </div>
                <AppProgressBar />
            </div>
        </AppContainer>
    </header>
</template>

<style scoped lang="scss">
@import "/assets/css/variables.scss";

.header {
    border-bottom: $grey-border;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: $main-bg;
    z-index: 9;

    .headerWrapper {
        padding: 16px 0;
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        position: relative;
    }

    .popover {
        position: absolute;
        top: 50px;
        right: 0;
    }
}
</style>
