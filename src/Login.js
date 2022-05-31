import { useContext } from "react"
import AuthContextProvider from "./context.js/Authenticate"
import {AuthContext} from "./context.js/Authenticate"




export default function LoginPage(){

    // const [inputVal , setInputVal] = useState({
    //     'username': '',
    //     'password': ''
    // })

    // function handleChange(e){
    //     console.log(e.target)
    //     setInputVal(prev => {
    //         return {
    //             ...prev,

    //         }
    //     })
    // }
    const {user, loginUser }  = useContext(AuthContext)

    return (
       

        <form className="md:w-4/12 md:mx-auto py-20" onSubmit={loginUser}>
                <div>
                    <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-700">username </label>
                    <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 outline-none text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
                </div>
        
                <div class="mb-6">
                    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-700 ">Password</label>
                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 outline-none text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
                <input type="submit" value="Sign In" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center cursor-pointer" />
                <div class="w-full flex justify-evenly">
                    <p className="mt-2 text-sm font-medium">Forget Password ? <a href="#" class="text-blue-600 hover:underline">Retrieve</a></p>
                    <p className="mt-2 text-sm font-medium">Need an account ? <a href="/account/register" class="text-blue-600 hover:underline">Sign Up</a></p>

                </div>
        </form>
    
    )
}