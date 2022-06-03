import { useContext, useState } from "react"
import { AuthContext } from "./context/Authenticate"


export default function Nav() {

    const {logoutUser, authUser , open ,setOpen } = useContext(AuthContext);
    const [staff, setStaff] = useState((authUser ?authUser['staff'] : null));

    return (
        <>
        <div className={`hidden duration-500 h-screen bg-gray-700 md:block md:w-20 lg:block lg:w-72 md:sticky md:top-0`}>
            <nav className = "hidden md:flex md:flex-col md:justify-between md:h-screen  md:bg-gray-700 md:border-r-2 md:sticky md:top-0" >
                <div>
                    <div className = "flex h-14 p-3 lg:text-lg lg:font-medium border-box border-b-2 bg-white" >
                        <span><i class="fa-solid fa-bars"></i></span><h2 className=' ml-5 md:hidden lg:inline-block'>Altschool Quiz </h2>
                    </ div >
                   
                    <div className = " w-full" >
                        
                        <a href = "/" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 w-full text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-house" ></i><span className=" pl-4 md:hidden lg:inline-block">Home</span >
                            </p>
                        </a >
                        {authUser &&
                        <a href = "/quiz" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                            < i class = "fa-solid fa-graduation-cap" > </i><span className=" pl-4 md:hidden lg:inline-block">Quiz</span >
                            </p>
                        </a >}
                        {authUser &&
                        <a href = "/progress" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                                <i class = "fa-solid fa-list" > </i><span className=" pl-4 md:hidden lg:inline-block">Leadersboard</span > 
                            </p>
                        </a >}
                        {authUser &&
                        <a href = "/quiz/random" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                                <i class = "fas fa-random" > </i><span className=" pl-4 md:hidden lg:inline-block">Random questions</span >
                            </p>
                        </a >}
                        {authUser &&
                        <a href = "/admin" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                            <i class="fa-solid fa-user"></i><i class="fa-solid fa-card-diamond"></i><span className=" pl-4 md:hidden lg:inline-block">Admin</span >
                            </p>
                        </a >}
                
                        
                        <a href = "/question" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa fa-question-circle" aria-hidden = "true" > </i><span className=" pl-4 md:hidden lg:inline-block">Ask question</span >
                            </p>
                        </a >
                        {authUser &&
                        <a href = "/error" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-triangle-exclamation" > </i><span className=" pl-4 md:hidden lg:inline-block">Report Error </span >
                            </p>
                        </a >}
                        
                        <a href = "/error" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-circle-info" > </i><span className=" pl-4 md:hidden lg:inline-block">About</span >
                            </p>
                        </a >
                        {!authUser &&
                        <a href = "/account/register" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-user-plus"></i><span className=" pl-4 md:hidden lg:inline-block">Sign Up</span >
                            </p>
                        </a >}
                
                        {!authUser &&
                        <a href = "/account/login" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-right-to-bracket"></i><span className=" pl-4 md:hidden lg:inline-block">Sign In</span >
                            </p>
                        </a >}
                        {authUser &&
                        <div className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-right-from-bracket"></i><span className=" pl-4 md:hidden lg:inline-block">Sign out</span >
                            </p>
                        </div >}
                
                    </div> 
                </div > 
                <div className=' md:hidden lg:block'>
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
        </div>
    
    
    
    
                {/* MOBILE VIEWBAR */}
                {/* MOBILE VIEWBAR */}
                {/* MOBILE VIEWBAR */}
                {/* MOBILE VIEWBAR */}
        {open &&
        <div className="flex justify-between duration-500 h-screen bg-gray-700 md:hidden lg:hidden absolute top-0">
            <nav className = "fixed top-0 bottom-0 bg-gray-700" >
                <div>
                    <div className = "flex h-14 p-3 lg:text-lg lg:font-medium border-box border-b-2 bg-white" >
                       {!open && <h2 className=' ml-5 md:hidden lg:inline-block'>Altschool Quiz </h2> }
                    </ div >
                    <div className = "w-full" >
                        <a href = "/" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 w-full text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-house" ></i>{open && <span className=" pl-4 md:hidden lg:inline-block">Home</span >}
                            </p>
                        </a >
                        {authUser &&
                        <a href = "/quiz" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                            < i class = "fa-solid fa-graduation-cap" > </i>{open && <span className=" pl-4 md:hidden lg:inline-block">Quiz</span >} 
                            </p>
                        </a >}
                        {authUser &&
                        <a href = "/progress" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                                <i class = "fa-solid fa-list" > </i>{open && <span className=" pl-4 md:hidden lg:inline-block">Leadersboard</span >} 
                            </p>
                        </a >}
                        {authUser &&
                        <a href = "/quiz/random" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                                <i class = "fas fa-random" > </i>{open && <span className=" pl-4 md:hidden lg:inline-block">Random questions</span >}
                            </p>
                        </a >}
                        {authUser &&
                        <a href = "/admin" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                            <i class="fa-solid fa-user"></i><i class="fa-solid fa-card-diamond"></i>{open && <span className=" pl-4 md:hidden lg:inline-block">Admin</span >} 
                            </p>
                        </a >}
                
                        
                        <a href = "/question" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa fa-question-circle" aria-hidden = "true" > </i>{open && <span className=" pl-4 md:hidden lg:inline-block">Need help</span >} 
                            </p>
                        </a >
                        {authUser &&
                        <a href = "/error" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-triangle-exclamation" > </i>{open && <span className=" pl-4 md:hidden lg:inline-block">Report Error </span >}
                            </p>
                        </a >}
                        
                        <a href = "/error" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-circle-info" > </i>{open && <span className=" pl-4 md:hidden lg:inline-block">About</span >} 
                            </p>
                        </a >
                        {!authUser &&
                        <a href = "/account/register" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-user-plus"></i>{open && <span className=" pl-4 md:hidden lg:inline-block">Sign Up</span >} 
                            </p>
                        </a >}
                
                        {!authUser &&
                        <a href = "/account/login" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-right-to-bracket"></i>{open && <span className=" pl-4 md:hidden lg:inline-block">Sign In</span > }
                            </p>
                        </a >}
                        {authUser &&
                        <div className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-right-from-bracket"></i>{open && <span className=" pl-4 md:hidden lg:inline-block">Sign out</span >} 
                            </p>
                        </div >}
                
                    </div> 
                    
                </div> 
                <div className='block md:hidden lg:block'>
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
                    <p className = " text-xs font-normal text-white pt-3 text-center" > Copyright @2020 olakayCoder1 </p> 
                </div > 
                
            </nav>
        </div>
        }
        </>  
      )
    }
    