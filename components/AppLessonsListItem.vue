<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
    img: string;
}>();
</script>

<template>
    <div class="lessonsListItem"><img :src="img" /></div>
</template>

<style scoped>
.lessonsListItem {
    background-color: #ffffff;
    width: 100%;
    height: auto;
    border-radius: 16px;
}
</style>
