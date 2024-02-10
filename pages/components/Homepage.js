import React from 'react'
import Image from "next/image";
import styles from './Homepage.module.css'
import Link from 'next/link';
import Head from 'next/head';
export default function Homepage() {
  return (
    
    <>
      <Head>
        <title> Home Page </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Asadullah Samo" />
        <meta name="description" content="This page is homepage of Quiz project" />
        <meta charSet="utf-8" />
      </Head>

      <main className='flex flex-col justify-center items-center min-h-screen'>
        <Image
          src="/assets/icons/logo.svg"
          alt="Picture of the author"
          width={300}
          height={300}
        />

        <p className=" text-3xl mt-5 font-medium"> Test your Knowledge! </p>
        <p className={`text-1xl mt-5 ${styles.nunitoSemiBold}`}> Challenge yourself with randomly generated quizzes </p>
        <Link href="/components/Quiz" className='mt-5 bg-gradient-to-br hover:bg-gradient-to-tl hover:transition-all hover:duration-500 hover:cursor-pointer from-[#733de1] to-[#228fe0] rounded-full px-24 py-3 font-semibold'> Let's Get Started </Link>
      </main>
    

    </>
  )
}
