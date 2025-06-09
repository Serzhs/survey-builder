<script setup lang="ts">
import { computed } from 'vue'

type HeadingType = 'h1' | 'h2' | 'h3'
type Alignment = 'left' | 'center' | 'right'

const props = defineProps<{
  type?: HeadingType
  alignment?: Alignment
}>()

const tag = computed(() => props.type || 'h1')
const alignClass = computed(() => props.alignment || 'left')
</script>

<template>
  <component :is="tag" :class="['heading', tag, alignClass]">
    <slot />
  </component>
</template>

<style scoped>
.heading {
  margin: 0;
  font-weight: 600;
  color: var(--color-primary);

  &.h1 {
    font-size: 2rem;
  }

  &.h2 {
    font-size: 1.5rem;
  }

  &.h3 {
    font-size: 1.25rem;
  }

  &.left {
    text-align: left;
  }

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
}
</style>
