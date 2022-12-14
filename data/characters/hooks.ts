import useSWRImmutable from 'swr/immutable'

import { ApiResult, Character, CharacterResult, Film, Planet, Starship } from './types';

const getCurrentPage = (nextPageUrl?: string, previousPageUrl?: string): number => {
  if (nextPageUrl) {
    return parseInt(nextPageUrl.split('page=')[1]) - 1;
  }

  if (previousPageUrl) {
    return parseInt(previousPageUrl.split('page=')[1]) + 1;
  }

  return 1;
};

const fetcher = async (url: string): Promise<any> => {
  return await fetch(url, {
    method: 'GET'
  }).then(async (res) => {
    const apiResult = await res.json() as ApiResult;

    const result: CharacterResult | undefined = apiResult ? {
      total: apiResult.count,
      totalPages: Math.ceil(apiResult.count / 10),
      currentPage: getCurrentPage(apiResult.next, apiResult.previous),
      characters: apiResult.results.map((character): Character => {
        return {
          uid: character.url,
          name: character.name,
          height: character.height && !isNaN(parseInt(character.height))
            ? `${parseInt(character.height) / 100}m`
            : character.height,
          weight: character.mass && !isNaN(parseInt(character.mass))
            ? `${character.mass}kg`
            : character.mass,
          hairColor: character.hair_color,
          skinColor: character.skin_color,
          eyeColor: character.eye_color,
          birthYear: character.birth_year,
          gender: character.gender,
          homeWorldUrl: character.homeworld,
          filmsUrl: character.films,
          starshipsUrl: character.starships
        }
      })
    } : undefined;

    return result;
  }).catch(err => {
    console.error(err);
  });
};

export const useCharacters = (page?: number, search?: string) => {
  const { data, error } = useSWRImmutable<CharacterResult>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/people?page=${page ?? 1}&search=${search ?? ''}`,
    (url: string) => fetcher(url)
  );

  return {
    data: data?.characters,
    pagination: {
      total: data?.total ?? 0,
      totalPages: data?.totalPages ?? 1,
      currentPage: data?.currentPage ?? 1,
    },
    isLoading: !error && !data,
    error
  };
};
