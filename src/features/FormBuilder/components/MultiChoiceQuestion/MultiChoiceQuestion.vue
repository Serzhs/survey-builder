<script setup lang="ts">
import QuestionCard from '../../../../shared/QuestionCard/QuestionCard.vue'
import Input from '../../../../shared/Input/Input.vue'
import Text from '../../../../shared/Text/Text.vue'
import Box from '../../../../shared/Box/Box.vue'

const RAGlabels = ['Poor', 'Fair', 'Okay', 'Good', 'Excellent']

const props = defineProps<{
  label: string
  required: boolean
  RAGEnabled: boolean
  labels: string[]
  first: boolean
  last: boolean
}>()

const emit = defineEmits<{
  (e: 'update:required', value: boolean): void
  (e: 'update:RAGEnabled', value: boolean): void
  (e: 'update:label', value: string): void
  (e: 'update:labels', value: string[]): void
  (e: 'update:position', value: 1 | -1): void
  (e: 'delete'): void
}>()

const labelsUpdateHandler = (value: string, index: number) => {
  const clonedLabels = [...props.labels]

  clonedLabels[index] = value

  emit('update:labels', clonedLabels)
}
</script>

<template>
  <QuestionCard
    question-type="Multi choice single select question"
    :required="required"
    :RAGEnabled="RAGEnabled"
    :first="first"
    :last="last"
    @update:required="(value) => $emit('update:required', value)"
    @update:RAGEnabled="(value) => $emit('update:RAGEnabled', value)"
    @update:position="(value) => $emit('update:position', value)"
    @delete="$emit('delete')"
  >
    <Box direction="column" :gap="4">
      <Box direction="column" :gap="1">
        <Text type="label"> Your question: </Text>
        <Input
          required
          placeholder="How would you rate our service?"
          :model-value="label"
          @update:modelValue="(value) => $emit('update:label', value)"
        />
      </Box>
      <div class="answer-options">
        <template v-for="(answerLabel, index) in labels">
          <Box direction="column" :gap="2">
            <Input
              :model-value="answerLabel"
              required
              :placeholder="RAGlabels[index]"
              :maxlength="50"
              @update:modelValue="(value) => labelsUpdateHandler(value, index)"
            />
            <span :class="`RAGlabel RAGlabel--${index + 1}`">
              <template v-if="RAGEnabled">
                {{ RAGlabels[index] }}
              </template>
              &nbsp;
            </span>
          </Box>
        </template>
      </div>
    </Box>
  </QuestionCard>
</template>

<style scoped>
.answer-options {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
}

.RAGlabel {
  font-size: 0.85rem;
  font-weight: bold;
  font-style: italic;

  &.RAGlabel--1 {
    color: var(--likert-1-color);
  }
  &.RAGlabel--2 {
    color: var(--likert-2-color);
  }
  &.RAGlabel--3 {
    color: var(--likert-3-color);
  }
  &.RAGlabel--4 {
    color: var(--likert-4-color);
  }
  &.RAGlabel--5 {
    color: var(--likert-5-color);
  }
}
</style>
