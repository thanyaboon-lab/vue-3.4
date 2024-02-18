<template>
  <input v-model="value" type="text">
  <button @click="count++">{{ count }}</button>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'


/**
 * @before
 */

// const props = defineProps<{
//   modelValue: string
// }>()
 
// const emit = defineEmits<{
//   (e: "update:modelValue", value: string): void
// }>()
 
// const value = computed({
//   get: () => props.modelValue,
//   set: (value) => emit("update:modelValue", value),
// })

/**
 * @after
 */

const value = defineModel()
const count = ref(0)

watchEffect(() => {
  console.log('value', count.value)
})

/**
 * @switch_case
 */

const quarter:string = ''
let quarterText = ''

switch (quarter) {
case 'Q1':
  quarterText = 'ไตรมาส 1'
  break
case 'Q2':
  quarterText = 'ไตรมาส 2'
  break
case 'Q3':
  quarterText = 'ไตรมาส 3'
  break
case 'Q4':
  quarterText = 'ไตรมาส 4'
  break
default:
  quarterText = ''
  break
}

/**
 * @object_case
 */

const quarterCase: Record<string, string> = {
  'Q1': 'ไตรมาส 1',
  'Q2': 'ไตรมาส 4',
  'Q3': 'ไตรมาส 3',
  'Q4': 'ไตรมาส 4',
  default: ''
}

const returnValue = quarterCase[quarter] ?? quarterCase.default


</script>

<style scoped>

</style>