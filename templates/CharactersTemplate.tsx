import React from 'react';
import { Column, ColumnType } from '../components/organisms/Table/Table';

import { useCharacters } from '../data/characters/hooks';
import { Character } from '../data/characters/types';

import Table from '../components/organisms/Table';

const CharactersTemplate: React.FC = () => {
  const { data, error, isLoading } = useCharacters();

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
      <Table columns={columns} data={data?.characters} loading={isLoading} error={error} />
    </>
  );
};

export default CharactersTemplate;
