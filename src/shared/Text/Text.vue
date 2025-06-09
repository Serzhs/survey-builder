<script setup lang="ts">
type TextType = 'body' | 'caption' | 'small' | 'label'

const props = defineProps<{
  type?: TextType
  italic?: boolean
}>()

const type = props.type || 'body'
</script>

<template>
  <p :class="['text', type, italic ? 'italic' : '']">
    <slot />
  </p>
</template>

<style scoped>
.text {
  margin: 0;
  color: var(--color-primary);

  &.italic {
    font-style: italic;
  }

  &.body {
    font-size: 1rem;
  }

  &.caption {
    font-size: 0.875rem;
    color: var(--color-primary);
  }

  &.small {
    font-size: 0.75rem;
    color: var(--color-primary);
  }

  &.label {
    font-style: 1rem;
    font-weight: bold;
  }
}
</style>
