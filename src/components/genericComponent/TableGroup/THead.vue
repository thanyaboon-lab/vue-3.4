<template>
  <thead>
    <tr>
      <th v-for="(field, fieldIndex) in fields" :key="fieldIndex">
        <slot :name="`head-${field.key}`" :field="field" :index="fieldIndex">
          {{ field.label }}
        </slot>
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
import type { Fields } from '../interface'

defineProps<{
  fields: Fields[]
}>()
</script>

<style scoped>

</style>
