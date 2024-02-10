import Head from 'next/head';
import Homepage from './components/Homepage'
export default function Home() {

  return (
    <>
    <bds></bds> 
    <Head>
      <title> Homepage </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Asadullah Samo" />
      <meta name="description" content="This page is homepage and entry point of Quiz project" />
      <meta charSet="utf-8" />
    </Head>

    <main className={`min-h-screen bg-[#171a3c] flex flex-col justify-center items-center`}>
       <Homepage />      
    </main>
    </>
  );
}
