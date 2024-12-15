<script setup lang="ts">
import AppContainer from "~/shared/AppContainer.vue";
import AppIconButton from "~/shared/AppIconButton.vue";
</script>

<template>
    <header class="header">
        <AppContainer>
            <div class="headerWrapper">
                <div class="wrapper">
                    <AppCourseSelector />
                    <AppIconButton :isCountShown="true">
                        <Icon
                            name="material-symbols:notifications-rounded"
                            style="color: #ff8733"
                            size="24"
                        />
                    </AppIconButton>
                </div>
                <AppProgressBar />
            </div>
        </AppContainer>
    </header>
</template>

<style>
.header {
    border-bottom: 1px solid #c7c7c7;
}
.headerWrapper {
    padding: 16px 0;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}
</style>
