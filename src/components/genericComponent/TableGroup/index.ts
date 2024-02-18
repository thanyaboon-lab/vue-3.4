import { defineAsyncComponent } from 'vue'

// export {default as TBody} from './TBody.vue'
// export {default as THead} from './THead.vue'


export const TBody = defineAsyncComponent(() => import('./TBody.vue'))
export const THead = defineAsyncComponent(() => import('./THead.vue'))