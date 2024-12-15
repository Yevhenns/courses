<template>
    <AppContainer>
        <div class="banner">
            <div class="bannerInfo">
                <img
                    src="/assets/images/banner.svg"
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
</template>

<style scoped>
.banner {
    border: 1px solid #ff8733;
    border-radius: 8px;
    overflow: hidden;
    font-family: "SF Pro Display";
    font-size: 16px;
    font-weight: 400;
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

.descriptionText {
    color: #4e4e4e;
}

.greetingText {
    color: #ae978a;
}

.discountText {
    color: #793708;
    font-size: 18px;
    font-weight: 700;
}

.buyLink {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    background-color: #ff8733;
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
}
</style>
