import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const UserContextProvider = ({children}) =>{

    const [currentUser, setCurrentUser] = useState({})


    const userLogin = async (credentials) =>{
        try{
           const res = await axios({
                method: 'post',
                url: 'https://datamansys.herokuapp.com/api/v1/doctor/login-doctor',
                data: {
                    email: credentials.email,
                    password: credentials.password
                }
            });
            console.log('res', res.data.data.user)
            setCurrentUser(res.data.data.user)
        } catch(err) {
            console.log('login error', err)
        }
    }

    return(
        <UserContext.Provider value={{
            currentUser,
            userLogin : userLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}