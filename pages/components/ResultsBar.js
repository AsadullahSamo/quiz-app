import React from 'react'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import StickyNav from './StickyNav'
// import styles from './ResultsBar.module.css'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import fonts from '../components/Fonts.module.css'
import Answers from './Answers'
export default function ResultsBar() {
  
  const divRef = useRef(null)
  const router = useRouter()
  const correctAnsCount = router.query.correctAnsCount
 
  return (
    <div className='flex flex-col items-center'>
      <div ref={divRef} className='bg-[#4a4fad] w-[50%] h-48 flex gap-4 mt-10'>
        <div style={{ width: 150, height: 150, color: 'red', margin: '25px'}}>

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
                // Customize background - only used when the `background` prop is true
                background: {
                fill: 'green',
                },
            }}/>
        </div>

        <p className={`${fonts.nunitoBold} mt-10 text-xl w-48`}> You answered {correctAnsCount}/10 questions correctly!</p>
      </div>

        <Answers />
        <StickyNav />
    </div>

  )

}
