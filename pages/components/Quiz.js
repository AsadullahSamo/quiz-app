import React, { useEffect, useState, useRef } from 'react'
import styles from '../components/Fonts.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Quiz() {

    const divRef = useRef(null)
    const [correctAns, setCorrectAns] = useState([])
    const [questionsArray, setQuestionsArray] = useState([])
    const [wrongAns, setWrongAns] = useState([])
    const [guessed, setGuessed] = useState([])     // Answers that user provided
    const [correctAnsCount, setCorrectAnsCount] = useState(0)
    const [divHeight, setDivHeight] = useState(0)
    const [randArray, setRandArray] = useState([])
    const [questions, setQuestions] = useState([])
    let [index, setIndex] = useState(0)
    const [correctAnswerColor, setCorrectAnswerColor] = useState('bg-transparent')
    const [wrongAnswerColor, setWrongAnswerColor] = useState('bg-transparent')
    const [answerIcon, setAnswerIcon] = useState(false)
    const router = useRouter()
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple'
          );
          const data = await response.json();
          setQuestions(data.results);
          let optionsArray = [...data.results[index].incorrect_answers, data.results[index].correct_answer];
          setRandArray(fyShuffle(optionsArray));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      setDivHeight(divRef.current.getBoundingClientRect().height)
      // Introduce a delay (e.g., 1 second) before making the API request
      const delay = setTimeout(() => {
        fetchData();
      }, 1000);
  
      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(delay);
    }, []);

    useEffect(() => {
      if (questions && questions.length > 0) {
        let optionsArray = [...questions[index].incorrect_answers, questions[index].correct_answer];
        setRandArray(fyShuffle(optionsArray));
      }
      // console.log(randArray)
    }, []);

    useEffect(() => {
      if (questions && questions.length > 0) {
        let optionsArray = [...questions[index].incorrect_answers, questions[index].correct_answer];
        setRandArray(fyShuffle(optionsArray));
      }
      // console.log(randArray)
    }, [index]);
  
    function fyShuffle(arr) {
      let array = [...arr];
      let len = array.length;
      for (let x = len - 1; x >= 0; x--) {
        let y = Math.floor(Math.random() * x);
        let temp = array[x];
        array[x] = array[y];
        array[y] = temp;
      }

      // console.log(array)
      return array;

    }

    const showNextQuestion = () => {
      if(index === 9) {
        router.push({
          pathname: '/components/ResultsBar',
          query: { correctAnsCount }
        });
        localStorage.setItem('correctAns', JSON.stringify(correctAns))
        localStorage.setItem('wrongAns', JSON.stringify(wrongAns))
        localStorage.setItem('questionsArray', JSON.stringify(questionsArray))
        localStorage.setItem('guessed', JSON.stringify(guessed))
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
      setAnswerIcon(false);
      setCorrectAnswerColor('bg-transparent');
      setWrongAnswerColor('bg-transparent');
    } // end of showNextQuestion

    const handleClick = (e) => {
      if(e.target.value === questions[index].correct_answer) {
        setCorrectAnsCount(correctAnsCount => correctAnsCount + 1)
        setCorrectAns([...correctAns, questions[index].correct_answer])
        setGuessed([...guessed, true])
      } else {
        setWrongAns([...wrongAns, e.target.value])
        setCorrectAns([...correctAns, questions[index].correct_answer])
        setGuessed([...guessed, false])
      }

      setQuestionsArray([...questionsArray, questions[index].question])
      setAnswerIcon(true)
      setCorrectAnswerColor('bg-[#45c54f]')
      setWrongAnswerColor('bg-[#e33f3f]')
    }

  return (
  
    <div ref={divRef} className={`bg-[#4a4fad] w-[50%] h-[${divHeight}px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
      <p className={`${styles.nunitoSemiBold} px-10 pt-10`}> QUESTION {index + 1} of 10 </p>
      {questions && questions.length > 0 && (
        <p className={`px-10 pt-5 mb-12 text-xl ${styles.nunitoBold} w-[90%]`} key={0}> {questions[index].question} </p>
      )}

      {questions && questions.length > 0 && (
        randArray.map((option, mapIndex) => {
          return (
            <div className='flex' key={mapIndex}>
              <input onClick={handleClick} className={`text-left hover:cursor-pointer transition-all duration-500 hover:bg-[#989ce3] ${option===questions[index].correct_answer ? correctAnswerColor : wrongAnswerColor} text-[17px] border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='submit' value={`${option}`}/>
              {
                answerIcon && (
                <Image
                  className='float-right -ml-24 mb-5' src={`${option===questions[index].correct_answer ? '/assets/icons/correct-answer-icon.svg' : '/assets/icons/wrong-answer-icon.svg' }`} alt="Answer icon whether correct or wrong" width={30} height={30}
                /> 
                )
              }
               
            </div>
          )
        })
      )}

      <input type='submit' className={`mt-3 mb-5 mx-[30%] ${answerIcon ? 'bg-[#3a199d]' : 'bg-gray-400'} hover:${answerIcon ? 'bg-[#503b8f]' : 'bg-gray-400'} hover:transition-all hover:duration-1000 hover:cursor-pointer rounded-full px-24 py-3 font-semibold`} onClick={showNextQuestion} disabled={answerIcon ? false : true} value={ index === 9 ? 'Check Your Results' : 'Next Question' } />
    </div>
  )
}
