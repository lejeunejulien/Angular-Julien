export interface Root {
  imDbId: string
  title: string
  fullTitle: string
  type: string
  year: string
  directors: Directors
  writers: Writers
  actors: Actor[]
  others: Other[]
  errorMessage: string
}

export interface Directors {
  job: string
  items: Item[]
}

export interface Item {
  id: string
  name: string
  description: string
}

export interface Writers {
  job: string
  items: Item2[]
}

export interface Item2 {
  id: string
  name: string
  description: string
}

export interface Actor {
  id: string
  image: string
  name: string
  asCharacter: string
}

export interface Other {
  job: string
  items: Item3[]
}

export interface Item3 {
  id: string
  name: string
  description: string
}
