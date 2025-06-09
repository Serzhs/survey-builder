<template>
  <div class="wrapper">
    <header class="header">
      <img
        src="https://edurio.lv/wp-content/uploads/2019/01/logo-1.svg"
        alt="Edurio"
        class="logo"
      />
    </header>
    <div class="container">
      <slot></slot>
    </div>
    <footer class="footer">
      <Text type="caption"> Made by Jānis Seržants </Text>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  --footer-header-height: 5rem;

  display: grid;
  grid-template-rows: var(--footer-header-height) 1fr var(
      --footer-header-height
    );
  grid-template-columns: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  min-height: 100vh;
}

.header,
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
  height: 100%;
}

.logo {
  width: 120px;
  height: 39px;
}

.container {
  width: 100%;
  max-width: 75rem;
  background-color: var(--content-surface);
  margin: 0 auto;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
}
</style>
<script setup lang="ts">
import Text from '../Text/Text.vue'
</script>
