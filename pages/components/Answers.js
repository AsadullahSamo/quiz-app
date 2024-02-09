import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Fonts.module.css'
export default function Answers({ answerIcon }) {

  const sectionRef = useRef(null)
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [sectionHeight, setSectionHeight] = useState(0);
  // const [correctAns, setCorrectAns] = useState([]);
  // const [wrongAns, setWrongAns] = useState([]);
  const [answersMap, setAnswersMap] = useState(new Map());
  const [questions, setQuestions] = useState([]);
  const [guessed, setGuessed] = useState([]);

  useEffect(() => {
    // Check if localStorage is available before accessing it
    if (typeof window !== 'undefined') {
      // const storedCorrectAns = localStorage.getItem('correctAns');
      // const storedWrongAns = localStorage.getItem('wrongAns');
      // const storedAnswersMap = new Map(JSON.parse(localStorage.getItem('answersMap')))
      const storedAnswersArray = JSON.parse(localStorage.getItem('answersArray'))
      const storedQuestions = JSON.parse(localStorage.getItem('questionsArray'))
      const storedGuessed = JSON.parse(localStorage.getItem('guessed'))

      // Parse JSON if values are present
      // setCorrectAns(storedCorrectAns ? JSON.parse(storedCorrectAns) : []);
      // setWrongAns(storedWrongAns ? JSON.parse(storedWrongAns) : []);
      // setAnswersMap(storedAnswersMap);
      setAnswersArray(storedAnswersArray);
      setQuestions(storedQuestions);
      setGuessed(storedGuessed);
    }

    if (divRef.current && sectionRef.current) {
      setDivHeight(divRef.current.getBoundingClientRect().height);
      setSectionHeight(sectionRef.current.getBoundingClientRect().height);
    }

    // console.log('AnswersMap:', answersMap);
    // console.log('AnswersArray:', answersArray);
    
  }, []);

  return (

    <section ref={sectionRef} className={`my-10 bg-[#4a4fad] w-[50%] h-[${sectionHeight}]`}>
       {/* <p className={`ml-10 mt-5 ${styles.nunitoBold} text-xl`}> Your Answers </p>
         <div className="relative top-[34px] left-7 w-6 h-6 rounded-full inline-flex items-center justify-center bg-[#4a4fad] text-white font-bold"> 1 </div> 
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
            <div key={index}>
              <div className="relative top-[34px] left-7 w-6 h-6 rounded-full inline-flex items-center justify-center bg-[#4a4fad] text-white font-bold"> {index + 1} </div> 
                <div ref={divRef} className={`bg-white rounded-md w-[95%] pl-10 pt-2 mx-5 mb-5 h-${divHeight}`}>

                  <div className='flex gap-10'>
                    <p className={`text-left text-black text-[18px] font-bold w-[90%]`}> {atob(question)} </p>
                    <Image
                      className='float-right absolute right-[28%]' src={guessed[index] === 1 ? '/assets/icons/correct-answer-icon.svg' : '/assets/icons/wrong-answer-icon.svg'} alt="Answer icon whether correct or wrong" width={30} height={30}
                    /> 
                  </div>
                <div className='flex gap-10'>
                  { guessed[index] === 0 &&
                    <p className='text-[#b5666d] mt-5 font-semibold'> {answersArray[index].wrongAns} </p> 
                  }
                  <p className={`${guessed ? 'ml-[-3.7rem]' : ''} text-green-500 mt-5 pl-[3.8rem] font-semibold`}> {atob(answersArray[index].correctAns)} </p>
                </div>
              </div>
            </div>
            
          )
        })
      }
        
    </section>

  )
}
