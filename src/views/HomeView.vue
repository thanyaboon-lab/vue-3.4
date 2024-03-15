<template>
  <div class="greetings">
    <h1>GenericComponent</h1>
    <TableComponent :fields="fields" :selected="selected" :items="items" >
      <template #head-address="{field, index}">
        {{ field }} {{ index }}
      </template>
      <template #cell-address="{item , index}">
        {{ item }} {{ index }}
      </template>
    </TableComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TableComponent from '@/components/genericComponent/TableComponent.vue'
import { type Fields } from '../components/genericComponent/interface'

export interface Items {
  name: string
  address: string
  email: string
  action?: boolean
}

const items = ref<Items[]>([
  {
    name: 'name',
    address: 'address',
    email: 'email',
    action: true
  },
  {
    name: 'name2',
    address: 'address2',
    email: 'email2'
  },
  {
    name: 'name3',
    address: 'address3',
    email: 'email3'
  },
])

const fields = ref<Fields[]>([
  {
    label: 'name',
    key: 'name'
  },
  {
    label: 'address',
    key: 'address'
  },
  {
    label: 'email',
    key: 'email'
  }
])

const selected = ref(false)
</script>