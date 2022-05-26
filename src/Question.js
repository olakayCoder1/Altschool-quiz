import React from "react";



export default function Question(props){

    function handleClick(e){
        console.log(e.target.value)
        // props.handleAnswer('question1', e.target.value)

    }

    return (

        <div>
            <div className=" py-4 text-gray-600">
                    <p className=' font-normal text-lg'>
                       <span className=' text-xl font-semibold'>2</span> . {props.question}
                    </p>
                    <div>
                        <div onClick={handleClick}  className=' text-base font-medium py-2 my-2' >
                            <input  type="radio"  value={props.options[0]}  name={props.question} checked={props.options[0]}  id={props.options[0]}/>
                            <label htmlFor={props.options[0]} className=' px-4'>{props.options[0]}</label>
                        </div>
                        <div  onClick={handleClick} className=' text-base font-medium py-2 my-2 bg-red-300' >
                            <input  type="radio" value={props.options[1]}  name={props.question}  checked={props.options[1]} id={props.options[1]}/>
                            <label htmlFor={props.options[1]} className='px-4'>{props.options[1]}</label>
                        </div>
                        <div onClick={handleClick} className=' text-base font-medium py-2 my-2 ' >
                            <input type="radio" value={props.options[2]} name={props.question} checked={props.options[2]} id={props.options[2]}/>
                            <label htmlFor={props.options[2]} className=' px-4'>{props.options[2]}</label>
                        </div>
                    </div>
                </div>






{/* 
                <li className=' border-b-2 py-3'>
            <div className='mb-4 '>
                <p className='text-base font-medium text-gray-600 md:text-base md:font-normal lg:text-lg lg:text-gray-600'>
                    <span className='text-base font-medium md:text-lg md:font-medium lg:text-xl lg:font-semibold'>1</span> . {props.question}
                </p>
            </div>
            <ul>
                <li className=' text-gray-600 py-2'>
                <span className='text-base font-medium md:text-xl md:font-semibold'>A</span> .  <span className='cursor-pointer ' >{props.options[0]}</span>
                </li>
                <li className=' text-gray-600 py-2'>
                <span className=' text-base font-medium md:text-xl md:font-semibold'>B</span> .  <span className='cursor-pointer' >{props.options[1]}</span>
                </li>
                <li className=' text-gray-600 py-2'>
                <span className=' text-base font-medium md:text-xl md:font-semibold'>C</span> .  <span className=' text-blue-600 cursor-pointer' >{props.options[2]}</span>
                </li>
                <li className=' text-gray-600 py-2'>
                <span className=' text-base font-medium md:text-xl md:font-semibold'>D</span> .  <span className='cursor-pointer' >Alhamdulillah</span>
                </li>
            </ul>
        </li> */}
        </div>
        
    )
}