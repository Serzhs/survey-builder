<script setup lang="ts">
const props = defineProps<{
  label?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :type="type || 'button'"
    :disabled="disabled"
    class="btn"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.67rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
