import { useContext, useState } from "react"
import { AuthContext } from "./context.js/Authenticate"






export default function Register(){

    const {registerUser}  = useContext(AuthContext);
    const [ userDetails , setUserDetails] = useState({})

    function handleChange(){

    }


    return (
        <form className="md:w-6/12 md:mx-auto py-20" onSubmit={registerUser}>
           
            <div class="grid gap-6 mb-6  lg:grid-cols-2">
                <div>
                    <label htmlFor="full_name" class="block mb-2 text-sm font-medium text-gray-700 ">Full name</label>
                    <input type="text" id="full_name" name="full_name" class="bg-gray-50 border border-gray-300 outline-none text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required/>
                </div>
                <div>
                    <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-700">username </label>
                    <input type="text" id="username" name="username" class="bg-gray-50 border border-gray-300 outline-none text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
                </div>
            </div>
            <div class="grid gap-6 mb-6  lg:grid-cols-2">
                <div class="mb-6">
                    <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-700">Email address</label>
                    <input type="email" id="email" name="email" class="bg-gray-50 border border-gray-300 outline-none text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required/>
                </div>
                <div>
                    <label htmlFor="track" class="block mb-2 text-sm font-medium text-gray-700">Track</label>
                    <select className='text-sm border outline-none p-2.5 rounded-lg bg-gray-50  text-gray-700 font-medium cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-full ' name="track" required>
                            <option value={null}></option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="cloud">Cloud</option>
                    </select>
                </div>
            </div>
            <div class="grid gap-6 mb-6  lg:grid-cols-2"> 
                <div class="mb-6">
                    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-700 ">Password</label>
                    <input type="password" id="password" name="password" class="bg-gray-50 border border-gray-300 outline-none text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div> 
                <div class="mb-6">
                    <label htmlFor="confirm_password" class="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                    <input type="password" id="confirm_password" name="confirm_password" class="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
                </div>
            </div> 
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                </div>
                <label htmlFor="remember" class="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" class="text-blue-600 hover:underline ">terms and conditions</a>.</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Sign Up</button>
            <p className="mt-2 text-sm font-medium">Already have an account ? <a href="/account/login" class="text-blue-600 hover:underline">Sign In</a></p>
        </form>
    )
}