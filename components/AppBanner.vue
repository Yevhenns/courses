<script setup lang="ts"></script>

<template>
    <section class="bannerSection">
        <AppContainer>
            <div class="banner">
                <div class="bannerInfo">
                    <img
                        src="/images/banner.svg"
                        width="76"
                        height="76"
                        alt="banner image"
                    />
                    <div class="textWrapper">
                        <p class="greetingText">Раді тебе бачити</p>
                        <p class="discountText">У тебе 7 безкоштовних уроків</p>
                        <p class="descriptionText">
                            Щоб мати необмежений доступ до навчання - оформи
                            підписку.
                        </p>
                    </div>
                </div>
                <a
                    class="buyLink"
                    href="https://github.com/Yevhenns/courses.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Купити підписку</a
                >
            </div>
        </AppContainer>
    </section>
</template>

<style scoped>
@import "~/assets/css/variables.css";

.bannerSection {
    margin-top: 16px;
    padding-top: 110px;
}

.banner {
    border: var(--border);
    background-color: var(--white-color);
    border-radius: 8px;
    overflow: hidden;
    line-height: 1.2;
}

.bannerInfo {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 16px;
}

.textWrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.greetingText {
    color: var(--secondary-light-color);
    background-color: inherit;
}

.discountText {
    background-color: inherit;
    color: var(--heading-text-color);
    font-size: 18px;
    font-weight: 700;
}

.descriptionText {
    background-color: inherit;
    color: var(--secondary-dark-color);
}

.buyLink {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    background-color: var(--accent-color);
    color: var(--white-color);
    font-size: 22px;
    font-weight: 600;
    transition: var(--transition);
}

.buyLink:hover {
    background-color: var(--button-hover);
}
</style>
