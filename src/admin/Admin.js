import React , { useContext  } from "react";
import { AuthContext } from "../context/Authenticate";
import AdminTop from "./AdminTop";
import CreateQuestion from "./CreateQuestion";
import { BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom";


export default function Admin(){

    const {authUser} = useContext(AuthContext)

    React.useLayoutEffect(()=>{
        if(!authUser['staff']){
            window.location['href'] = 'http://localhost:3000/';
        }
    },[])

    return (
        <div className="w-full md:full lg:w-10/12">
            <Routes>
                <Route path='/admin/questions/create' element={<CreateQuestion />} />
                
            </Routes>       
           <AdminTop type="Add question"/>
        </div>
    )
}