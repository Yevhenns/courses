<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const popoverIsShown = ref(false);

const openPopover = () => {
    popoverIsShown.value = true;
};

const target = ref(null);

onClickOutside(target, () => (popoverIsShown.value = false));
</script>

<template>
    <div class="courseSelector">
        <img src="/images/flag.png" width="44" height="44" alt="flag" />
        <div>
            <button class="selectorButton" @click="openPopover">
                <span>Польська</span>
                <Icon
                    class="icon"
                    :style="
                        popoverIsShown ? { transform: 'rotate(180deg)' } : {}
                    "
                    name="mynaui:chevron-down-solid"
                    style="color: #3a89fd"
                    size="24"
                />
            </button>
            <p class="selectorInfo">Лікар (В2)</p>
        </div>
        <AppPopover ref="target" v-if="popoverIsShown" class="popover" />
    </div>
</template>

<style scoped>
@import "/assets/css/variables.css";

.courseSelector {
    position: relative;
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
    color: var(--blue-color);
    font-size: 22px;
    font-weight: 600;
    transition: var(--transition);
    cursor: pointer;
}

.selectorButton:hover {
    transform: scale(1.02);
}

.icon {
    transition: var(--transition);
}

.selectorInfo {
    color: var(--secondary-dark-color);
}

.popover {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
