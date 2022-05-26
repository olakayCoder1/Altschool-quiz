import React from 'react'
import logo from './logo.svg'
import profile from './image-default.png'
import questions from './Fetch'
import Question from './Question'




export default function Exam(){
    let me = new Date()
    const [ time , setTime ] = React.useState(me.getDate())
    
    
    
    const [tripType, setTripType] = React.useState({});

    function handleAnswer(question, answer){
        // const question = question
        // const answer = answer
        console.log('olakay is there')
        setTripType( prev => {
            return ( {
            ...prev,
            question : answer
            }
            )} )
    }
    console.log(tripType)

    const quizs = questions.map( quiz => {
        return <Question key={quiz['description']} question={quiz['description']} options={quiz['options']} handleAnswer={handleAnswer}/>
    })
    return (
        <div className=" flex w-9/12">
            <div className='hidden md:w-3/12 md:px-3 md:block' >
               <div className='h-screen sticky top-0 pt-4 md:flex md:flex-col md:justify-between'>
                    <div>
                        <img src={profile}  alt='logo' className=' w-full h-72'/>
                        <h2 className=' text-2xl font-medium text-gray-700 mt-3'>Olanrewaju Kabiru</h2>
                        <p className=' text-sm font-medium text-gray-500 pl-2'>@olakayCoder1</p>
                        <p className=' text-sm font-medium text-gray-500 pl-2'>olakayCoder1@gmail.com</p>

                        <div className=' mt-16'>
                            <h3 className='md:text-base md:font-medium lg:text-xl lg:font-medium text-gray-700'>Time Remaining</h3>
                            <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>1hr : 45min : 09s</p>
                        </div>
                    </div>
                    <div>
                        <p className=" text-xs font-medium text-white py-3 text-center">Copyright @2020 olakayCoder1</p>
                    </div>
                </div>

            </div>
            <div className="w-screen md:w-9/12 md:border-r-2  md:border-l-2">
                <ol className='w-11/12 border-box  mt-2 mx-auto px-6 py-1'>
                    {quizs}

                


{/* 
      <div>
        <div onClick={() => { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question2':'oneWay'
            }       
            )          
          })
        }} >
          <input  type="radio"  value={tripType['question2']}  name="tripType2" checked={tripType['question2'] == "oneWay"} />
          One-way
        </div>
        <div  onClick={() =>  { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question2':'roundTrip'
            }
              
            )
            
          })
        }}  >
          <input  type="radio" value={tripType['question2']}  name="tripType2"  checked={tripType['question2'] == "roundTrip"} />
          Round-Trip
        </div>
        <div onClick={() =>  { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question2':'multiCity'
            }
              
            )
            
          })
        }} >
          <input type="radio" value={tripType['question2']} name="tripType2" checked={tripType['question2'] == "multiCity"}/>
          Multi-City
        </div>
      </div> */}


    






                    {/* <li className=' border-b-2 py-3'>
                        <div className='mb-4 '>
                            <p className='text-base font-medium text-gray-600 md:text-base md:font-normal lg:text-lg lg:text-gray-600'>
                               <span className='text-base font-medium md:text-lg md:font-medium lg:text-xl lg:font-semibold'>1</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
                            </p>
                        </div>
                        <ul>
                            <li className=' text-gray-600 py-2'>
                            <span className='text-base font-medium md:text-xl md:font-semibold'>A</span> .  <span className='cursor-pointer ' >Alhamdulillah</span>
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-base font-medium md:text-xl md:font-semibold'>B</span> .  <span className='cursor-pointer' >Alhamdulillah</span>
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-base font-medium md:text-xl md:font-semibold'>C</span> .  <span className=' text-blue-600 cursor-pointer' >Alhamdulillah</span>
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-base font-medium md:text-xl md:font-semibold'>D</span> .  <span className='cursor-pointer' >Alhamdulillah</span>
                            </li>
                        </ul>
                    </li>

                    <li className=' border-b-2 py-3'>
                        <div className='mb-4 '>
                            <p className=' font-normal text-lg text-gray-600'>
                               <span className=' text-xl font-semibold'>2</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
                            </p>
                        </div>
                        <ul>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>A</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>B</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>C</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold text-blue-600'>D</span> .  <span className=' text-blue-600'>Alhamdulillah</span>
                            </li>
                        </ul>
                    </li>


                    <li className=' border-b-2 py-3'>
                        <div className='mb-4 '>
                            <p className=' font-normal text-lg text-gray-600'>
                               <span className=' text-xl font-semibold'>3</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
                            </p>
                        </div>
                        <ul>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>A</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold text-blue-600'>B</span> .  <span className=' text-blue-600'>Alhamdulillah</span>
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>C</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>D</span> .   Alhamdulillah
                            </li>
                        </ul>
                    </li>

                    <li className=' border-b-2 py-3'>
                        <div className='mb-4 '>
                            <p className=' font-normal text-lg text-gray-600'>
                               <span className=' text-xl font-semibold'>4</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
                            </p>
                        </div>
                        <ul>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold text-blue-600'>A</span> .  <span className=' text-blue-600'>Alhamdulillah</span>
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>B</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>C</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>D</span> .   Alhamdulillah
                            </li>
                        </ul>
                    </li>

                    <li className=' border-b-2 py-3'>
                        <div className='mb-4 '>
                            <p className=' font-normal text-lg text-gray-600'>
                               <span className=' text-xl font-semibold'>5</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
                            </p>
                        </div>
                        <ul>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>A</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold text-blue-600'>B</span> .  <span className=' text-blue-600'>Alhamdulillah</span>
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>C</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>D</span> .   Alhamdulillah
                            </li>
                        </ul>
                    </li>

                    <li className=' border-b-2 py-3'>
                        <div className='mb-4 '>
                            <p className=' font-normal text-lg text-gray-600'>
                               <span className=' text-xl font-semibold'>6</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
                            </p>
                        </div>
                        <ul>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold text-blue-600'>A</span> .  <span className=' text-blue-600'>Alhamdulillah</span>
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>B</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>C</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>D</span> .   Alhamdulillah
                            </li>
                        </ul>
                    </li>

                    <li className=' border-b-2 py-3'>
                        <div className='mb-4 '>
                            <p className=' font-normal text-lg text-gray-600'>
                               <span className=' text-xl font-semibold'>7</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
                            </p>
                        </div>
                        <ul>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>A</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>B</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold text-blue-600'>C</span> .  <span className=' text-blue-600'>Alhamdulillah</span>
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>D</span> .   Alhamdulillah
                            </li>
                        </ul>
                    </li>


                    <li className=' border-b-2 py-3'>
                        <div className='mb-4 '>
                            <p className=' font-normal text-lg text-gray-600'>
                               <span className=' text-xl font-semibold'>8</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
                            </p>
                        </div>
                        <ul>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>A</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>B</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold'>C</span> .  Alhamdulillah
                            </li>
                            <li className=' text-gray-600 py-2'>
                            <span className=' text-xl font-semibold text-blue-600'>D</span> .  <span className=' text-blue-600'>Alhamdulillah</span>
                            </li>
                        </ul>
                    </li> */}
                </ol>
            </div>
            {/* <div className=' w-3/12 py-3 px-3'>
                <div className=' sticky top-0 py-4'>
                    <img src={profile}  alt='logo' className=' w-full h-72'/>
                    <h2 className=' text-2xl font-medium text-gray-600 mt-3'>Olanrewaju Kabiru</h2>
                    <p className=' text-lg font-medium text-gray-500 pl-2'>@olakayCoder1</p>
                    <p className=' text-lg font-medium text-gray-500 pl-2'>olakayCoder1@gmail.com</p>

                    <div className=' mt-16'>
                        <h3 className=' text-xl font-medium'>Time Remaining</h3>
                        <p className=' text-red-600 font-extrabold text-3xl'>1hr : 45min : 09s</p>
                    </div>
                </div>

            </div> */}
        </div>
    )
}