<template>
  <Input v-model="inputValue"/> {{ inputValue }}
  <table>
    <THead :fields="fields"/>
    <TBody :items="items" :fields="fields">
      <template v-for="(_, name) in ($slots as {})" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </TBody>
  </table>
</template>

<script setup lang="ts" generic="Row extends ItemsViewModel<Row>">
import { TBody, THead } from '@/components/genericComponent/TableGroup'
import type { Fields, ItemsViewModel } from './interface'
import Input from '../defineModel/Input.vue'
import { ref } from 'vue'

defineProps<{
  items: Row[]
  fields: Fields[]
  selected: boolean
}>()

// Typed Slots with defineSlots
defineSlots<
  { [K in keyof Row as `cell-${K & string}`]: (props: { item: Row; index: number }) => Row[] } &
  { [K in keyof Row as `head-${K & string}`]: (props: { field: Fields; index: number }) => Fields[] }
>()

// More Ergonomic defineEmits
const emit = defineEmits<{
  foo: [id: number]
  bar: [name: string, ...rest: any[]]
}>()

const inputValue = ref('')
</script>

<style scoped>

</style>