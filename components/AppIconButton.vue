<template>
    <button class="notificationButton">
        <Icon
            name="material-symbols:notifications-rounded"
            style="color: #ff8733"
            size="24"
        />
        <div class="notificationCount">7</div>
    </button>
</template>

<style scoped>
.notificationButton {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    box-shadow: 0px 2px 7px 0px rgba(216, 107, 31, 0.14);
    border: none;
    border-radius: 16px;
}

.notificationCount {
    position: absolute;
    right: -8px;
    top: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: #3a89fd;
    color: #ffffff;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 800;
}
</style>
