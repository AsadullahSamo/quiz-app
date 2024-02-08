import Homepage from './components/Homepage'
import Quiz from './components/Quiz';
import ResultsBar from './components/ResultsBar';
import Answers from './components/Answers';
// import { useState } from 'react';
export default function Home() {

  // const [index, setIndex] = useState(0)

  return (
    
    <main className={`min-h-screen bg-[#171a3c] flex flex-col justify-center items-center`}>
       <Homepage />      
       {/* <Quiz /> */}
       {/* <ResultsBar correctAns={8}/> */}
       {/* <Answers /> */}
       {/* <button className={`mt-3 mb-5 mx-[30%] ${answerIcon ? 'bg-[#3a199d]' : 'bg-gray-400'} hover:${answerIcon ? 'bg-[#503b8f]' : 'bg-gray-400'} hover:transition-all hover:duration-1000 hover:cursor-pointer rounded-full px-24 py-3 font-semibold`} onClick={showNextQuestion} disabled={answerIcon ? false : true}> { index === 9 ? 'Check Your Results' : 'Next Question' }  </button> */}
     </main>

    // <>
    //   <Quiz />
    // </>

  );
}
