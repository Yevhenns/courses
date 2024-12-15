<template>
    <AppContainer>
        <header class="header">
            <div class="wrapper">
                <AppCourseSelector />
                <AppIconButton />
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
    justify-content: space-between;
    margin-bottom: 8px;
}
</style>
