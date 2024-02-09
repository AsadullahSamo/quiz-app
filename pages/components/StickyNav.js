import React from 'react'
import Link from 'next/link'
export default function StickyNav() {
  
  return (
  
    <div className='w-[100%] h-24 bg-white fixed bottom-0 flex justify-center gap-10'>
      <Link href="/components/Homepage" className={`mt-5 h-12 text-center bg-[#3a199d] hover:bg-[#503b8f] hover:transition-all hover:duration-1000 hover:cursor-pointer rounded-full px-8 font-semibold py-3`}> Back to Home Page </Link> 
      <Link href="/components/Quiz" className={`mt-5 h-12 text-center bg-[#3a199d] hover:bg-[#503b8f] hover:transition-all hover:duration-1000 hover:cursor-pointer rounded-full px-8 font-semibold py-3`}> Start New Quiz </Link> 
    </div>

  )

}
