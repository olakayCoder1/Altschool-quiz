import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Authenticate'
// import jwt_decode from "jwt-decode";

function CreateQuestion() {
    const {authUser,authToken,logoutUser, open , setOpen} = useContext(AuthContext)
    const [ Answer , setAnswer] = useState(null);
    const [ question , setQuestion] = useState({"description": '', "option_a": "", "option_b": "", "option_c": "", "option_d": "", "answer": ""});
   
    React.useLayoutEffect(()=>{
        if(!authUser['staff']){
            window.location['href'] = 'http://localhost:3000/';
        }
    },[])



    function handleChange(e){
        // const name = e.target.value
        const name = e.target.name
        console.log(name)
        setAnswer(name)
        if ( name === 'answer'){
            setQuestion(prev => {
                return ({ ...prev, 'answer' : e.target.value })
            })
        }
        if ( name === 'category'){
            setQuestion(prev => {
                return ({ ...prev, 'category' : e.target.value })
            })
        }
        if(name === 'description'){
            setQuestion(prev => {
                return ({ ...prev, 'description' : e.target.value })
            })
        }
        if(name === 'option_a'){
            setQuestion(prev => {
                return { ...prev, 'option_a' : e.target.value }
            })
        }
        if(name === 'option_b'){
            setQuestion(prev => {
                return { ...prev, 'option_b' : e.target.value }
            })
        }
        if(name === 'option_c'){
            setQuestion(prev => {
                return { ...prev, 'option_c' : e.target.value }
            })
        }
        if(name === 'option_d'){
            setQuestion(prev => {
                return { ...prev, 'option_d' : e.target.value }
            })
        }
        }
       
    async function createQuestion(e){
        e.preventDefault()
        let correctOption;
        let val =  question['answer']
        switch(val){
            case 'a':
                correctOption = question['option_a']
                break;
            case 'b':
                correctOption = question['option_b']
                break;
            case 'c':
                correctOption =question['option_c']
                break;
            case 'd':
                correctOption = question['option_d']
        }

        setQuestion(prev => {
            return ({ ...prev, 'answer' : correctOption })
        })
        // console.log(correctOption)
        // const cate = e.target.category.value
        let questionData = {
            "description" : question['description'] ,
            "options" : [  question['option_a'], question['option_b'] , question['option_c'] ,  question['option_d'] ],
            "answer": correctOption,
            "category": e.target.category.value
        }
        
        const response = await fetch('http://127.0.0.1:8000/api/questions/create/', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer '+ String(authToken.access)
            },
            body : JSON.stringify(questionData)
            
        });
        console.log(response.status)
        if(response.status === 201){
            setQuestion({"description": '', "option_a": "", "option_b": "", "option_c": "", "option_d": "", "answer": ""})
            e.target.category.value = ''
            // e.target.description.value = ''
            // e.target.option_a.value = ''
            // e.target.option_b.value = ''
            // e.target.option_c.value = ''
            // e.target.option_d.value = ''
            // e.target.answer.value = ''
            
        }
        if( response.statusText === 'Unauthorized'){
            alert(response.statusText)
            logoutUser()
        }
    }
    
    console.log(question)

  return (
    <div className="w-full md:w-10/12">
        <div className = "flex justify-between h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
                <div className='flex gap-6'>
                {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
                </div>
                <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>Create New Question</p>
            </ div >
            <div className="hidden md:flex justify-between h-14 py-3 px-6 text-lg font-medium border-box border-b-2 bg-white sticky top-0 shadow-md">
                    <h2 className="">ADMIN | CREATE QUESTIONS</h2>
                    <p>{authUser['name']}</p>
            </div>
            <form className=' w-5/6 mx-auto mt-12' onSubmit={createQuestion}>
                <div className="flex gap-6 items-center mb-4">
                    <h2 className=' text-base font-medium text-gray-900 '>Select category for the question </h2>
                    <select name="category" className='text-sm border outline-none p-2.5 rounded-lg bg-gray-50  text-gray-700 font-medium cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-40' required>
                            <option value="" disabled selected hidden>Select Category</option>
                            <option value="introduction" onClick={handleChange}>Introduction</option>
                            <option value="html" onClick={handleChange}>Html</option>
                            <option value="css" onClick={handleChange}>Css</option>
                            <option value="python" onClick={handleChange}>Python</option>
                            <option value="javascript" onClick={handleChange}>Javascript</option>
                            <option value="cloud computing" onClick={handleChange}>Cloud computing</option>
                    </select>
                </div>

                <div className="grow bg-red-300 mb-4">
                    <textarea id="question" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Type Question..."  name="description" onChange={handleChange} value={question['description']} required/>
                </div>
                <div className="">
                    <div className=" flex gap-2 w-full my-4">
                        <div className="w-6/12 ">
                            <input type="text" id="option-a" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Option A..." name='option_a' onChange={handleChange} value={question['option_a']} required />
                        </div>
                        <div className="w-6/12 mb-2">
                            <input type="text" id="option-b" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none " placeholder="Option B..." name='option_b'  onChange={handleChange} value={question['option_b']} required />
                        </div>
                    </div>
                    <div className=" flex gap-2 w-full">
                        <div className="w-6/12 mb-2">
                            <input type="text" id="option-c" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Option C..." name='option_c' onChange={handleChange} value={question['option_c']}  required />
                        </div>
                        <div className="w-6/12 mb-2">
                            <input type="text" id="option-d" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Option D..." name='option_d' onChange={handleChange} value={question['option_d']} required />
                        </div>
                    </div>
                </div>
                <div className=" w-full mt-4">
                    <p class="ml-2  text-base font-medium text-gray-900">Select the right option to the question you are about to create</p>
                    <div className="flex gap-12 items-center ml-2 mt-2">
                        <div class="flex items-center mb-4">
                            <input id="default-radio-A" type="radio" value="a" name="answer" className="w-4 h-4  bg-gray-100 border-gray-300 " checked={question['answer']=== 'a'} onClick={handleChange} />
                            <label htmlFor="default-radio-A" class="ml-2 text-sm font-medium text-gray-900 ">A</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-radio-B" type="radio" value="b" name="answer" className="w-4 h-4  bg-gray-100 border-gray-300 " checked={question['answer']=== 'b'} onClick={handleChange} />
                            <label htmlFor="default-radio-B" class="ml-2 text-sm font-medium text-gray-900 ">B</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-radio-C" type="radio" value="c" name="answer" className="w-4 h-4  bg-gray-100 border-gray-300  " checked={question['answer']=== 'c'} onClick={handleChange} />
                            <label htmlFor="default-radio-C" class="ml-2 text-sm font-medium text-gray-900 ">C</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-radio-D" type="radio" value="d" name="answer" className="w-4 h-4  bg-gray-100 border-gray-300 "  checked={question['answer']=== 'd'} onClick={handleChange}/>
                            <label htmlFor="default-radio-D" class="ml-2 text-sm font-medium text-gray-900 ">D</label>
                        </div>
                    </div>
                </div>
                <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit" data-modal-toggle="authentication-modal" >Save Question</button>
            </form>
    </div>
  )
}

export default CreateQuestion
