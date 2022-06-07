import { useContext, useState } from "react"
import { AuthContext } from "../context/Authenticate"


export default function Nav() {

    const {logoutUser, authUser , open ,setOpen } = useContext(AuthContext);
    const [staff, setStaff] = useState((authUser ?authUser['staff'] : null));

    return (
        <>
        <div className={`${open ? "md:w-2/6" : "md:w-20"} hidden duration-500 h-screen md:block lg:block lg:w-72 md:sticky md:top-0`}>
            <nav className = "hidden md:flex md:flex-col md:justify-between md:h-screen  md:bg-gray-700 md:border-r-2 md:sticky md:top-0 w-full" >
                <div>
                    <div className = "flex h-14 p-3 lg:text-lg lg:font-medium border-box border-b-2 bg-white" >
                        <span onClick={()=> setOpen(!open)} className=" lg:hidden"><i class="fa-solid fa-bars"></i></span>{open && <h2 className=' ml-5 lg:hidden'>Altschool Quiz </h2>}<h2 className='hidden ml-5 lg:inline-block'>Altschool Quiz </h2>
                    </ div >
                   
                    <div className = " w-full" >
                        
                        <a href = "/" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 w-full text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-house" ></i>{open && <span className=" pl-4 lg:hidden">Home</span >}<span className="hidden pl-4 lg:inline-block">Home</span >
                            </p>
                        </a >
                        {authUser && staff &&
                        <a href = "/admin" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                            <i class="fa-solid fa-user"></i><i class="fa-solid fa-card-diamond"></i>{open && <span className=" pl-4  lg:hidden">Admin</span >}<span className="hidden pl-4  lg:inline-block">Admin</span >
                            </p>
                        </a >}
                        {authUser && !staff && 
                        <a href = "/quiz" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                            < i class = "fa-solid fa-graduation-cap" > </i>{open && <span className=" pl-4  lg:hidden">Quiz</span >}<span className="hidden pl-4  lg:inline-block">Quiz</span >
                            </p>
                        </a >}
                        {authUser &&
                        <a href = "/progress" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                                <i class = "fa-solid fa-list" > </i>{open && <span className=" pl-4 lg:hidden">Leadersboard</span >}<span className="hidden pl-4 lg:inline-block">Leadersboard</span > 
                            </p>
                        </a >}
                        {authUser && !staff && 
                        <a href = "/quiz/random" className = " active:bg-red-400" > 
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                                <i class = "fas fa-random" > </i>{open && <span className=" pl-4  lg:hidden">Random questions</span >}<span className="hidden pl-4  lg:inline-block">Random Questions</span >
                            </p>
                        </a >}
                       
                
                        {authUser && !staff && 
                        <a href = "/question" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa fa-question-circle" aria-hidden = "true" > </i>{open && <span className=" pl-4  lg:hidden">Need Help</span >}<span className="hidden pl-4  lg:inline-block">Need Help</span >
                            </p>
                        </a >}
                        {authUser &&
                        <a href = "/error" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-triangle-exclamation" > </i>{open && <span className=" pl-4  lg:hidden">Report Error </span >}<span className="hidden pl-4  lg:inline-block">Report Error </span >
                            </p>
                        </a >}
                        
                        <a href = "/error" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                <i class="fa-solid fa-video"></i>{open && <span className=" pl-4  lg:hidden">Class Record</span >}<span className="hidden pl-4  lg:inline-block">Class Record</span >
                            </p>
                        </a >
                        <a href = "/error" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                < i class = "fa-solid fa-circle-info" > </i>{open && <span className=" pl-4  lg:hidden">About</span >}<span className="hidden pl-4  lg:inline-block">About</span >
                            </p>
                        </a >
                        {!authUser &&
                        <a href = "/account/register" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-user-plus"></i>{open && <span className=" pl-4  lg:hidden">Sign Up</span >}<span className="hidden pl-4  lg:inline-block">Sign Up</span >
                            </p>
                        </a >}
                
                        {!authUser &&
                        <a href = "/account/login" className = " active:bg-red-400" >
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-right-to-bracket"></i>{open && <span className=" pl-4 lg:hidden">Sign In</span >}<span className="hidden pl-4 lg:inline-block">Sign In</span >
                            </p>
                        </a >}
                        {authUser &&
                        <div className = " active:bg-red-400"  onClick={logoutUser}>
                            <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                            <i class="fa-solid fa-right-from-bracket"></i>{open && <span className=" pl-4 lg:hidden">Sign out</span >}<span className="hidden pl-4 lg:inline-block">Sign out</span >
                            </p>
                        </div >}
                
                    </div> 
                </div >  
                <div className=''>
                    <div className = " text-center text-xs font-normal text-white" >
                        <h2 > Follow me </h2> 
                        <div className = " text-center text-sm text-white" >
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
                    <p className = " text-xs font-normal text-white py-1 text-center" > Copyright @2020 olakayCoder1 </p> 
                </div >
            </nav>
        </div>
    
    
    
    
                {/* MOBILE VIEWBAR */}
                {/* MOBILE VIEWBAR */}
                {/* MOBILE VIEWBAR */}
                {/* className="hidden duration-500 h-screen bg-gray-700 md:block md:w-20 lg:block lg:w-72 md:sticky md:top-0" */}
                {/* duration-500 h-screen bg-gray-700 md:hidden lg:hidden absolute top-0 */}
                {/* MOBILE VIEWBAR */}
        {open &&
        <div className={`${open ? "w-64" : "w-10"}block  justify-between duration-500 h-screen bg-gray-700 md:hidden lg:hidden absolute top-0`}>
            <div className="flex justify-between">
                <nav className = {`fixed top-0 bottom-0 duration-500 bg-gray-700 flex flex-col justify-between ${open ? "w-64" : "w-0"}`} >
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
                            {authUser && !staff && 
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
                            {authUser && !staff && 
                            <a href = "/quiz/random" className = " active:bg-red-400" > 
                                <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                                    <i class = "fas fa-random" > </i>{open && <span className=" pl-4 md:hidden lg:inline-block">Random questions</span >}
                                </p>
                            </a >}
                            {authUser && staff &&
                            <a href = "/admin" className = " active:bg-red-400" > 
                                <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" > 
                                <i class="fa-solid fa-user"></i><i class="fa-solid fa-card-diamond"></i>{open && <span className=" pl-4 md:hidden lg:inline-block">Admin</span >} 
                                </p>
                            </a >}
                    
                            {authUser && !staff &&
                            <a href = "/question" className = " active:bg-red-400" >
                                <p className = " px-6 py-3 text-sm text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >
                                    < i class = "fa fa-question-circle" aria-hidden = "true" > </i>{open && <span className=" pl-4 md:hidden lg:inline-block">Need help</span >} 
                                </p>
                            </a >}
                            {authUser && !staff && 
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
                            <div className = " active:bg-red-400" onClick={logoutUser} >
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
        </div>
        }
        </>  
      )
    }
    