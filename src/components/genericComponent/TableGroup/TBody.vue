<template>
  <tbody>
    <tr v-for="(item, itemIndex) in items" :key="itemIndex">
      <td v-for="(field, fieldIndex) in fields" :key="fieldIndex">
        <slot :name="`cell-${field.key}`" :item="item" :index="itemIndex">
          {{ item[field.key] }}
        </slot>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts" setup generic="Row extends ItemsViewModel<Row>">
import type { Fields, ItemsViewModel } from '../interface'

defineProps<{
  items: Row[]
  fields: Fields[]
}>()

defineSlots<{
  [K in keyof Row as `cell-${K & string}`]: (props: { item: Row; index: number }) => Row[]
}>()
</script>
