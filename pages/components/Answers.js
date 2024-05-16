import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Fonts.module.css';
import Head from 'next/head';

export default function Answers({ answerIcon }) {
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [guessed, setGuessed] = useState([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAnswersArray = JSON.parse(localStorage.getItem('answersArray'));
      const storedQuestions = JSON.parse(localStorage.getItem('questionsArray'));
      const storedGuessed = JSON.parse(localStorage.getItem('guessed'));

      setAnswersArray(storedAnswersArray);
      setQuestions(storedQuestions);
      setGuessed(storedGuessed);
    }

    if (divRef.current && sectionRef.current) {
      setDivHeight(divRef.current.getBoundingClientRect().height);
      setSectionHeight(sectionRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Asadullah Samo" />
        <meta name="description" content="This page is answers page of Quiz project" />
        <meta charSet="utf-8" />
      </Head>

      <section
        ref={sectionRef}
        className={`mt-10 mb-32 bg-[#4a4fad] w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-[${sectionHeight}]`}
      >
        {questions.map((question, index) => (
          <article key={index} className="mb-5">
            <div className="relative top-[34px] left-3 md:left-7 w-6 h-6 rounded-full inline-flex items-center justify-center bg-[#4a4fad] text-white font-bold">
              {index + 1}
            </div>
            <div ref={divRef} className={`bg-white rounded-md w-[95%] pl-10 pt-2 mx-2 md:mx-5 mb-5 h-${divHeight}`}>
              <header className="flex gap-10">
                <p className={`text-left text-black text-[18px] font-bold w-[85%]`}> {atob(question) } </p>
                <Image
                  className='float-right absolute right-[10%] md:right-[13%] lg:right-[18%] xl:right-[22.5%] 2xl:right-[27%]'
                  src={guessed[index] === 1 ? '/assets/icons/correct-answer-icon.svg' : '/assets/icons/wrong-answer-icon.svg'}
                  alt="Answer icon whether correct or wrong"
                  width={30}
                  height={30}
                />
              </header>
              <div className='flex gap-10'>
                {guessed[index] === 0 && (
                  <p className='text-[#b5666d] mt-5 font-semibold'>{answersArray[index].wrongAns}</p>
                )}
                <p className={`${guessed ? 'ml-[-3.7rem]' : ''} text-green-500 mt-5 pl-[3.8rem] font-semibold`}> {atob(answersArray[index].correctAns)} </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
