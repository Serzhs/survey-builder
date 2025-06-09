<script setup lang="ts">
import Checkbox from '../Checkbox/Checkbox.vue'
import Text from '../Text/Text.vue'
import Box from '../Box/Box.vue'

defineProps<{
  questionType: string
  required: boolean
  RAGEnabled?: boolean
  first: boolean
  last: boolean
}>()

defineEmits<{
  (e: 'update:RAGEnabled', value: boolean): void
  (e: 'update:required', value: boolean): void
  (e: 'update:position', value: 1 | -1): void
  (e: 'delete'): void
}>()
</script>

<template>
  <div class="card">
    <div class="position-button-wrapper">
      <button
        class="position-button"
        type="button"
        :disabled="first"
        @click="$emit('update:position', -1)"
      >
        ↑
      </button>
      <button
        class="position-button"
        type="button"
        :disabled="last"
        @click="$emit('update:position', 1)"
      >
        ↓
      </button>
    </div>

    <button @click="$emit('delete')" class="delete" type="button">
      Delete
    </button>

    <div>
      <slot></slot>
    </div>

    <Box :gap="6" wrap>
      <Checkbox
        :model-value="required"
        @update:model-value="(value) => $emit('update:required', value)"
        label="Requiered"
      />
      <template v-if="RAGEnabled !== undefined">
        <Checkbox
          :model-value="RAGEnabled"
          @update:model-value="(value) => $emit('update:RAGEnabled', value)"
          label="RAG enabled"
        />
      </template>
    </Box>
    <div class="type">
      <Text type="small" italic> {{ questionType }} </Text>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 5px;
  position: relative;
}

.type {
  display: block;
  text-align: right;
}

.delete {
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: transparent;
  border: none;
  font-style: italic;
  cursor: pointer;
  text-decoration: underline;
  transition: 0.2s opacity;

  &:hover {
    opacity: 0.7;
  }
}

.position-button-wrapper {
  display: flex;
  gap: 0.5rem;
  padding-bottom: 1rem;
}

.position-button {
  background-color: transparent;
  border: 1px solid var(--border-color);
  cursor: pointer;
  color: var(--color-primary);
  font-size: 1rem;
  transition: opacity 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:hover:not(:disabled) {
    opacity: 0.7;
  }
}
</style>
