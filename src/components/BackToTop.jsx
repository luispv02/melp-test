import { useEffect } from 'react';
import { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export const BackToTop = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener('"scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  if(scroll < 1000) return null;
  
  return (
    <button className='bg-gray-200 p-2 lg:p-4 rounded-full fixed bottom-6 right-6 cursor-pointer border border-gray-400 shadow-lg' onClick={handleScrollTop}>
      <FaArrowUp />
    </button>
  )
}

