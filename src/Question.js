import React from "react";


export default function Question(props){

    function handleClick(e){
        props.handleAnswer(props.question_id, e.target.value)

    }
    const options = props.options.map(element => {
        return (
            <div onClick={handleClick}  className=' text-base font-medium py-2 my-2' key={element}>
                <input  type="radio"  value={element}  name={props.question} checked={props.answers[props.question_id] === element}  id={element}/>
                <label htmlFor={element} className=' px-4'>{element}</label>
            </div>
        )
        
    });


    return (

        <div>
            
            <div className=" py-4 text-gray-600">
                    <p className='font-medium text-base md:font-normal md:text-lg'>
                       <span className=' text-xl font-semibold'>{props.number}</span> . {props.question}
                    </p>
                    <div>
                        {options}
                    </div>
                </div>
        </div>
        
    )
}