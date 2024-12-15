<template>
    <div class="app">
        <Icon
            name="material-symbols:notifications-rounded"
            style="color: black"
        />
        <NuxtPage />
        <AppNavigation />
    </div>
</template>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
