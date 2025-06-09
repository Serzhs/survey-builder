<script setup lang="ts">
defineProps<{
  modelValue: boolean
  label?: string
  required?: boolean
  disabled?: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <label>
    <input
      type="checkbox"
      :checked="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      :required="required"
      :disabled="disabled"
    />
    {{ label }}
  </label>
</template>
