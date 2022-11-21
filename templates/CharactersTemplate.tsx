import React from 'react';

import PaginatedTable from '../components/organisms/PaginatedTable';
import { columns } from '../data/characters/columns';
import { useCharacters } from '../data/characters/hooks';
import { Character, Planet } from '../data/characters/types';

const CharactersTemplate: React.FC = () => {
  const [data, setData] = React.useState<Character[] | undefined>();

  const [currentPage, setCurrentPage] = React.useState(1);
  const { data: characters, pagination, error, isLoading } = useCharacters(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    setData(characters);

    // Get unique URLs for each relational data
    const planetUrls = characters
      ?.map((c) => c.homeWorldUrl)
      .filter((url, index, arr) => arr.indexOf(url) === index) as string[];

    // Fetch the data and add it to the object
    planetUrls?.forEach((url) => {
      fetch(url)
        .then((r) => r.json())
        .then((planet: Planet) => {
          setData((prev) => {
            return prev?.map((c) => {
              if (c.homeWorldUrl === url) {
                return { ...c, homeWorld: planet.name };
              }
              return c;
            });
          });
        });
    });

    const filmUrls = characters
      ?.map((c) => c.filmsUrl)
      .flat()
      .filter((url, index, arr) => arr.indexOf(url) === index) as string[];

    filmUrls?.forEach((url) => {
      fetch(url)
        .then((r) => r.json())
        .then((film) => {
          setData((prev) => {
            return prev?.map((c) => {
              if (c.filmsUrl?.includes(url)) {
                return { ...c, films: c.films ? c.films.split(', ').concat(film.title).join(', ') : film.title };
              }
              return c;
            });
          });
        });
    });

    const starshipUrls = characters
      ?.map((c) => c.starshipsUrl)
      .flat()
      .filter((url, index, arr) => arr.indexOf(url) === index) as string[];

    starshipUrls?.forEach((url) => {
      fetch(url)
        .then((r) => r.json())
        .then((starship) => {
          setData((prev) => {
            return prev?.map((c) => {
              if (c.starshipsUrl?.includes(url)) {
                return {
                  ...c,
                  starships: c.starships ? c.starships.split(', ').concat(starship.name).join(', ') : starship.name,
                };
              }
              return c;
            });
          });
        });
    });
  }, [characters]);

  return (
    <>
      <PaginatedTable
        title='Star Wars Compendium - Characters'
        columns={columns}
        data={data}
        pagination={pagination}
        loading={isLoading}
        error={error}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default CharactersTemplate;
