export interface Root {
  items: Item_comingsoon[]
  errorMessage: string
}

export interface Item_comingsoon {
  id: string
  title: string
  fullTitle: string
  year: string
  releaseState: string
  image: string
  runtimeMins: any
  runtimeStr: any
  plot: any
  contentRating: any
  imDbRating: any
  imDbRatingCount: any
  metacriticRating: any
  genres: string
  genreList: GenreList[]
  directors: any
  directorList: any[]
  stars: string
  starList: StarList[]
}

export interface GenreList {
  key: string
  value: string
}

export interface StarList {
  id: any
  name: string
}
