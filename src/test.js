{/* <div className=" py-4 text-gray-600">
                    <p className=' font-normal text-lg'>
                       <span className=' text-xl font-semibold'>2</span> . {props.question}
                    </p>
                    <div>
                        <div onClick={handleClick}  className=' text-base font-medium py-2 my-2' >
                            <input  type="radio"  value={props.options[0]}  name={props.question} checked={props.answers[props.question] === props.options[0]}  id={props.options[0]}/>
                            <label htmlFor={props.options[0]} className=' px-4'>{props.options[0]}</label>
                        </div>
                        <div  onClick={handleClick} className=' text-base font-medium py-2 my-2' >
                            <input  type="radio" value={props.options[1]}  name={props.question}  checked={props.answers[props.question] === props.options[1]} id={props.options[1]}/>
                            <label htmlFor={props.options[1]} className='px-4'>{props.options[1]}</label>
                        </div>
                        <div onClick={handleClick} className=' text-base font-medium py-2 my-2 ' >
                            <input type="radio" value={props.options[2]} name={props.question} checked={props.answers[props.question] === props.options[2]} id={props.options[2]}/>
                            <label htmlFor={props.options[2]} className=' px-4'>{props.options[2]}</label>
                        </div>
                    </div>
                </div> */}


//   <div>
//   <div className=" py-4 text-gray-600">
//           <p className=' font-normal text-lg'>
//              <span className=' text-xl font-semibold'>2</span> .  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link.
//           </p>
//           <div>
//               <div onClick={handleClick}  className=' text-base font-medium py-2 my-2' >
//                   <input  type="radio"  value={tripType['question1']}  name="tripType" checked={tripType['question1'] == "oneWay"} />
//                   <span className=' px-4'>One-way</span>
//               </div>
//               <div  onClick={() =>  { 
//                   setTripType( prev => {
//                       return ( {
//                       ...prev,
//                       'question1':'roundTrip'
//                       }
//                       )           
//                   })
//                   }} className=' text-base font-medium py-2 my-2' >
//                   <input  type="radio" value={tripType['question1']}  name="tripType2"  checked={tripType['question1'] == "roundTrip"} />
//                   <span className=' px-4'>Round-Trip</span>
//               </div>
//               <div onClick={() =>  { 
//                   setTripType( prev => {
//                       return ( {
//                       ...prev,
//                       'question1':'multiCity'
//                       }
//                       )
//                   })
//                   }} className=' text-base font-medium py-2 my-2 ' >
//                   <input type="radio" value={tripType['question1']} name="tripType" checked={tripType['question1'] == "multiCity"}/>
//                   <span className=' px-4'>Multi-City</span>
//               </div>
//           </div>
//       </div>







//       <li className=' border-b-2 py-3'>
//   <div className='mb-4 '>
//       <p className='text-base font-medium text-gray-600 md:text-base md:font-normal lg:text-lg lg:text-gray-600'>
//           <span className='text-base font-medium md:text-lg md:font-medium lg:text-xl lg:font-semibold'>1</span> . {props.question}
//       </p>
//   </div>
//   <ul>
//       <li className=' text-gray-600 py-2'>
//       <span className='text-base font-medium md:text-xl md:font-semibold'>A</span> .  <span className='cursor-pointer ' >{props.options[0]}</span>
//       </li>
//       <li className=' text-gray-600 py-2'>
//       <span className=' text-base font-medium md:text-xl md:font-semibold'>B</span> .  <span className='cursor-pointer' >{props.options[1]}</span>
//       </li>
//       <li className=' text-gray-600 py-2'>
//       <span className=' text-base font-medium md:text-xl md:font-semibold'>C</span> .  <span className=' text-blue-600 cursor-pointer' >{props.options[2]}</span>
//       </li>
//       <li className=' text-gray-600 py-2'>
//       <span className=' text-base font-medium md:text-xl md:font-semibold'>D</span> .  <span className='cursor-pointer' >Alhamdulillah</span>
//       </li>
//   </ul>
// </li>
// </div>




//         <li className=' border-b-2 py-3'>
//     <div className='mb-4 '>
//         <p className='text-base font-medium text-gray-600 md:text-base md:font-normal lg:text-lg lg:text-gray-600'>
//             <span className='text-base font-medium md:text-lg md:font-medium lg:text-xl lg:font-semibold'>1</span> . {props.question}
//         </p>
//     </div>
//     <ul>
//         <li className=' text-gray-600 py-2'>
//         <span className='text-base font-medium md:text-xl md:font-semibold'>A</span> .  <span className='cursor-pointer ' >{props.options[0]}</span>
//         </li>
//         <li className=' text-gray-600 py-2'>
//         <span className=' text-base font-medium md:text-xl md:font-semibold'>B</span> .  <span className='cursor-pointer' >{props.options[1]}</span>
//         </li>
//         <li className=' text-gray-600 py-2'>
//         <span className=' text-base font-medium md:text-xl md:font-semibold'>C</span> .  <span className=' text-blue-600 cursor-pointer' >{props.options[2]}</span>
//         </li>
//         <li className=' text-gray-600 py-2'>
//         <span className=' text-base font-medium md:text-xl md:font-semibold'>D</span> .  <span className='cursor-pointer' >Alhamdulillah</span>
//         </li>
//     </ul>
// </li> 





//   <div onClick={handleClick}  className=' text-base font-medium py-2 my-2' >
//                             <input  type="radio"  value={props.options[0]}  name={props.question} checked={props.answers[props.question] === props.options[0]}  id={props.options[0]}/>
//                             <label htmlFor={props.options[0]} className=' px-4'>{props.options[0]}</label>
//                         </div>
//                         <div  onClick={handleClick} className=' text-base font-medium py-2 my-2' >
//                             <input  type="radio" value={props.options[1]}  name={props.question}  checked={props.answers[props.question] === props.options[1]} id={props.options[1]}/>
//                             <label htmlFor={props.options[1]} className='px-4'>{props.options[1]}</label>
//                         </div>
//                         <div onClick={handleClick} className=' text-base font-medium py-2 my-2 ' >
//                             <input type="radio" value={props.options[2]} name={props.question} checked={props.answers[props.question] === props.options[2]} id={props.options[2]}/>
//                             <label htmlFor={props.options[2]} className=' px-4'>{props.options[2]}</label>
//                         </div> */}







// <div className='hidden md:w-3/12 md:px-3 md:block' >
//    <div className='h-screen sticky top-0 pt-4 md:flex md:flex-col md:justify-between'>
//         <div>
//             <img src={profile}  alt='logo' className=' w-full h-72'/>
//             <h2 className=' text-2xl font-medium text-gray-700 mt-3'>Olanrewaju Kabiru</h2>
//             <p className=' text-sm font-medium text-gray-500 pl-2'>@olakayCoder1</p>
//             <p className=' text-sm font-medium text-gray-500 pl-2'>olakayCoder1@gmail.com</p>

//             <div className=' mt-16'>
//                 <h3 className='md:text-base md:font-medium lg:text-xl lg:font-medium text-gray-700'>Time Remaining</h3>
//                 <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>1hr : 45min : 09s</p>
//             </div>
//         </div>
//         <div>
//             <p className=" text-xs font-medium text-white py-3 text-center">Copyright @2020 olakayCoder1</p>
//         </div>
//     </div>

// </div> 