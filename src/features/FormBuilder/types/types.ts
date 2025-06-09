type TextQuestionType = 'TextQuestion'
type MultiChoiceQuestionType = 'MultiChoiceQuestion'

export type QuestionTypes = TextQuestionType | MultiChoiceQuestionType

export type TextQuestion = {
  type: TextQuestionType
  id: number
  label: string
  required: boolean
}

export type MultiChoiceQuestion = {
  type: MultiChoiceQuestionType
  id: number
  label: string
  labels: string[]
  RAGEnabled: boolean
  required: boolean
}

export type Questions = TextQuestion | MultiChoiceQuestion
