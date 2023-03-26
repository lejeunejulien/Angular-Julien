export interface Root {
  items: Item_top250movies[]
  errorMessage: string
}

export interface Item_top250movies {
  id: string
  rank: string
  title: string
  fullTitle: string
  year: string
  image: string
  crew: string
  imDbRating: string
  imDbRatingCount: string
}
