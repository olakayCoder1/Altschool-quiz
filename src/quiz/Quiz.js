import { useContext } from 'react'
import { AuthContext } from '../context/Authenticate'
import QuizType from './QuizType'



export default function Quiz(){
    const {open, setOpen} = useContext(AuthContext)
    return (
        <div className='w-full md:w-full'>
             <div className = "flex gap-6 h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
             {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
            </ div >
            <div className="hidden md:block h-14 p-3 text-lg font-medium border-box border-b-2 bg-white shadow-md">
                    <h2 className=" float-right mx-12">Quiz</h2>
            </div>
            <div>
                <h3 className=" px-6 pt-6 text-gray-700">You will be provided with 50 questions base on any of the quiz category you choose. Time required for the quiz is 25 minutes. </h3>
            </div>

            <div className=" flex flex-col md:flex-row items-center gap-4 mt-8 px-2">
                <QuizType category="Introduction" linkHref="quiz/introduction"/>
                <QuizType category="HTML" linkHref="quiz/html"/>
                <QuizType category="CSS" linkHref="quiz/css" />
            </div>
            <div className=" flex flex-col md:flex-row items-center gap-4 mt-8 px-2">      
                <QuizType category="Javascript" linkHref="quiz/javascript"/>
                <QuizType category="Python" linkHref="quiz/python"/>
                <QuizType category="Cloud" linkHref="quiz/cloud"/>          
            </div>

        </div>
    )
}