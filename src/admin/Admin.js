import { useContext } from "react";
import { AuthContext } from "../context/Authenticate";
import AdminTop from "./AdminTop";
import CreateQuestion from "./CreateQuestion";
import { BrowserRouter as Router, Switch, Routes, Route, Link, Navigate} from "react-router-dom";


export default function Admin(){

    const {authUser} = useContext(AuthContext)

    return (
        <div className="w-full  md:w-10/12">
            {/* <Router>   */}
                    <Routes>
                        <Route path='/admin/questions/create' element={<CreateQuestion />} />
                        {/* <Route path='/account/login' element={<LoginPage />} />
                        <Route  path='/quiz' element={<Quiz />} />
                        <Route  path='/test' element={<Exam />} />
                        <Route path='/question' element={<AskQuestion />} />
                        <Route path='/progress' element={<Progress />} />
                        <Route path='/error' element={<Error />} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/users/:id' element={<Apps />} />
                        <Route  path='/' element={<Home />} /> */}
                    </Routes>    

            {/* </Router> */}
           {/* <div className="flex justify-between h-14 py-3 px-6 text-lg font-medium border-box border-b-2 bg-white sticky top-0 shadow-md">
                    <h2 className="">ADMIN</h2>
                    <p>{authUser['name']}</p>
            </div> */}
           <AdminTop type="Add question"/>
            {/* <CreateQuestion /> */}
        </div>
    )
}