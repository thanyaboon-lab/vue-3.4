<template>
  <Input v-model="inputValue" /> {{ inputValue }}
  <table>
    <slot name="testttt" />
    <THead :fields="fields" />
    <TBody :items="items" :fields="fields">
      <template v-for="(_, name) in ($slots as {})" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </TBody>
  </table>
</template>

<script setup lang="ts" generic="Row extends ItemsViewModel<Row>, Column extends Fields">
import { ref } from 'vue'
import Input from '../defineModel/Input.vue'
import type { Fields, ItemsViewModel } from './interface'
import { TBody, THead } from '@/components/genericComponent/TableGroup'

defineProps<{
  items: Row[]
  fields: Fields[]
  selected: boolean
}>()

// More Ergonomic defineEmits
const emit = defineEmits<{
  foo: [id: number]
  bar: [name: string, ...rest: any[]]
}>()

// Typed Slots with defineSlots
defineSlots<
  { testttt: unknown } &
  { [K in keyof Row as `cell-${K & string}`]: (props: { item: Row; index: number }) => Row[] } &
  { [K in keyof Row as `head-${K & string}`]: (props: { field: Fields; index: number }) => Fields[] } &
  { [K in keyof Column as `cell-${Column[K] & string}`]: (props: { item: Row; index: number }) => Row[] } &
  { [K in keyof Column as `head-${Column[K] & string}`]: (props: { field: Fields; index: number }) => Fields[] }
>()

const inputValue = ref('')
</script>

<style scoped>

</style>
