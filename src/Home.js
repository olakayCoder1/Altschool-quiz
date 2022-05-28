import home from './alt-image.PNG'

export default function Home() {
    return (
        <div className='w-full md:w-9/12 h-full md:p-10' >
            <img src={home} alt="SVG"  className=' w-full h-96' />
            {/* <img src="	https://vestertech.github.io/AltSchool1/undraw_proud_coder_re_exuy.svg" alt="SVG"></img> */}
            <div className=' text-xl font-light text-gray-600 p-4 md:text-xl'>
                <h1 className='text-xl md:text-2xl'>WELCOME to Altschool Practice Quiz</h1>
                <p>The questions on this website are base on the study guide provided by <strong><i>Altschool Diploma School</i></strong>.</p>
                <p> You will be presented Multiple Choice Questions, where you will be given four options. 
                     You will select the best suitable answer for the question and then proceed to the next question without wasting given time.
                     You will get your online test score after finishing the complete test via the email you provided.
                </p>
                <p>If there is error in any of the questions, kindly reach out to me by visiting <strong><span className=' text-gray-900'>"Find Error ?"</span></strong></p>

            </div>
        </div>
    )
}