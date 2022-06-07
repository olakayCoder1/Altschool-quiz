import React, { useContext } from 'react'
import { AuthContext } from '../context/Authenticate'
import QuizCategoryItem from './QuizCategoryItem'


export default function QuizCategory() {
    const {authUser, open , setOpen , authToken, logoutUser} = useContext(AuthContext)
    const [category , setCategory] = React.useState(null)

    React.useLayoutEffect(()=>{
        if(!authUser['staff']){
            window.location['href'] = 'http://localhost:3000/';
        }
    },[])
    
    React.useEffect(()=>{
        async function fetchUsers(){
         const response = await fetch('http://127.0.0.1:8000/api/users/', {
             method : 'GET',
             headers : {
                 'Content-Type': 'application/json',
                 'Authorization' : 'Bearer '+ String(authToken.access)
             }
         })
         const data = await response.json()

         if(response.status === 200){
             setCategory(data)
         }else if( response.statusText === 'Unauthorized'){
             logoutUser()
         }

        }
       
        fetchUsers()
     },[])


  return (
    <div className="w-full md:w-full">
        <div className = "flex justify-between h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
                <div className='flex gap-6'>
                {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
                </div>
                <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>Category</p>
            </ div >
            <div className="hidden md:flex justify-between h-14 py-3 px-6 text-lg font-medium border-box border-b-2 bg-white sticky top-0 shadow-md">
                    <h2 className="">ADMIN | CATEGORIES</h2>
                    <p>{authUser['name']}</p>
            </div>
            <div>
                <h3 className=" px-6 py-6 text-gray-700">Headings must have content and the content must be accessible by a screen reader</h3>
            </div>
            <div className=" overflow-auto overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 overflow-auto overflow-x-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name 
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total question
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date Created
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>                       
                        </tr>
                    </thead>
                    <tbody>
                    {category  ?  category.map( ( user , index ) => {
                        return <QuizCategoryItem key ={index} email = {user['email']} username={user['username']} track={user['track']}  />
                    }) : <h1>Loading.....</h1>}
                       
                    </tbody>
                </table>
            </div>
    </div>
  )
}
