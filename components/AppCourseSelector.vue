<script setup lang="ts">
import AppPopover from "~/shared/AppPopover.vue";

const popoverIsShown = ref(false);

const togglePopover = () => {
    popoverIsShown.value = !popoverIsShown.value;
};
</script>

<template>
    <div class="courseSelector">
        <img src="/images/flag.png" width="44" height="44" alt="flag" />
        <div>
            <button class="selectorButton" @click="togglePopover">
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
        <AppPopover v-if="popoverIsShown" class="popover" />
    </div>
</template>

<style scoped lang="scss">
@import "/assets/css/variables.scss";

.courseSelector {
    position: relative;
    display: flex;
    gap: 10px;
    align-items: center;

    .selectorButton {
        display: flex;
        align-items: center;
        padding: 0;
        border: none;
        background-color: transparent;
        color: $blue-color;
        font-size: 22px;
        font-weight: 600;
        transition: $transition;

        &:hover {
            transform: scale(1.02);
        }

        .icon {
            transition: $transition;
        }
    }

    .selectorInfo {
        color: $secondary-dark-color;
    }

    .popover {
        position: absolute;
        top: 50px;
        left: 0;
    }
}
</style>
