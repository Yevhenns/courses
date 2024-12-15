<script setup lang="ts">
defineProps({
    isCountShown: {
        type: Boolean,
        default: false,
    },
    notifications: Number,
});
</script>

<template>
    <button class="notificationButton">
        <slot></slot>
        <div
            v-if="isCountShown && notifications && notifications > 0"
            class="notificationCount"
        >
            {{ notifications }}
        </div>
    </button>
</template>

<style scoped lang="scss">
@use "/assets/css/variables.scss" as *;

.notificationButton {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: $white-color;
    box-shadow: $box-shadow;
    border: none;
    border-radius: 16px;
    cursor: pointer;

    .notificationCount {
        position: absolute;
        right: -8px;
        top: -8px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        background-color: $blue-color;
        color: $white-color;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 800;
    }
}
</style>
