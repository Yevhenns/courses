<template>
    <div class="app">
        <NuxtPage />
        <AppNavigation />
    </div>
</template>

<style scoped lang="scss">
@use "/assets/css/main.scss";

.app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>
