<template>
    <div class="courseSelector">
        <img src="/assets/images/flag.png" width="44" height="44" alt="flag" />
        <div>
            <button class="selectorButton">
                <span>Польська</span>
                <Icon
                    name="mynaui:chevron-down-solid"
                    style="color: #3a89fd"
                    size="24"
                />
            </button>
            <p class="selectorInfo">Лікар (В2)</p>
        </div>
    </div>
</template>

<style scoped>
.courseSelector {
    display: flex;
    gap: 10px;
    align-items: center;
}

.selectorButton {
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background-color: transparent;
    color: #3a89fd;
    font-size: 22px;
    font-weight: 600;
}

.selectorInfo {
    color: #4e4e4e;
}
</style>
