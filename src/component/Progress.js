import { useContext } from "react"
import React from "react"
import { AuthContext } from "../context/Authenticate"
import LeadersboardUser from "./LeadersboardUser"



export default function Progress(){

    const {open, setOpen , authUser , authToken , logoutUser} = useContext(AuthContext)
    const [users, setUsers] = React.useState(null)


    // React.useEffect(()=>{
    //     async function fetchUsers(){
    //      await fetch('http://127.0.0.1:8000/api/users/', {
    //          method : 'GET',
    //          headers : {
    //              'Content-Type': 'application/json',
    //              'Authorization' : 'Bearer '+ String(authToken.access)
    //          }
    //      }).then(res => res.json())
    //      .then(data => {
    //          setUsers(data) 
    //      })
    //     }
    //      fetchUsers()
       
    //  },[])




    React.useEffect(()=>{
        async function fetchUsers(){
        const response = await fetch('http://127.0.0.1:8000/api/users/', {
             method : 'GET',
             headers : {
                 'Content-Type': 'application/json',
                 'Authorization' : 'Bearer '+ String(authToken.access)
             }})
            const data = await response.json()

            if(response.status === 200){
                setUsers(data)
            }else if( response.statusText === 'Unauthorized'){
                logoutUser()
            }
        
            }

            fetchUsers()
     },[])
    return (
    <div className="w-full md:full lg:w-10/12">
        <div className = "flex justify-between h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
            <div className='flex gap-6'>
            {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
            </div>
            <p className=' text-red-600 md:font-bold md:text-2xl lg:font-bold lg:text-2xl'>Leadersboard</p>
        </ div >
        <div className="hidden md:flex justify-between h-14 py-3 px-6 text-lg font-medium border-box border-b-2 bg-white sticky top-0 shadow-md">
                <h2 className="">ADMIN | LEADERSBOARD</h2>
                <p>{authUser['name']}</p>
        </div>
        <div>
            <h3 className=" px-6 py-6 text-gray-700">Current registerd users</h3>
        </div>
        <div className=" overflow-auto ">
            <table className="w-full text-sm text-left text-gray-500 overflow-auto overflow-x-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quiz category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Review
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Score
                            </th>                       
                        </tr>
                    </thead>
                    <tbody>
                    {users ?  users.map( ( user , index ) => {
                        return <LeadersboardUser key ={index} email = {user['email']} username={user['username']} track={user['track']}  />
                    }) : <h1>Loading.....</h1>}
                       
                    </tbody>
                </table>
            </div>
    </div>
    )
}