<template>
  <span class="spinner" />
</template>

<style scoped>
@import "/assets/css/variables.css";

.spinner {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 26px;
  height: 26px;
  border: 2px solid var(--accent-color);
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
