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
  homeWorld?: Planet;
  homeWorldUrl: string;
  films?: Film[];
  filmsUrls: string[];
  starships?: Starship[];
  starshipsUrls: string[];
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

//
// The types below match the API schema, no need for a separate type
//

export type Planet = {
  name: string;
}

export type Film = {
  title: string;
}

export type Starship = {
  name: string;
  model: string;
  manufacturer: string;
}