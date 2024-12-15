<template>
    <section class="section">
        <AppContainer>
            <nav class="nav">
                <NuxtLink class="nuxtLink" to="/">
                    <Icon
                        name="game-icons:graduate-cap"
                        :style="{
                            color: $route.path === '/' ? '#ff8733' : '#ae978a',
                        }"
                        size="24"
                    />
                    <span>Навчання</span>
                </NuxtLink>
                <NuxtLink class="nuxtLink" to="/favorite">
                    <Icon
                        name="material-symbols:star-rate"
                        :style="{
                            color:
                                $route.path === '/favorite'
                                    ? '#ff8733'
                                    : '#ae978a',
                        }"
                        size="24"
                    />
                    <span>Обране</span>
                </NuxtLink>
                <NuxtLink class="nuxtLink" to="/plan">
                    <Icon
                        name="material-symbols:insert-chart"
                        :style="{
                            color:
                                $route.path === '/plan' ? '#ff8733' : '#ae978a',
                        }"
                        size="24"
                    />
                    <span>План навчання</span>
                </NuxtLink>
                <NuxtLink class="nuxtLink" to="/profile">
                    <Icon
                        name="material-symbols:account-circle"
                        :style="{
                            color:
                                $route.path === '/profile'
                                    ? '#ff8733'
                                    : '#ae978a',
                        }"
                        size="24"
                    />
                    <span>Профіль</span>
                </NuxtLink>
            </nav>
        </AppContainer>
    </section>
</template>

<style scoped>
.section {
    margin-top: auto;
    background-color: #ffffff;
    height: 80px;
    padding-top: 8px;
    font-size: 12px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0px -4px 14px 0px rgba(65, 71, 114, 0.14);
}

.nav {
    display: flex;
    justify-content: space-between;
}

.nuxtLink {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #ae978a;
    font-family: "SF Pro Display";
}

::v-deep(.router-link-active) {
    color: #ff8733;
}
</style>
