import Homepage from './components/Homepage'
import Quiz from './components/Quiz';

export default function Home() {
  return (
    
    <main className={`min-h-screen bg-[#171a3c] flex flex-col justify-center items-center`}>
      {/* <Homepage />       */}
      <Quiz />
    </main>

  );
}
