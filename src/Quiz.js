import { useContext } from 'react'
import backimage from './coding2.jpg'
import { AuthContext } from './context/Authenticate'



export default function Quiz(){
    const {open, setOpen} = useContext(AuthContext)
    return (
        <div className='w-full mx-auto md:w-10/12'>
             <div className = "flex gap-6 h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
             {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
            </ div >
            <form className=' flex flex-col gap-16 md:gap-3 md:bg-gray-300  md:flex-row md:justify-evenly md:px-16  p-6'>
                <select className='text-base border-2 border-gray-800 px-10 py-3 rounded-lg md:text-lg bg-gray-500 text-white font-medium hover:bg-gray-700 hover:text-white cursor-pointer      '>
                    <option value="random">RANDOM</option>
                    <option value="one">WEEK ONE</option>
                    <option value="two">WEEK TWO</option>
                    <option value="three">WEEK THREE</option>
                    <option value="four">WEEK FOUR</option>
                </select>
                <select className=' border-2 border-gray-800 px-10 py-3 rounded-lg text-lg bg-gray-500 text-white font-medium hover:bg-gray-700 hover:text-white cursor-pointer'>
                    <option value={20}>20 QUESTIONS</option>
                    <option value={50}>50 QUESTIONS</option>
                    <option value={100}>100 QUESTIONS</option>
                </select>
                <input type="submit" value="START QUIZ" className=' border-2 border-green-600 bg-green-600 px-10 py-3 rounded-lg text-lg font-medium text-white cursor-pointer hover:bg-green-700' />
            </form>
        </div>
    )
}