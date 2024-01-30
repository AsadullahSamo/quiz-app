import React, { useEffect, useState } from 'react'
import styles from '../components/Fonts.module.css'
import Image from 'next/image'

export default function Quiz() {
    const [randArray, setRandArray] = useState([])
    const [questions, setQuestions] = useState([])
    let [index, setIndex] = useState(0)
    const [correctAnswerColor, setCorrectAnswerColor] = useState('bg-transparent')
    const [wrongAnswerColor, setWrongAnswerColor] = useState('bg-transparent')
    const [answerIcon, setAnswerIcon] = useState(false)

    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple'
          );
          const data = await response.json();
          setQuestions(data.results);
          setRandArray(fyShuffle([data.results[index].correct_answer, data.results[index].incorrect_answers[0], data.results[index].incorrect_answers[1], data.results[index].incorrect_answers[2]]))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Introduce a delay (e.g., 1 second) before making the API request
      const delay = setTimeout(() => {
        fetchData();
      }, 1000);
  
      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(delay);
    }, []);
  
    function fyShuffle(arr) {
      let array = [...arr];
      let len = array.length;
      for (let x = len - 1; x > 0; x--) {
        let y = Math.floor(Math.random() * x);
        let temp = array[x];
        array[x] = array[y];
        array[y] = temp;
      }

      console.log(array)
      return array;

    }

    const showNextQuestion = () => {
      if(index === 9) {
        setIndex(0)
      } else {
        setIndex(index => index + 1)
      }
      setAnswerIcon(false)
      setCorrectAnswerColor('bg-transparent')
      setWrongAnswerColor('bg-transparent')

      fyShuffle([questions[index].correct_answer, questions[index].incorrect_answers[0], questions[index].incorrect_answers[1], questions[index].incorrect_answers[2]])
    } // end of showNextQuestion

    const handleClick = (e) => {
      setAnswerIcon(true)
      setCorrectAnswerColor('bg-[#45c54f]')
      setWrongAnswerColor('bg-[#e33f3f]')
    }

    

    // const correctAns = questions[index].correct_answer
  return (

    <div className='bg-[#4a4fad] w-[50%] h-[75vh]'>

        <p className={`${styles.nunitoSemiBold} px-10 pt-10`}> QUESTION {index + 1} of 10 </p>
        {questions && questions.length > 0 && (
          <p className={`px-10 pt-5 mb-12 text-xl ${styles.nunitoBold} w-[90%]`} key={0}> {questions[index].question} </p>
        )}
       
      { questions && questions.length > 0 && (
        <div className='flex'>
        <input onClick={handleClick} className={`text-left hover:cursor-pointer transition-all duration-500 hover:bg-[#989ce3] ${correctAnswerColor} text-[17px] border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='submit' value={`${questions[index].correct_answer}`}/> 
        {
          answerIcon && (
          <Image
            className='float-right -ml-24 mb-5' src="/assets/icons/correct-answer-icon.svg" alt="Picture of the author" width={30} height={30}
          />
          )
        }
        </div>
      )}

      { questions && questions.length > 0 && (
        <div className='flex'>
          <input onClick={handleClick} className={`text-left hover:cursor-pointer transition-all duration-500 hover:bg-[#989ce3] ${wrongAnswerColor} text-[17px] border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='submit' value={`${questions[index].incorrect_answers[0]}`}/>
          {
            answerIcon && (
            <Image
              className='float-right -ml-24 mb-5' src="/assets/icons/correct-answer-icon.svg" alt="Picture of the author" width={30} height={30}
            /> 
            )
          }
           
        </div>
      )}

      { questions && questions.length > 0 && (
        <div className='flex'>
          <input onClick={handleClick} className={`text-left hover:cursor-pointer transition-all duration-500 hover:bg-[#989ce3] ${wrongAnswerColor} text-[17px] border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='submit' value={`${questions[index].incorrect_answers[1]}`}/>
          {
            answerIcon && (
            <Image
              className='float-right -ml-24 mb-5' src="/assets/icons/correct-answer-icon.svg" alt="Picture of the author" width={30} height={30}
            /> 
            )
          }
           
        </div>
      )}

      { questions && questions.length > 0 && (
        <div className='flex'>
          <input onClick={handleClick} className={`text-left hover:cursor-pointer transition-all duration-500 hover:bg-[#989ce3] ${wrongAnswerColor} text-[17px] border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='submit' value={`${questions[index].incorrect_answers[2]}`}/>
          {
            answerIcon && (
            <Image
              className='float-right -ml-24 mb-5' src="/assets/icons/correct-answer-icon.svg" alt="Picture of the author" width={30} height={30}
            /> 
            )
          }
           
        </div>
      )}

       <button className='mt-3 mx-[30%] bg-[#3a199d] hover:bg-[#503b8f] hover:transition-all hover:duration-1000 hover:cursor-pointer rounded-full px-24 py-3 font-semibold' onClick={showNextQuestion}> Next Question </button>

    </div>

  )
}
