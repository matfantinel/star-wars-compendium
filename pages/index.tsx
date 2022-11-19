import Head from 'next/head';
import CharactersTemplate from '../templates/CharactersTemplate';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars Compendium</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main>
        <CharactersTemplate />
      </main>
    </>
  );
}
