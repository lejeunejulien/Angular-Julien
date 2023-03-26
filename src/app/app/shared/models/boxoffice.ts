export interface Root {
  items: Item_boxoffice[]
  errorMessage: string
}

export interface Item_boxoffice {
  id: string
  rank: string
  title: string
  image: string
  weekend: string
  gross: string
  weeks: string
}
