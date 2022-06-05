import { useContext, useEffect } from 'react'
import home from './alt-image.PNG'
import { AuthContext } from './context/Authenticate'


export default function Home() {

    const {authUser} = useContext(AuthContext);

    const {open,setOpen} = useContext(AuthContext)
    
    return (
        <div className='w-full md:w-10/12 h-full md:p-10' >
             <div className = "flex gap-6 h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
             {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
            </ div >
            <img src={home} alt="SVG"  className=' w-full h-96' />
            {/* <img src="	https://vestertech.github.io/AltSchool1/undraw_proud_coder_re_exuy.svg" alt="SVG"></img> */}
            <div className=' text-base font-light text-gray-600 p-4 md:text-xl'>
                <h1 className='text-sm font-medium md:text-xl'>WELCOME to Altschool Practice Quiz</h1>
                <p>The questions on this website are base on the study guide provided by <strong><i>Altschool Diploma School</i></strong>.</p>
                <p> You will be presented Multiple Choice Questions, where you will be given four options. 
                     You will select the best suitable answer for the question and then proceed to the next question without wasting given time.
                     You will get your online test score after finishing the complete test via the email you provided.
                </p>
                <p>If there is error in any of the questions, kindly reach out to me by visiting <strong><span className=' text-gray-900'>"Report Error ?"</span></strong></p>

            </div>
        </div>
    )
}