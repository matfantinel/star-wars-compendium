import { Character } from './types';

export enum ColumnType {
  Text = 'text',
  Relation = 'relation',
}

export type Column<T> = {
  title: string;
  type: ColumnType;
  key: keyof T;
  width?: string;
};

export const columns: Column<Character>[] = [
  {
    title: 'Name',
    key: 'name',
    type: ColumnType.Text,
    width: '150px',
  },
  {
    title: 'Height',
    key: 'height',
    type: ColumnType.Text,
    width: '70px',
  },
  {
    title: 'Weight',
    key: 'weight',
    type: ColumnType.Text,
    width: '70px',
  },
  {
    title: 'Hair Color',
    key: 'hairColor',
    type: ColumnType.Text,
    width: '90px',
  },
  {
    title: 'Skin Color',
    key: 'skinColor',
    type: ColumnType.Text,
    width: '100px',
  },
  {
    title: 'Eye Color',
    key: 'eyeColor',
    type: ColumnType.Text,
    width: '100px',
  },
  {
    title: 'Birth Year',
    key: 'birthYear',
    type: ColumnType.Text,
    width: '95px',
  },
  {
    title: 'Gender',
    key: 'gender',
    type: ColumnType.Text,
    width: '80px',
  },
  {
    title: 'Planet of Origin',
    key: 'homeWorld',
    type: ColumnType.Relation,
    width: '130px',
  },
  {
    title: 'Appeared In',
    key: 'films',
    type: ColumnType.Relation,
    width: '200px',
  },
  {
    title: 'Starships',
    key: 'starships',
    type: ColumnType.Relation,
    width: '200px',
  },
];