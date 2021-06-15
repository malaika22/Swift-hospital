import React, { createContext, useEffect, useState } from 'react'
import {setUserSession, getToken, removeUserSession} from '../customHooks/useToken'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({children}) =>{

    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory()
    useEffect(()=>{
        console.log('get token', getToken())
        if(getToken()[0] && getToken()[1]){
            const [storageData] = getToken()
            console.log("session data", storageData)
            userLogin(storageData)
        }
    }, [])

    const userLogin = async (credentials) =>{
        try{
           const res = await axios({
                method: 'post',
                url: 'https://datamansys.herokuapp.com/api/v1/doctor/login-doctor',
                data: {
                    email: credentials.email,
                    password: credentials.password
                },
                withCredentials: true
            });
            if(res.status === 200){
                console.log("in success status", res.data.data.user)
                setCurrentUser(res.data.data.user)
                setUserSession(credentials , true)
                //history.push("/dashboard")
            }
        } catch(err) {
            console.log('login error', err)
        }
    }

    const userSignup = async (credentials) =>{
        try{
            const res = await axios({
                method: "post" ,
                url : "https://datamansys.herokuapp.com/api/v1/doctor/",
                data : {
                    name : credentials.name,
                    email : credentials.email,
                    password : credentials.password,
                    passwordConfirm : credentials.passwordConfirm,
                    experience : credentials.experience,
                    speciality : credentials.speciality
                } ,
                withCredentials : true
            })
            console.log('signup res', res.data.data.user)
            setCurrentUser(res.data.data.user)
        } catch(err) {
            console.log('signup error', err)
        }
    }

    const userLogout = async () =>{
            try{
                const res = await axios.get("https://datamansys.herokuapp.com/api/v1/doctor/logout-doctor")
                    console.log('res', res)
                    console.log(typeof(res.data.status))
                if(res.data.status==="succesfully loggedout") {
                    console.log("in condition")
                    removeUserSession()
                    setCurrentUser({})
                    //history.push("/login")
                }
            } catch(err) {
                console.log("sign out error", err)
            }
    }

    return(
        <UserContext.Provider value={{
            currentUser,
            userLogin : userLogin,
            userSignup: userSignup ,
            userLogout : userLogout
        }}>
            {children}
        </UserContext.Provider>
    )
}