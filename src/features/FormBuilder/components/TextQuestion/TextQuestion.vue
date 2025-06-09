<script setup lang="ts">
import Input from '../../../../shared/Input/Input.vue'
import Text from '../../../../shared/Text/Text.vue'
import QuestionCard from '../../../../shared/QuestionCard/QuestionCard.vue'

defineProps<{
  label: string
  required: boolean
  order: number
  first: boolean
  last: boolean
}>()

defineEmits<{
  (e: 'update:required', value: boolean): void
  (e: 'update:label', value: string): void
  (e: 'update:position', value: 1 | -1): void
  (e: 'delete'): void
}>()
</script>

<template>
  <QuestionCard
    question-type="Text question"
    :required="required"
    :order="order"
    :first="first"
    :last="last"
    @update:required="(value) => $emit('update:required', value)"
    @update:position="(value) => $emit('update:position', value)"
    @delete="$emit('delete')"
  >
    <div class="wrapper">
      <Text type="label"> Your question: </Text>
      <Input
        :model-value="label"
        placeholder="What is your favorite animal?"
        required
        @update:modelValue="(value) => $emit('update:label', value)"
      />
    </div>
  </QuestionCard>
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  padding-bottom: 1rem;
}
</style>
