import React from 'react';
import { Column, ColumnType } from '../components/molecules/Table/Table';

import { useCharacters } from '../data/characters/hooks';
import { Character } from '../data/characters/types';

import PaginatedTable from '../components/organisms/PaginatedTable';

const CharactersTemplate: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data, pagination, error, isLoading } = useCharacters(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns: Column<Character>[] = [
    {
      title: 'Name',
      key: 'name',
      type: ColumnType.Text,
    },
    {
      title: 'Height',
      key: 'height',
      type: ColumnType.Text,
    },
    {
      title: 'Weight',
      key: 'weight',
      type: ColumnType.Text,
    },
    {
      title: 'Hair Color',
      key: 'hairColor',
      type: ColumnType.Text,
    },
    {
      title: 'Skin Color',
      key: 'skinColor',
      type: ColumnType.Text,
    },
    {
      title: 'Eye Color',
      key: 'eyeColor',
      type: ColumnType.Text,
    },
    {
      title: 'Birth Year',
      key: 'birthYear',
      type: ColumnType.Text,
    },
    {
      title: 'Gender',
      key: 'gender',
      type: ColumnType.Text,
    },
    {
      title: 'Planet of Origin',
      key: 'homeWorldUrl',
      type: ColumnType.Relation,
    },
    {
      title: 'Appeared In',
      key: 'filmsUrls',
      type: ColumnType.Relation,
    },
    {
      title: 'Starships',
      key: 'starshipsUrls',
      type: ColumnType.Relation,
    },
  ];

  return (
    <>
      <PaginatedTable
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
