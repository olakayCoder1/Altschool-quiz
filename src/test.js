


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