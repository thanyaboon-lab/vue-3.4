<template>
  <div class="greetings mx-5">
    <h1>
      GenericComponent
    </h1>
    <button @click="active = !active">
      active
    </button>
    <TableComponent :fields="fields" :selected="selected" :items="items">
      <template #testttt>
        <div>
          aaa
        </div>
      </template>
      <template #head-address="{ field, index }">
        {{ field }} {{ index }}
      </template>
      <template #cell-address="{ item, index }">
        {{ item }} {{ index }}
      </template>
    </TableComponent>

    <div class="col-4">
      <InputTag v-model="inputTags" />
      inputTags: {{ inputTags }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentEmit, ComponentExposed, ComponentProps, ComponentSlots, ComponentType } from 'vue-component-type-helpers'
import type { Fields } from '../components/genericComponent/interface'
import TableComponent from '@/components/genericComponent/TableComponent.vue'
import InputTag from '@/components/InputTag/InputTag.vue'

const inputTags = ref([])

const active = ref(false)
const items = ref([
  {
    name: 'name',
    address: 'address',
    email: 'email',
    action: active,
  },
  {
    name: 'name2',
    address: 'address2',
    email: 'email2',
  },
  {
    name: 'name3',
    address: 'address3',
    email: 'email3',
  },
])

type Types = ComponentType<typeof TableComponent>
type Props = ComponentProps<typeof TableComponent>
type Slots = ComponentSlots<typeof TableComponent>
type Emits = ComponentEmit<typeof TableComponent>
type Expose = ComponentExposed<typeof TableComponent>

const fields = ref<Fields[]>([
  {
    label: 'name',
    key: 'name',
  },
  {
    label: 'address',
    key: 'address',
  },
  {
    label: 'email',
    key: 'email',
  },
])

const selected = ref(false)
</script>
