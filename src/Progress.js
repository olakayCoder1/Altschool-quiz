import { useContext } from "react"
import { AuthContext } from "./context/Authenticate"



export default function Progress(){

    const {open, setOpen} = useContext(AuthContext)
    return (
        <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg md:w-10/12">
             <div className = "flex gap-6 h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
             {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
            </ div >
            <div className="hidden md:block h-14 p-3 text-lg font-medium border-box border-b-2 bg-white shadow-md">
                    <h2 className=" float-right mx-12">LEADERBOARD</h2>
            </div>
            <div>
                <h3 className=" px-6 py-6 text-gray-700">Headings must have content and the content must be accessible by a screen reader</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 overflow-auto overflow-x-auto -z-10">
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
                        <tr className="bg-white border-b hover:bg-gray-600 hover:text-white">
                            <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
                                Olatunji 
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
                                Week three questions
                            </th>
                            <td className="px-6 py-4">
                                25/08/2030
                            </td>
                            <td className="px-6 py-4">
                                Fair
                            </td>
                            <td className="px-6 py-4">
                                99%
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-600 hover:text-white">
                            <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
                                Abdul Mujeeb
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:bg-gray-600 hover:text-white">
                                Random  questions
                            </th>
                            <td className="px-6 py-4">
                                25/08/2030
                            </td>
                            <td className="px-6 py-4">
                                Excellent
                            </td>
                            <td className="px-6 py-4">
                                89%
                            </td>
                        </tr>
                        <tr className="bg-white  hover:bg-gray-600 hover:text-white">
                            <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
                                Badmus 
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:bg-gray-600 hover:text-white">
                                Random questions
                            </th>
                            <td className="px-6 py-4">
                                25/08/2030
                            </td>
                            <td className="px-6 py-4">
                                Good
                            </td>
                            <td className="px-6 py-4">
                                79%
                            </td>
                            
                        </tr>
                        <tr className="bg-white  hover:bg-gray-600 hover:text-white">
                            <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
                                Samuel 
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:bg-gray-600 hover:text-white">
                                Random questions
                            </th>
                            <td className="px-6 py-4">
                                25/08/2030
                            </td>
                            <td className="px-6 py-4">
                                Good
                            </td>
                            <td className="px-6 py-4">
                                74%
                            </td>
                            
                        </tr>
                        <tr className="bg-white  hover:bg-gray-600 hover:text-white">
                            <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
                                Joseph
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:bg-gray-600 hover:text-white">
                                Random questions
                            </th>
                            <td className="px-6 py-4">
                                25/08/2030
                            </td>
                            <td className="px-6 py-4">
                                Good
                            </td>
                            <td className="px-6 py-4">
                                65%
                            </td>
                            
                        </tr>
                        <tr className="bg-white  hover:bg-gray-600 hover:text-white">
                            <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
                                Khalid 
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:bg-gray-600 hover:text-white">
                                Random questions
                            </th>
                            <td className="px-6 py-4">
                                25/08/2030
                            </td>
                            <td className="px-6 py-4">
                                Good
                            </td>
                            <td className="px-6 py-4">
                                59%
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}