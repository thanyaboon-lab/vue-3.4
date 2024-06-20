<template>
  <div class="input-tags border rounded" :class="[isValidTag ? 'border-danger is-invalid' : '']" @click="toggleFocus">
    <div class="tag-container d-flex flex-wrap align-items-center gap-2">
      <template v-if="modelValueRef.length > 0">
        <div
          v-for="(tag, index) in modelValueRef"
          :key="index"
          class="tag-container-item d-flex align-items-center gap-2"
          :class="[!validatePattern(tag) ? 'is-invalid' : '']"
        >
          <span>{{ tag }}</span>
          <div role="button" @click="removeTag(tag)">
            <Close width="8" height="8" />
          </div>
        </div>
      </template>
      <input
        ref="inputValueRef"
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        class="tag-container-input border-0"
        @keyup.enter="onEnterTag"
        @blur="onEnterTag"
      >
    </div>
  </div>
  <slot name="input-tags-append">
    <span class="">test</span>
  </slot>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Close from './Close.vue'

interface Props {
  modelValue: string[]
  formatPattern?: RegExp
  placeholder?: string
}

const props = defineProps<Props>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const modelValueRef = ref(props.modelValue)

const inputValue = ref('')
const inputValueRef = ref()
const isValidTag = ref(false)

watch(
  () => props.modelValue,
  (val) => {
    modelValueRef.value = val
  },
)

function validatePattern(text: string) {
  if (props.formatPattern)
    return props.formatPattern.test(text)
  else return true
}

function onEnterTag() {
  if (inputValue.value) {
    if (!isDuplicate(inputValue.value)) {
      modelValueRef.value.push(inputValue.value)
      inputValue.value = ''
      emits('update:modelValue', modelValueRef.value)
      isValidTag.value = false
    }
    else {
      isValidTag.value = true
    }
  }
  else {
    isValidTag.value = false
  }
}

function toggleFocus() {
  inputValueRef.value.focus()
}

function isDuplicate(tag: string) {
  return modelValueRef.value.includes(tag)
}

function removeTag(t: string) {
  modelValueRef.value = modelValueRef.value.filter(tag => tag !== t)
  emits('update:modelValue', modelValueRef.value)
}
</script>

<style lang="scss">
.input-tags {
  cursor: text;
  min-height: 27px;
  padding: 3px 7px;

  .tag-container {
    &-item {
      border-radius: 4px;
      padding: 0 8px;
      background-color: #d1f2df;
      line-height: 1.8;

      &.is-invalid {
        color: #ffffff;
        background-color: #dc3545;
      }
      svg {
        opacity: .5;
      }
    }

    &-input {
      outline: none;
      min-width: 60px;
      flex: 1;
    }
  }
}
</style>
