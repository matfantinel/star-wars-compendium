import useSWR from 'swr';

import { Character } from './types';

const fetcher = async (url: string): Promise<any> => {
  return await fetch(url, {
    method: 'GET'
  }).then((res) => {
    // TODO: Map results to Character[]
    // TODO: Grab results' relational data (planets, films, starships)
    return res.json();
  }).catch(err => {
    console.error(err);
  });
};

export const useCharacters = () => {
  const { data, error } = useSWR<Character[]>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/people`, 
    (url: string) => fetcher(url)
  );

  return {
    data,
    isLoading: !error && !data,
    error
  };
};
