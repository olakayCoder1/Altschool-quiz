import { useContext } from "react"
import { AuthContext } from "./context/Authenticate"





export default function Error(){
    const {user,open,setOpen} = useContext(AuthContext);
    console.log(user)
    return (
        <div className="w-full md:w-10/12">
             <div className = "flex gap-6 h-14 p-3 md:hidden lg:hidden border-box border-b-2 bg-white sticky top-0 " >
             {open ? <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-xmark"></i></span> : <span onClick={()=> setOpen(!open)}><i class="fa-solid fa-bars"></i></span>} <h2 className=' md:hidden lg:inline-block'>Altschool Quiz </h2>
            </ div >
            <div className="hidden md:block h-14 p-3 text-lg font-medium border-box border-b-2 bg-white sticky top-0 shadow-md">
                    <h2 className=" float-right mx-12">REPORT ERROR</h2>
            </div>
            <div>
                <h3 className=" px-6 py-6 text-gray-700">Headings must have content and the content must be accessible by a screen reader</h3>
            </div>
            <form className=" px-6 py-6">
                {/* <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-700 ">Name</label>
                <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="text" id="input-group-1" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Olanrewaju Kabeer" required />
                </div>


                <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-700 ">Your Email</label>
                <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="email" id="input-group-1" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@example.com" required/>
                </div>
                 */}
                <div className=" mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-700 ">Your Name</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 outline-none text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required/>
                </div>


                <div className=" mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-700 ">Your Email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 outline-none text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@example.com" required/>
                </div>

                
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Error description</label>
                <textarea id="message" rows="4" className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Type description...." required></textarea>



                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800 mt-4">
                    Send message
                </button>
        </form>
        </div>
    )

}