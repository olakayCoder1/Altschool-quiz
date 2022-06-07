import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { createContext , useState } from "react";




export const AuthContext = createContext();

 


export default function AuthContextProvider({children}){

    // NAV TOGGLING CONTEXT
    const [ open , setOpen] = useState(false)
    const [authToken , setAuthToken ] = useState(()=> JSON.parse(localStorage.getItem('authToken'))|| null)
    const [ authUser , setAuthUser ] = useState(()=> JSON.parse(localStorage.getItem('authUser'))|| null);
    const [ Loading , setLoading ] = useState(true);


    const registerUser = async (e) => {
        e.preventDefault();
        if ( e.target.password.value === e.target.confirm_password.value){
            console.log(e.target.track.value)
            await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({'username': e.target.username.value ,'email': e.target.email.value, 'track': e.target.track.value, 'password': e.target.password.value})
                
            })
            .then( res => res.json())
            .then(data => {
                 window.location['href'] = 'http://localhost:3000/account/login';
                })
                .catch(err => console.log(err.status))
            }
        }        

    const loginUser = async (e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({'username': e.target.username.value , 'password': e.target.password.value})
            
        })
        .then( res => res.json())
        .then(data => {
            if ( data.access){
                console.log(jwt_decode(data.access));
                localStorage.setItem('authToken', JSON.stringify(data))
                setAuthToken(data)
                localStorage.setItem('authUser', JSON.stringify(jwt_decode(data.access)))
                setAuthUser(jwt_decode(data.access));
                 window.location['href'] = 'http://localhost:3000/';      
            }
        })
        .catch(error => console.log(error))    
    } 
    
    
    const logoutUser = () => {
    
        // let ask = window.confirm('Are you sure you want to logout?');  
        // if (ask){
            localStorage.removeItem('authUser');
            localStorage.removeItem('authToken');
            window.location['href'] = 'http://localhost:3000/'
        // }
        

    }


   

    // const refreshToken = async () => {

    //     console.log('REFRESHING AUTH USER TOKEN')
    //     const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
    //         method: 'POST',
    //         headers : {
    //             'content-type' : 'application/json',
    //         },
    //         body : JSON.stringify({'refresh': authToken?.refresh })
            
    //     })
    //     const data = await response.json()
    //     if(response.status === 200){
    //         setAuthToken(data)
    //         setAuthUser(jwt_decode(data.access))
    //         localStorage.setItem('authToken', JSON.stringify(data))
    //     }else{
    //         logoutUser()
    //     }
    //      if(Loading){
    //         setLoading(false)
    //      }
        
    // }


    // useEffect(()=> {

    //     if(Loading){
    //         refreshToken()
    //     }

    //     let fourMinutes = 1000 * 60 * 4

    //     let interval =  setInterval(()=> {
    //         if(authToken){
    //            refreshToken()
    //         }
    //     }, fourMinutes)
    //     return ()=> clearInterval(interval)

    // }, [authToken, Loading])

    const value  = { authUser , authToken , loginUser , registerUser ,logoutUser , setOpen , open  }
    console.log(Loading)
    
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}










export const showNavContext = createContext