export type Character = {
  uid: string;
  name: string;
  height: string;
  weight: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeWorld?: string;
  homeWorldUrl?: string;
  films?: string;
  filmsUrl?: string[];
  starships?: string;
  starshipsUrl?: string[];
}

export type CharacterResult = {
  total: number;
  totalPages: number;
  currentPage: number;
  characters: Character[];
}

export type CharacterApiSchema = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  starships: string[];
  url: string;
}

export type ApiResult = {
  count: number;
  next: string;
  previous?: string;
  results: CharacterApiSchema[];
}

//
// The types below match the API schema, no need for a separate type
//

export type Planet = {
  url: string;
  name: string;
}

export type Film = {
  url: string;
  title: string;
}

export type Starship = {
  url: string;
  name: string;
  model: string;
  manufacturer: string;
}