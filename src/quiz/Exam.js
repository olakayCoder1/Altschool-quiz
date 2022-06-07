import React, { useContext , useRef , useState , useEffect } from 'react'
import questions from '../component/Fetch'
import Question from './Question'
import { useParams } from 'react-router-dom'
import AuthContextProvider, { AuthContext } from '../context/Authenticate'



export default function Exam(){

    const { category } = useParams()
    const {authUser,open,setOpen, authToken} = useContext(AuthContext)
    let me = new Date()
    const [ time , setTime ] = React.useState(me.getDate())
    const [Answers, setAnswers] = React.useState(() =>  JSON.parse(localStorage.getItem('answers')) || [] );
    const [randomQuestions, setRandomQuestions] = React.useState(() =>  JSON.parse(localStorage.getItem('randomQuestions')) || null);


    const Ref = useRef(null)
    const [ timer , setTimer] = useState('00:00:00')

    const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor(( total / 1000 ) % 60 );
    const minutes = Math.floor(( total / 1000 / 60 ) % 60 );
    const hours = Math.floor(( total / 1000 / 60 / 60 ) % 24 );
    return {
      total , hours , minutes , seconds
    };
  }

  const startTimer = (e) => {
    let { total , hours , minutes , seconds} = getTimeRemaining(e);
    if ( total >= 0){
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +  (minutes > 9 ? minutes : '0' + minutes) + ':' +  ( seconds > 9 ? seconds : '0' + seconds )
      )
    }
  }

  const clearTimer = (e) =>{
    // setTimer('00:00:10');
    if ( Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e); 
    }, 1000 )
    Ref.current = id ;
  }

  

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + 25 )
    return deadline ;
  }

    useEffect(()=> {
        clearTimer(getDeadTime());
    }, []);




   
    // RETRIEVE ITEM FROM LOCALSTORAGE IF EXIST
    React.useEffect(()=>{
       async function fetchQuestions(){
           console.log(category)
        await fetch(`http://127.0.0.1:8000/api/quiz/${category}/`, {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+ String(authToken.access)
            }
        }).then(res => res.json())
        .then(data => {
            setRandomQuestions(data)
            localStorage.setItem('randomQuestions', JSON.stringify(randomQuestions))

        })
       }
        fetchQuestions()
    },[])

    React.useEffect(()=>{
        
        localStorage.setItem('answers', JSON.stringify(Answers))
        
 
     },[Answers])

    // ANSWERS TRACKING FUNCTION
    function handleAnswer(question, answer){
        setAnswers( prev => {
            console.log(question, answer)
            prev[question] = answer 
            return ( {
            ...prev
            }
            )} )
    }
    // console.log(Answers)
    // QUESTIONS LIST
    // const quizs = randomQuestions.map( (quiz, index ) => {
    //     return <Question key ={index}  question_id={quiz['id']} question={quiz['description']} options={quiz['options']} handleAnswer={handleAnswer} answers={Answers} number={index + 1}/>
    // })

    

    // ANSWERS SUBMISSION FOR REVIEW
    function submitQuiz(){
        const ask = window.confirm('Are you sure you want to submit ?')
        if(ask){
        fetch('http://127.0.0.1:8000/api/result/', {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer '+ String(authToken.access)
        },
        body : JSON.stringify(Answers)})
        .then(res => res.json())
        .then(data => {
            alert(`You score ${data.score} of 50 questions`)
        })
     
    }
            localStorage.removeItem('answers')
            localStorage.removeItem('randomQuestions')
            window.location['href'] = 'http://localhost:3000/quiz'
        }    
    

    
    return (
        <div className="w-full md:full lg:w-10/12">
            <div className = "flex justify-between h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
             <div className='flex gap-6'>
             {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
            </div>
            <button onClick={submitQuiz} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800 md:mt-8">
                            Submit
                            </button>
                <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>{timer}</p>
            </ div >
            <div className="hidden md:flex justify-between h-14 py-3 px-6 text-lg font-medium border-box border-b-2 bg-white sticky top-0 shadow-md">
                    <h2 className="">RANDOM QUESTIONS</h2>
                    <p>{authUser['name']}</p>
            </div>
            <div className=" flex flex-col-reverse md:flex-row">
                <div className="w-screen md:w-9/12  md:border-r-2 md:border-l-2">
                    <div>
                        <h3 className=" px-6 py-6 text-gray-700"><span className='text-base md:text-xl text-red-600'>INSTRUCRION :  </span>You are provided 50 questions in total and the time allocated is 25minutes</h3>
                    </div>
                    <ol className='w-11/12 border-box  mt-2 mx-auto px-6 py-1'>
                        {randomQuestions ?  randomQuestions.map( (quiz, index ) => {
        return <Question key ={index}  question_id={quiz['id']} question={quiz['description']} options={quiz['options']} handleAnswer={handleAnswer} answers={Answers} number={index + 1}/>
    }) : <h1>Loading.....</h1>}
                    </ol>
                </div>
                <div className='hidden md:block  md:w-3/12'>
                    <div className='flex flex-row items-center  justify-between bg-white  border-b-2 p-2 md:flex-col md:border-b-0  md:mt-16 text-center sticky top-16'>
                        <div>
                            <h3 className='text-sm md:text-base md:font-medium lg:text-xl lg:font-medium text-gray-700'>Time Remaining</h3>
                            <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>{timer}</p>
                        </div>
                        <div>
                            <button onClick={submitQuiz} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800 md:mt-8">
                            Submit
                            </button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}





// function setQuiztimeout(){

//     const Ref = useRef(null)
//   const [ timer , setTimer] = useState('00:00:00')

//   const getTimeRemaining = (e) => {
//     const total = Date.parse(e) - Date.parse(new Date());
//     const seconds = Math.floor(( total / 1000 ) % 60 );
//     const minutes = Math.floor(( total / 1000 / 60 ) % 60 );
//     const hours = Math.floor(( total / 1000 / 60 / 60 ) % 24 );
//     return {
//       total , hours , minutes , seconds
//     };
//   }

//   const startTimer = (e) => {
//     let { total , hours , minutes , seconds} = getTimeRemaining(e);
//     if ( total >= 0){
//       setTimer(
//         (hours > 9 ? hours : '0' + hours) + ':' +  (minutes > 9 ? minutes : '0' + minutes) + ':' +  ( seconds > 9 ? seconds : '0' + seconds )
//       )
//     }
//   }

//   const clearTimer = (e) =>{
//     // setTimer('00:00:10');
//     if ( Ref.current) clearInterval(Ref.current);
//     const id = setInterval(() => {
//       startTimer(e); 
//     }, 1000 )
//     Ref.current = id ;
//   }

  

//   const getDeadTime = () => {
//     let deadline = new Date();
//     deadline.setMinutes(deadline.getMinutes() + 25 )
//     return deadline ;
//   }

//   useEffect(()=> {
//     clearTimer(getDeadTime());
//   }, []);

//   const onClickReset = () => {
//     clearTimer(getDeadTime());
//   }
// }