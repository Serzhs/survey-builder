<script setup lang="ts">
import Button from '../../../../shared/Button/Button.vue'
import Select from '../../../../shared/Select/Select.vue'
import { ref } from 'vue'
import type { QuestionTypes } from '../../types/types.ts'

type QuestionOption = { label: string; value: QuestionTypes }

const questionOptions: QuestionOption[] = [
  { label: 'Text question', value: 'TextQuestion' },
  {
    label: 'Multi choice single select question',
    value: 'MultiChoiceQuestion',
  },
]

const emit = defineEmits<{
  (e: 'submit', selected: 'TextQuestion' | 'MultiChoiceQuestion'): void
}>()

const questionSelected = ref<QuestionTypes>(questionOptions[0].value)

const addQuestionHandler = () => {
  emit('submit', questionSelected.value)
}
</script>

<template>
  <div class="container">
    <div class="select-wrapper">
      <Select
        :model-value="questionSelected"
        @update:model-value="(val) => (questionSelected = val as QuestionTypes)"
        :options="questionOptions"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="addQuestionHandler"> Add question </Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.select-wrapper,
.button-wrapper {
  flex-shrink: 0;
  flex-grow: 0;
}
</style>
