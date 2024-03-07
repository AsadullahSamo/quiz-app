import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
export default function StickyNav() {
  
  return (
  
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Asadullah Samo" />
      <meta name="description" content="This page displays sticky navbar at the bottom of page to return to either homepage or start new quiz" />
    </Head>

      <div className='w-[100%] h-36 md:h-24 bg-white fixed -bottom-4 md:bottom-0 flex justify-center gap-1 md:gap-10 flex-col md:flex-row'>
        <Link href="/components/Homepage" className={`mx-2 md:mx-0 mt-5 h-12 text-center bg-[#3a199d] hover:bg-[#503b8f] hover:transition-all hover:duration-1000 hover:cursor-pointer rounded-full px-8 font-semibold py-3`}> Back to Home Page </Link> 
        <Link href="/components/Quiz" className={`mx-2 md:mx-0 mt-5 h-12 text-center bg-[#3a199d] hover:bg-[#503b8f] hover:transition-all hover:duration-1000 hover:cursor-pointer rounded-full px-4 md:px-8 font-semibold py-1 md:py-3`}> Start New Quiz </Link> 
      </div>
    </>
  )

}
