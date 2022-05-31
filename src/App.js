import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Routes, Route, Link, Navigate} from "react-router-dom";
// import './App.css';
import Exam from './Exam';
import Quiz from './Quiz';
import Nav from './Nav';
import Progress from './Progress';
import AskQuestion from './AskQuestion';
import Home from './Home';
import Error from './Error';
import Register from './Register';
import LoginPage from './Login';
import AuthContextProvider from './context.js/Authenticate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
      <div className=' flex'>
          <Nav />
          <Routes>
            <Route path='/account/register' element={<Register />} />
            <Route path='/account/login' element={<LoginPage />} />
            {/* <Route  path="/quiz" element={
            // <ProtectedRoute user={user}> <Quiz /> </ProtectedRoute> }  /> */}
            <Route  path='/quiz' element={<Quiz />} />
            <Route  path='/test' element={<Exam />} />
            <Route path='/question' element={<AskQuestion />} />
            <Route path='/progress' element={<Progress />} />
            <Route path='/error' element={<Error />} />
            <Route path='/users/:id' element={<Apps />} />
            <Route  path='/' element={<Home />} />
          </Routes>    
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