export interface Root {
  searchType: string
  expression: string
  results: Result[]
  errorMessage: string
}

export interface Result {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}
