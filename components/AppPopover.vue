<script setup lang="ts"></script>

<template>
    <div class="popover">
        <slot></slot>
    </div>
</template>

<style scoped>
@import "/assets/css/variables.css";

.popover {
    border: var(--border);
    width: 300px;
    min-height: calc(100vh - 112px);
    background-color: var(--white-color);
    border-radius: 8px;
    padding: 12px;
    z-index: 2;
}
</style>
