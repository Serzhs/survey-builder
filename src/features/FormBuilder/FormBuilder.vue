<script setup lang="ts">
import { Questions, QuestionTypes } from './types/types'
import Headings from '../../shared/Headings/Headings.vue'
import { ref, watch, onBeforeMount } from 'vue'
import AddQuestionRow from './components/AddQuestionRow/AddQuestionRow.vue'
import TextQuestion from './components/TextQuestion/TextQuestion.vue'
import MultiChoiceQuestion from './components/MultiChoiceQuestion/MultiChoiceQuestion.vue'
import Button from '../../shared/Button/Button.vue'
import { moveArrayItem } from './utils/moveArrayItem'
import Box from '../../shared/Box/Box.vue'

const questions = ref<Questions[]>([])

watch(
  questions,
  () => {
    localStorage.setItem('questions', JSON.stringify(questions.value))
  },
  { deep: true }
)

onBeforeMount(() => {
  questions.value = JSON.parse(localStorage.getItem('questions') || '[]')
})

const addQuestionHandler = (value: QuestionTypes) => {
  if (value === 'TextQuestion') {
    questions.value.push({
      type: 'TextQuestion',
      id: Math.random(),
      label: '',
      required: true,
    })
  }

  if (value === 'MultiChoiceQuestion') {
    questions.value.push({
      type: 'MultiChoiceQuestion',
      id: Math.random(),
      label: '',
      labels: ['', '', '', '', ''],
      RAGEnabled: false,
      required: true,
    })
  }
}

const positionChange = (position: 1 | -1, index: number) => {
  questions.value = moveArrayItem(questions.value, index, position)
}

const submitHandler = () => {
  alert('Form submitted')
}
</script>

<template>
  <Headings alignment="center"> Survey builder </Headings>
  <AddQuestionRow @submit="addQuestionHandler" />

  <form @submit.prevent="submitHandler">
    <Box direction="column" :gap="4">
      <template v-for="(question, index) in questions" :key="question.id">
        <template v-if="question.type === 'TextQuestion'">
          <TextQuestion
            :first="index === 0"
            :last="index === questions.length - 1"
            :label="question.label"
            :required="question.required"
            :RAGEnabled="undefined"
            @delete="questions.splice(index, 1)"
            @update:required="(value) => (question.required = value)"
            @update:label="(value) => (question.label = value)"
            @update:position="(value) => positionChange(value, index)"
          />
        </template>

        <template v-if="question.type === 'MultiChoiceQuestion'">
          <MultiChoiceQuestion
            :first="index === 0"
            :last="index === questions.length - 1"
            :label="question.label"
            :labels="question.labels"
            :required="question.required"
            :RAGEnabled="question.RAGEnabled"
            @delete="questions.splice(index, 1)"
            @update:required="(value) => (question.required = value)"
            @update:RAGEnabled="(value) => (question.RAGEnabled = value)"
            @update:label="(value) => (question.label = value)"
            @update:labels="(value) => (question.labels = value)"
            @update:position="(value) => positionChange(value, index)"
          />
        </template>
      </template>

      <Box justify="center">
        <Button v-if="questions.length" type="submit">Save form</Button>
      </Box>
    </Box>
  </form>
</template>
