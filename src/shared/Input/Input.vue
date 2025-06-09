<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    type?: string
    placeholder?: string
    maxlength?: number
    minlength?: number
    required?: boolean
  }>(),
  {
    minlength: 3,
    maxlength: 255,
  }
)

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :minlength="minlength"
    :maxlength="maxlength"
    :required="required"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scoped>
.input {
  height: 40px;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
}
</style>
