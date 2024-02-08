import React from 'react'
import { useRef, useState } from 'react'
import styles from './Fonts.module.css'
import Image from 'next/image'
export default function Answers({ answerIcon }) {

    const divRef = useRef(null)
    const [divHeight, setDivHeight] = useState(0)
    const correctAns = JSON.parse(localStorage.getItem('correctAns'))
    const wrongAns = JSON.parse(localStorage.getItem('wrongAns'))
    const questions = JSON.parse(localStorage.getItem('questionsArray'))
    const guessed = JSON.parse(localStorage.getItem('guessed'))
    // setDivHeight(divRef.current.getBoundingClientRect().height)

  return (

    <div ref={divRef} className={`mt-10 bg-[#4a4fad] w-[50%] h-[700px]`}>
      <p className={`ml-10 mt-5 ${styles.nunitoBold} text-xl`}> Your Answers </p>
        {/* <div className="relative top-[34px] left-7 w-6 h-6 rounded-full inline-flex items-center justify-center bg-[#4a4fad] text-white font-bold"> 1 </div> 
        <input className={`text-left text-black text-[18px] font-bold bg-white pr-5 pl-10 pt-2 pb-12 mx-5 mb-5 rounded-md w-[95%]`} type='submit' value={`Which player scored the fastest hat-trick in the premier league`}/>
        <Image
          className='float-right w-6 mt-[-5.8rem] relative right-10' src={`/assets/icons/wrong-answer-icon.svg`} alt="Answer icon whether correct or wrong" width={30} height={30}
        /> 
        <div className='flex'>
          <p className='text-[#b5666d] -mt-12 pl-[3.7rem] font-semibold'> Robin van Persie </p>
          <p className='-ml-10 text-green-500 -mt-12 pl-[3.8rem] font-semibold'> Robin van Persie </p>
        </div> */}
      
      {
        questions.map((question, index) => {
          return (
            <>
              <div className="relative top-[34px] left-7 w-6 h-6 rounded-full inline-flex items-center justify-center bg-[#4a4fad] text-white font-bold"> {index + 1} </div> 
              <input className={`text-left text-black text-[18px] font-bold bg-white pr-5 pl-10 pt-2 pb-12 mx-5 mb-5 rounded-md w-[95%]`} type='submit' value={`${question}`}/>
                <Image
                className='float-right w-6 mt-[-5.8rem] relative right-10' src={`${guessed[index]} ? '/assets/icons/correct-answer-icon.svg' : '/assets/icons/wrong-answer-icon.svg'`} alt="Answer icon whether correct or wrong" width={30} height={30}
                /> 
              <div className='flex'>
                { !guessed[index] &&
                  <p className='text-[#b5666d] -mt-12 pl-[3.7rem] font-semibold'> {wrongAns[index]} </p> 
                }
                <p className='-ml-10 text-green-500 -mt-12 pl-[3.8rem] font-semibold'> {correctAns[index]} </p>
              </div>
            </>
          )
        })
      }
        
    </div>

  )
}
