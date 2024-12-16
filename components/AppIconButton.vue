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

<style scoped>
@import "~/assets/css/variables.css";

.notificationButton {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: var(--white-color);
    box-shadow: var(--box-shadow);
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: var(--transition);
}

.notificationButton:hover {
    transform: scale(1.02);
}

.notificationCount {
    position: absolute;
    right: -8px;
    top: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: var(--blue-color);
    color: var(--white-color);
    border-radius: 50%;
    font-size: 12px;
    font-weight: 800;
}
</style>
