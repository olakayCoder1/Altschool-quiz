import { useContext } from "react"
import { AuthContext } from "./context.js/Authenticate"


export default function Nav() {

    const {logoutUser, authUser } = useContext(AuthContext);

    return ( 
        <nav className = "hidden md:flex md:flex-col md:justify-between md:h-screen md:w-3/12 md:bg-gray-700 md:border-r-2 md:sticky md:top-0" >
            <div>
                <div className = " h-14 p-3 lg:text-lg lg:font-medium border-box border-b-2 bg-white" >
                    < h2 > olakayCoder1 Altschool Quiz </h2> 
                </ div > 
                <div className = " w-full" >
                    <a href = "/" className = " active:bg-red-400" >
                        <p className = " px-6 py-3 w-full text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            < i class = "fa-solid fa-house" ></i><span className=" pl-4">Home</span >
                        </p>
                    </a >
                    { authUser &&
                    <a href = "/quiz" className = " active:bg-red-400" > 
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                        < i class = "fa-solid fa-graduation-cap" > </i><span className=" pl-4">Quiz</span > 
                        </p>
                    </a >
                    }
                    {authUser &&
                     <a href = "/progress" className = " active:bg-red-400" >
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                            <i class = "fa-solid fa-list" > </i><span className=" pl-4">Leaderboard</span > 
                        </p>
                    </a >
                    }
                    {authUser && 
                    <a href = "/test" className = " active:bg-red-400" > 
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                            <i class = "fas fa-random" > </i><span className=" pl-4">Random questions</span > 
                        </p>
                    </a >
                     }
                    
                    
                    <a href = "/question" className = " active:bg-red-400" >
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            < i class = "fa fa-question-circle" aria-hidden = "true" > </i><span className=" pl-4">Ask question</span > 
                        </p>
                    </a >
                    <a href = "/error" className = " active:bg-red-400" >
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            < i class = "fa-solid fa-triangle-exclamation" > </i><span className=" pl-4">Report Error </span >
                        </p>
                    </a >
                    <a href = "/error" className = " active:bg-red-400" >
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            < i class = "fa-solid fa-circle-info" > </i><span className=" pl-4">About</span > 
                        </p>
                    </a >
                    {!authUser && 
                    <a href = "/account/register" className = " active:bg-red-400" >
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            < i class = "fa-solid fa-circle-info" > </i><span className=" pl-4">Sign Up</span > 
                        </p>
                    </a >
                    }
                    
                    {!authUser && 
                    <a href = "/account/login" className = " active:bg-red-400" >
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            < i class = "fa-solid fa-circle-info" > </i><span className=" pl-4">Sign In</span > 
                        </p>
                    </a >
                    }
                    {authUser && 
                     <p onClick={logoutUser} className = " active:bg-red-400" >
                        <p className = " px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            < i class = "fa-solid fa-circle-info" > </i><span className=" pl-4">Sign out</span > 
                        </p>
                    </p >
                    }
                   
                </div> 
            </div > 
            <div >
                <div className = " text-center text-xs font-normal text-white" >
                    <h2 > Follow me </h2> 
                    <div className = " text-center text-xl text-white" >
                        < a href = "https://www.github.com/olakayCoder1" target = "_blank" className = " px-2" >
                            <i class = "fab fa-github" > 
                            </i>
                        </a >
                        <a href = "https://www.freecodecamp.org/" target = "_blank" className = " px-2" >
                            <i class = "fab fa-free-code-camp" ></i>
                        </a >
                        <a href = "https://www.twitter.com/olakayCoder1" target = "_blank" className = " px-2" >
                            <i class = "fab fa-twitter" ></i>
                        </a >
                        < a href = "https://www.facebook.com/kabiru.olakay"  target = "_blank"  className = " px-2" >
                            <i class = "fab fa-facebook" > </i>
                        </a >
                        <a href = "https://www.linkedin.com/" target = "_blank" className = " px-2" > 
                            <i class = "fab fa-linkedin" ></i>
                        </a >
                    </div>
                </div > 
                <p className = " text-xs font-normal text-white py-3 text-center" > Copyright @2020 olakayCoder1 </p> 
            </div > 
        </nav>
    )
}