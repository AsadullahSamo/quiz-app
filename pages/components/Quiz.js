import React, { useEffect, useState, useRef } from 'react';
import styles from '../components/Fonts.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';
import fyShuffle from '@/utils/fyShuffle';
import server from '@/config/server';
export default function Quiz( {data} ) {
  const divRef = useRef(null);
  const [answersArray, setAnswersArray] = useState([])
  const [questionsArray, setQuestionsArray] = useState([])
  const [guessed, setGuessed] = useState([])
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const [randArray, setRandArray] = useState([]);
  const [questions, setQuestions] = useState([]);
  let [index, setIndex] = useState(0);
  const [correctAnswerColor, setCorrectAnswerColor] = useState('bg-transparent');
  const [wrongAnswerColor, setWrongAnswerColor] = useState('bg-transparent');
  const [answerIcon, setAnswerIcon] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await fetch(
      //     'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple&encode=base64'
      //   );

      // const data = await response.json();

        setQuestions(data.results);
        let optionsArray = [...data.results[index].incorrect_answers, data.results[index].correct_answer];
        setRandArray(fyShuffle(optionsArray));
      } 
      // catch (error) {
      //   console.error('Error fetching data:', error);
      // }
    // };

    setDivHeight(divRef.current.getBoundingClientRect().height);
    const delay = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (questions && questions.length > 0) {
      let optionsArray = [...questions[index].incorrect_answers, questions[index].correct_answer];
      setRandArray(fyShuffle(optionsArray));
    }
  }, [index, questions]);

  const showNextQuestion = () => {
    if (index === 9) {
      router.push({
        pathname: '/components/ResultsBar',
        query: { correctAnsCount },
      });
      localStorage.setItem('correctAnsCount', correctAnsCount);
      localStorage.setItem('answersArray', JSON.stringify(answersArray));
      localStorage.setItem('questionsArray', JSON.stringify(questionsArray));
      localStorage.setItem('guessed', JSON.stringify(guessed));
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
    setAnswerIcon(false);
    setCorrectAnswerColor('bg-transparent');
    setWrongAnswerColor('bg-transparent');
  }; // end of showNextQuestion

  const handleClick = (e) => {
    if (e.target.value === atob(questions[index].correct_answer)) {
      setCorrectAnsCount((correctAnsCount) => correctAnsCount + 1);
      setAnswersArray([...answersArray, { correctAns: questions[index].correct_answer }]);
      setGuessed([...guessed, 1]);
    } else {
      setAnswersArray([
        ...answersArray,
        { correctAns: questions[index].correct_answer, wrongAns: e.target.value },
      ]);
      setGuessed([...guessed, 0]);
    }

    setQuestionsArray([...questionsArray, questions[index].question]);
    setAnswerIcon(true);
    setCorrectAnswerColor('bg-[#45c54f]');
    setWrongAnswerColor('bg-[#e33f3f]');
  };

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Asadullah Samo" />
        <meta name="description" content="This is the Quiz page where the questions and options are displayed" />
        <meta charSet="utf-8" />
      </Head>

      <section
        ref={divRef}
        className={`sm:w-[80%] md:w-[80%] bg-[#4a4fad] lg:w-[50%] h-[${divHeight}px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <header>
          <p className={`${styles.nunitoSemiBold} px-10 pt-10`}> QUESTION {index + 1} of 10 </p>
        </header>
        {questions && questions.length > 0 && (
          <article className={`px-10 pt-5 mb-12 text-xl ${styles.nunitoBold} w-[90%]`} key={0}>
            {' '}
            {atob(questions[index].question)}{' '}
          </article>
        )}

        {questions && questions.length > 0 && (
                randArray.map((option, mapIndex) => {
                  return (
                    <div className='flex' key={mapIndex}>
                      <input onClick={handleClick} className={`text-left hover:cursor-pointer transition-all duration-500 hover:bg-[#989ce3] ${option===questions[index].correct_answer ? correctAnswerColor : wrongAnswerColor} text-[17px] border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='submit' value={`${atob(option)}`}/>
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

        <footer className="flex justify-center">
          <input
            type="submit"
            className={`mt-3 mb-5 ${answerIcon ? 'bg-[#3a199d]' : 'bg-gray-400'} hover:${
              answerIcon ? 'bg-[#503b8f]' : 'bg-gray-400'
            } hover:transition-all hover:duration-1000 hover:cursor-pointer rounded-full px-24 py-3 font-semibold`}
            onClick={showNextQuestion}
            disabled={answerIcon ? false : true}
            value={index === 9 ? 'Check Your Results' : 'Next Question'}
          />
        </footer>
      </section>
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch(`${server}/api/hello`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}