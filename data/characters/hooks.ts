import useSWRImmutable from 'swr/immutable'

import { ApiResult, CharacterResult } from './types';

const fetcher = async (url: string): Promise<any> => {
  return await fetch(url, {
    method: 'GET'
  }).then(async (res) => {
    const apiResult = await res.json() as ApiResult;

    const result: CharacterResult | undefined = apiResult ? {
      total: apiResult.count,
      nextPage: apiResult.next ?? undefined,
      previousPage: apiResult.previous ?? undefined,
      characters: apiResult.results.map((character) => {
        return {
          uid: character.url,
          name: character.name,
          height: character.height,
          weight: character.mass,
          hairColor: character.hair_color,
          skinColor: character.skin_color,
          eyeColor: character.eye_color,
          birthYear: character.birth_year,
          gender: character.gender,
          homeWorld: undefined, // TODO
          homeWorldUrl: character.homeworld,
          films: undefined, // TODO
          filmsUrls: character.films,
          starships: undefined, // TODO
          starshipsUrls: character.starships
        }
      })
    } : undefined;

    return result;
  }).catch(err => {
    console.error(err);
  });
};

export const useCharacters = () => {
  const { data, error } = useSWRImmutable<CharacterResult>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/people`,
    (url: string) => fetcher(url)
  );

  return {
    data,
    isLoading: !error && !data,
    error
  };
};
