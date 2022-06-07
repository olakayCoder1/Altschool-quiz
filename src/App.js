import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Routes, Route, Link, Navigate} from "react-router-dom";
// import './App.css';
import Exam from './quiz/Exam';
import Quiz from './quiz/Quiz';
import Nav from './layout/Nav';
import Progress from './component/Progress';
import AskQuestion from './component/AskQuestion';
import Home from './component/Home';
import Error from './component/Error';
import Register from './userAuth/Register';
import LoginPage from './userAuth/Login';
import AuthContextProvider from './context/Authenticate';
import Admin from './admin/Admin';
import CreateQuestion from './admin/CreateQuestion';
import UserList from './admin/UserList';
import QuizCategory from './admin/QuizCategory';







const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/account/login" replace />;
  }

  return children;
};

function App() {

  
  return (
    <AuthContextProvider>
    <Router>  
      <div className=' flex relative'>
          <Nav />
          <Routes>
            <Route path='/account/register' element={<Register />} />
            <Route path='/account/login' element={<LoginPage />} />
             <Route  path='/quiz' element={<Quiz />} />
             {/* <Route  path='/quiz/random' element={<Exam />} /> */}
             <Route  path='/quiz/:category' element={<Exam />} />
             <Route path='/question' element={<AskQuestion />} />
             <Route path='/progress' element={<Progress />} />
             <Route path='/error' element={<Error />} />
             <Route path='/admin/*' element={<Admin />} />
             <Route path='/admin/questions/create' element={<CreateQuestion />} />
             <Route path='/admin/users' element={<UserList />} />
             <Route path='/admin/category' element={<QuizCategory />} />
             {/* <Route path='/*' element={<Apps />} /> */}
             <Route  path='/' element={<Home />} />
           </Routes>    
           {/* <NavBar /> */}
           
       </div>
     </Router>
   </AuthContextProvider>
  
  );
}





 function Apps() {
  const [tripType, setTripType] = useState({});

  function handleAnswer(arg){
    console.log(arg)
    setTripType("oneWay");
  }

  console.log(tripType)
  return (
    <div className="App">
      <h1>Radio Button Demo.</h1>
      <div>
        <div onClick={() => { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question1':'oneWay'
            }       
            )          
          })
        }} >
          <input  type="radio"  value={tripType['question1']}  name="tripType" checked={tripType['question1'] === "oneWay"} />
          One-way
        </div>
        <div  onClick={() =>  { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question1':'roundTrip'
            }
              
            )
            
          })
        }}  >
          <input  type="radio" value={tripType['question1']}  name="tripType2"  checked={tripType['question1'] === "roundTrip"} />
          Round-Trip
        </div>
        <div onClick={() =>  { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question1':'multiCity'
            }
              
            )
            
          })
        }} >
          <input type="radio" value={tripType['question1']} name="tripType" checked={tripType['question1'] === "multiCity"}/>
          Multi-City
        </div>
      </div>




      <div>
        <div onClick={() => { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question2':'oneWay'
            }       
            )          
          })
        }} >
          <input  type="radio"  value={tripType['question2']}  name="tripType2" checked={tripType['question2'] == "oneWay"} />
          One-way
        </div>
        <div  onClick={() =>  { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question2':'roundTrip'
            }
              
            )
            
          })
        }}  >
          <input  type="radio" value={tripType['question2']}  name="tripType2"  checked={tripType['question2'] == "roundTrip"} />
          Round-Trip
        </div>
        <div onClick={() =>  { 
          setTripType( prev => {
            return ( {
              ...prev,
              'question2':'multiCity'
            }
              
            )
            
          })
        }} >
          <input type="radio" value={tripType['question2']} name="tripType2" checked={tripType['question2'] == "multiCity"}/>
          Multi-City
        </div>
      </div>
    </div>
  );
}


export default App;