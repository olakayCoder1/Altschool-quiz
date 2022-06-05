import React, { useContext } from 'react'
import { History } from 'history'
import { AuthContext } from '../context/Authenticate'





export default function AdminTop(props) {

  const {open , setOpen } = useContext(AuthContext)
  return (
      <>
        <div className = "flex justify-between h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
                <div className='flex gap-6'>
                {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
                </div>
                <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>Register</p>
            </ div >
      <div className=" flex flex-col md:flex-row items-center gap-4 mt-12 px-2">
        
        <div class="py-4 pl-4 h-32 w-full md:w-2/6 max-w-sm bg-gray-300 rounded-xl border border-gray-300 shadow-md  hover:bg-gray-400">
          <h5 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-600">2021 Questions</h5>
          <a href="/admin/questions/create" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            {props.type}
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
        <div class="py-4 pl-4 h-32 w-full md:w-2/6 max-w-sm bg-gray-300 rounded-xl border border-gray-300 shadow-md  hover:bg-gray-400">
          <h5 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-600">2021 Users</h5>
          <a href="/admin/users" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            View 
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
        <div class="py-4 pl-4 h-32 w-full sm:px-6 md:w-2/6 max-w-sm bg-gray-300 rounded-xl border border-gray-300 shadow-md  hover:bg-gray-400">
          <h5 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-600">20 Categories</h5>
          <a href="/admin/category" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            View
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
      
      </>
        
  )
}