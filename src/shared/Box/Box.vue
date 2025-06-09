<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: boolean
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12
}>()

const boxClasses = computed(() => [
  'flex-box',
  `dir-${props.direction ?? 'row'}`,
  props.justify ? `justify-${props.justify}` : '',
  props.align ? `align-${props.align}` : '',
  props.wrap ? 'wrap' : 'nowrap',
  props.gap !== undefined ? `gap-${props.gap}` : '',
])
</script>

<template>
  <div :class="boxClasses">
    <slot />
  </div>
</template>

<style scoped>
.flex-box {
  display: flex;
}

.dir-row {
  flex-direction: row;
}
.dir-row-reverse {
  flex-direction: row-reverse;
}
.dir-column {
  flex-direction: column;
}
.dir-column-reverse {
  flex-direction: column-reverse;
}

.justify-start {
  justify-content: flex-start;
}
.justify-center {
  justify-content: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-evenly {
  justify-content: space-evenly;
}

.align-start {
  align-items: flex-start;
}
.align-center {
  align-items: center;
}
.align-end {
  align-items: flex-end;
}
.align-stretch {
  align-items: stretch;
}
.align-baseline {
  align-items: baseline;
}

.wrap {
  flex-wrap: wrap;
}
.nowrap {
  flex-wrap: nowrap;
}

/* Gap classes: gap-1 = 0.25rem, gap-2 = 0.5rem, etc. */
.gap-0 {
  gap: 0rem;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-8 {
  gap: 2rem;
}
.gap-10 {
  gap: 2.5rem;
}
.gap-12 {
  gap: 3rem;
}
</style>
