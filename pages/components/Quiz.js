import React, { useEffect, useState } from 'react'
import styles from '../components/Fonts.module.css'

export default function Quiz() {

    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple');
      const data = await response.json();
      setQuestions(data.results);
      // console.log(data);
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

    

    // const quiz = async () => {
    //   const apiUrl =  'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple'
    //   const response = await fetch(apiUrl)
    //   const data = await response.json()
    //   setQuestions(data.results)
    //   console.log(data)
    // }
  return (

    <div className='bg-[#4a4fad] w-[50%] h-[75vh]'>
        <p className={`${styles.nunitoSemiBold} px-10 pt-10`}> QUESTION 1 of 10 </p>
        {/* {questions.length > 0 && (
          <p className={`px-5`} key={0}> {questions[0].question} </p>
        )} */}
      <p className={`px-10 pt-5 mb-12 text-xl ${styles.nunitoBold} w-[90%]`}> What does the yellow diamond on the NFPA 704 fire diamond represent? </p>
       
       <input className={`bg-[#8f94f0] text-[17px] border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='text' disabled value={`Robie Van Sermie`}/> 
       <input className={`text-[17px] bg-transparent border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='text' disabled value={`Saido Mane`}/> 
       <input className={`text-[17px] bg-transparent border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='text' disabled value={`Harry Kane`}/> 
       <input className={`text-[17px] bg-transparent border-solid border-white border text-white font-semibold px-5 py-4 mx-10 mb-5 rounded-md w-[90%]`} type='text' disabled value={`John Watson`}/> 

      
    </div>

  )
}
