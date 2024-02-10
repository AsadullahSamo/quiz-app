import React from 'react'
import Image from "next/image";
import styles from './Homepage.module.css'
import Link from 'next/link';
export default function Homepage() {
  return (
    
    <div className='flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <Image
        src="/assets/icons/logo.svg"
        alt="Picture of the author"
        width={300}
        height={300}
      />

      <p className=" text-3xl mt-5 font-medium"> Test your Knowledge! </p>
      <p className={`text-1xl mt-5 ${styles.nunitoSemiBold}`}> Challenge yourself with randomly generated quizzes </p>
      <Link href="/components/Quiz" className='mt-5 bg-gradient-to-br hover:bg-gradient-to-tl hover:transition-all hover:duration-500 hover:cursor-pointer from-[#733de1] to-[#228fe0] rounded-full px-24 py-3 font-semibold'> Let's Get Started </Link>
    </div>

  )
}
