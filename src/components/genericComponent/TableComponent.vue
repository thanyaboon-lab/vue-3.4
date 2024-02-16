<template>
  <table>
    <thead>
      <tr>
        <th v-for="(field, fieldIndex) in fields" :key="fieldIndex">
          <slot :name="`head-${field.key}`" :field="field" :index="fieldIndex">
            {{ field.label }}
          </slot>
        </th>
      </tr>
    </thead>
    <TBody :items="items" :fields="fields">
      <template v-for="(_, name) in ($slots as {})" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </TBody>
  </table>
</template>

<script setup lang="ts" generic="Row extends ItemsViewModel<Row>">
import TBody from './TableGroup/TBody.vue'
import type { Fields, ItemsViewModel } from './interface'

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
</script>

<style scoped>

</style>