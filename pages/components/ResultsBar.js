import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import StickyNav from './StickyNav'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import fonts from '../components/Fonts.module.css'
import Answers from './Answers'

export default function ResultsBar() {
  
  const divRef = useRef(null)
  const router = useRouter()
  const correctAnsCount = router.query.correctAnsCount

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Asadullah Samo" />
        <meta name="description" content="This is the results bar page where the results of the quiz are displayed" />
      </Head>

      <main className='flex flex-col items-center'>
        <div ref={divRef} className='bg-[#4a4fad] mr-[3.5rem] md:mr-0 w-[80%] md:w-[50%] h-36 md:h-48 flex gap-1 md:gap-4 mt-10'>
          <div className='m-[25px] w-[250px] md:w-[150px] h-[250px] md:h-[150px]'>

              <CircularProgressbar
              value={correctAnsCount * 10}
              text={`${correctAnsCount}/10`}
              styles={{
                path: {
                  stroke: `#8394ed`,
                },
                
                trail: {
                  stroke: '#3b179b',
                },

                text: {
                  fill: '#fff',
                  fontSize: '18px',
                },
                background: {
                  fill: 'green',
                },
              }}/>
          </div>

          <p className={`${fonts.nunitoBold} mx-0 md:mx-10  mt-10 text-[17px] md:text-xl w-96 md:w-56`}> You answered {correctAnsCount}/10 questions correctly!</p>
        </div>

          <Answers />
          <StickyNav />
      </main>
    </>
  )

}
