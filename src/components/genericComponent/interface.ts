export interface Fields {
    label: string
    key: string
}

export interface ItemsViewModel<T> extends Partial<Record<string, any>> {
    itemGroup?: T[]
    checkedDisable?: boolean
  }