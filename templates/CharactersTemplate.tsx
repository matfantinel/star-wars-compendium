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
      width: '150px'
    },
    {
      title: 'Height',
      key: 'height',
      type: ColumnType.Text,
      width: '70px'
    },
    {
      title: 'Weight',
      key: 'weight',
      type: ColumnType.Text,
      width: '70px'
    },
    {
      title: 'Hair Color',
      key: 'hairColor',
      type: ColumnType.Text,
      width: '90px'
    },
    {
      title: 'Skin Color',
      key: 'skinColor',
      type: ColumnType.Text,
      width: '100px'
    },
    {
      title: 'Eye Color',
      key: 'eyeColor',
      type: ColumnType.Text,
      width: '100px'
    },
    {
      title: 'Birth Year',
      key: 'birthYear',
      type: ColumnType.Text,
      width: '95px'
    },
    {
      title: 'Gender',
      key: 'gender',
      type: ColumnType.Text,
      width: '80px'
    },
    {
      title: 'Planet of Origin',
      key: 'homeWorldUrl',
      type: ColumnType.Relation,
      width: '130px'
    },
    {
      title: 'Appeared In',
      key: 'filmsUrls',
      type: ColumnType.Relation,
      width: '120px'
    },
    {
      title: 'Starships',
      key: 'starshipsUrls',
      type: ColumnType.Relation,
      width: '100px'
    },
  ];

  return (
    <>
      <PaginatedTable
        title="Star Wars Compendium - Characters"
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
