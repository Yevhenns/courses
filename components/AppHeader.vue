<template>
    <AppContainer>
        <header class="header">
            <div class="wrapper">
                <AppCourseSelector />
                <AppNotificationButton />
            </div>
            <AppProgressBar />
        </header>
    </AppContainer>
</template>

<style>
.header {
    padding: 16px 0;
}
.wrapper {
    display: flex;
    align-items: center;
}
</style>
