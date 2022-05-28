import React from 'react'
import logo from './logo.svg'
import profile from './image-default.png'
import questions from './Fetch'
import Question from './Question'



export default function Exam(){
    let me = new Date()
    const [ time , setTime ] = React.useState(me.getDate())
    const [Answers, setAnswers] = React.useState(() =>  JSON.parse(localStorage.getItem('answers')) || [] );
    // RETRIEVE ITEM FROM LOCALSTORAGE IF EXIST
    React.useEffect(()=>{
        localStorage.setItem('answers', JSON.stringify(Answers))
    },[Answers])

    // ANSWERS TRACKING FUNCTION
    function handleAnswer(question, answer){
        setAnswers( prev => {
            prev[question] = answer 
            return ( {
            ...prev
            }
            )} )
    }
    console.log(Answers)
    // QUESTIONS LIST
    const quizs = questions.map( (quiz, index ) => {
        return <Question key={quiz['description']} question_id={quiz['id']} question={quiz['description']} options={quiz['options']} handleAnswer={handleAnswer} answers={Answers} number={index + 1}/>
    })

    

    // ANSWERS SUBMISSION FOR REVIEW
    function submitQuiz(){
        const ask = window.confirm('Are you sure you want to submit ?')
        if(ask){
            localStorage.removeItem('answers')
            window.location['href'] = 'http://localhost:3000/'
        }    
    }

    return (
        <div className=" flex flex-col-reverse md:flex-row md:w-9/12">
            <div className="w-screen md:w-9/12  md:border-r-2 md:border-l-2">
                <div>
                    <h3 className=" px-6 py-6 text-gray-700"><span className='text-base md:text-xl text-red-600'>INSTRUCRION :  </span>Quiz instruction goes here (which implies rel="noopener") is a security risk in older browsers (which implies rel="noopener") is a security risk in older browsers</h3>
                </div>
                <ol className='w-11/12 border-box  mt-2 mx-auto px-6 py-1'>
                    {quizs}
                </ol>
            </div>
            <div className=' md:w-3/12 sticky top-0'>
                <div className='flex flex-row items-center  justify-between bg-white  border-b-2 p-2 md:flex-col md:border-b-0  md:mt-16 text-center sticky top-16'>
                    <div>
                        <h3 className='text-sm md:text-base md:font-medium lg:text-xl lg:font-medium text-gray-700'>Time Remaining</h3>
                        <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>1hr : 45min : 09s</p>
                    </div>
                    <div>
                        <button onClick={submitQuiz} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800 md:mt-8">
                        Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}