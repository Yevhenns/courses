<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import AppContainer from "~/shared/AppContainer.vue";
import AppIconButton from "~/shared/AppIconButton.vue";
import AppPopover from "~/shared/AppPopover.vue";

const popoverIsShown = ref(false);
const notifications = ref(4);

const openPopover = () => {
    popoverIsShown.value = true;
    notifications.value = 0;
};

const target = ref(null);

onClickOutside(target, () => (popoverIsShown.value = false));
</script>

<template>
    <header class="header">
        <AppContainer>
            <div class="headerWrapper">
                <div class="wrapper">
                    <AppCourseSelector />
                    <AppIconButton
                        @click="openPopover"
                        class="icon-btn"
                        :isCountShown="true"
                        :notifications="notifications"
                    >
                        <Icon
                            class="icon"
                            name="material-symbols:notifications-rounded"
                            size="24"
                        />
                    </AppIconButton>
                    <AppPopover
                        ref="target"
                        v-if="popoverIsShown"
                        class="popover"
                    />
                </div>
                <AppProgressBar />
            </div>
        </AppContainer>
    </header>
</template>

<style scoped lang="scss">
@use "/assets/css/variables.scss" as *;

.header {
    border-bottom: $grey-border;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: $main-bg;
    z-index: 1;

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
        top: 0;
        right: 0;
    }
}
</style>
