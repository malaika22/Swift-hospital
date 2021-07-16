import React, { createContext, useEffect, useState } from 'react'
import {setUserSession, getToken, removeUserSession} from '../customHooks/useToken'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom';
import { Result } from 'antd';

export const UserContext = createContext();

export const UserContextProvider = ({children}) =>{

    const [currentUser, setCurrentUser] = useState({})
    const [docPatients , setDocPatients] = useState([])
    const [sessionUser , setSessionUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [adminDocs, setAdminDocs] = useState([])
    const [adminPatients , setAdminPatients] = useState([])
    const [adminPatient, setAdminPatient] = useState({})
    //const [role, setRole] = useState('')
    const history = useHistory()
    
    useEffect(()=>{
        setLoading(true)
    },[currentUser])
    useEffect(()=>{
        console.log('get token', getToken())
        if(getToken()[0] && getToken()[1]){
            const [storageData] = getToken()
            console.log('in codition',currentUser, storageData)
            if(storageData.role==='doctor'){
                console.log('storage role', storageData.role)
                userLogin({
                    email: storageData.email,
                    password: storageData.password
                })
            } else if(storageData.role==="admin"){
                adminLogin({
                    email: storageData.email,
                    password: storageData.password
                })
            }
        } else{
            //setLoading('no user')
            history.push("/login")
        }
    }, [])

    const userLogin = async (credentials) =>{
         history.push("/")
         console.log('credentials login', credentials)
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
                setUserSession({
                    ...credentials,
                    ...res.data.data.user
                } , true)
                getDoctorPatients()
                setLoading(false)  
            }
        } catch(err) {
            console.log('login error', err)
            setLoading(true)
            history.push("/login")
        }
    }

    const userSignup = async (credentials) =>{
        console.log('signup credentials', credentials)
        const {email, password} = credentials
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
            console.log('signup res', res.data.data.doctor)
            setUserSession({
                email , password
            }, true)
            setCurrentUser(res.data.data.doctor)
            history.push("/")
        } catch(err) {
            console.log('signup error', err)
        }
    }

    const userLogout = async () =>{
        console.log('user logout')
        setLoading(true)
            try{
                const res = await axios.get("https://datamansys.herokuapp.com/api/v1/doctor/logout-doctor")
                    console.log('res', res)
                    console.log(typeof(res.data.status))
                if(res.data.status==="succesfully loggedout") {
                    console.log("in condition")
                    removeUserSession()
                    setCurrentUser({})
                    setLoading(false)
                    history.push("/login")
                }
            } catch(err) {
                console.log("sign out error", err)
            }
    }

    const getDoctorPatients = async () =>{
        try{
            const res = await axios.get("https://datamansys.herokuapp.com/api/v1/doctor/get-my-pateints", {
                withCredentials: true
            })
            setDocPatients([...res.data.patients])
            console.log(res.data.patients)
        } catch(err) {
            console.log('patient error' , err)
        }
    }

    // ###################### Admin Context ###############################3

    const adminLogin = async (credentials) => {
        console.log('in admin login')
        history.push("/")
        //setLoading(true)
        //console.log('admin login', loading)
        try {
            const res = await axios({
                method: 'post',
                url: 'https://datamansys.herokuapp.com/api/v1/admin/login-admin',
                data: {
                    email: credentials.email,
                    password: credentials.password
                },
                withCredentials: true
            });
            if (res.status === 200) {
                console.log("in success status", res.data.data.user)
                setCurrentUser(res.data.data.user)
                setUserSession({
                    ...credentials,
                    ...res.data.data.user
                } , true)
                getAdminDoctors()
                getAdminPatients()
                setLoading(false)
            }
        } catch (err) {
            console.log('login error', err)
            setLoading(true)
            history.push("/login")
        }
    }

    const adminLogout = async () =>{
        console.log('user logout')
        setLoading(true)
            try{
                const res = await axios.get("https://datamansys.herokuapp.com/api/v1/admin/logout")
                    console.log('res', res)
                    console.log(typeof(res.data.status))
                if(res.data.status==="succesfully loggedout") {
                    console.log("in condition")
                    removeUserSession()
                    setCurrentUser({})
                    setLoading(false)
                    history.push("/login")
                }
            } catch(err) {
                console.log("sign out error", err)
            }
        }

    const getAdminDoctors = async () =>{
        setLoading(true)
        try{
            const res = await axios.get("https://datamansys.herokuapp.com/api/v1/admin/getAllDoctors", {
                withCredentials: true
            })
            console.log('admin doc', res.data.data.doc)
            setAdminDocs([...res.data.data.doc])
        }
        catch(err) {
            console.log("error in admin docs", err)
        }
    }

    const getAdminPatients = async () =>{
        setLoading(true)
        try{
            const res = await axios.get("https://datamansys.herokuapp.com/api/v1/admin/getAllPatients", {
                withCredentials: true
            })
            console.log('admin patient', res.data.data.doc)
            setAdminPatients([...res.data.data.doc])
        } catch(err) {
            console.log('admin patients', err)
        }
    }




    return(
        <UserContext.Provider value={{
            currentUser,
            userLogin : userLogin,
            userSignup: userSignup ,
            userLogout : userLogout ,
            docPatients : docPatients ,
            loading: loading,
            sessionUser : sessionUser,
            //setRole: setRole,
            adminLogin : adminLogin,
            //role: role,
            adminLogout : adminLogout,
            adminDocs: adminDocs,
            adminPatients: adminPatients
        }}>
            {children}
        </UserContext.Provider>
    )
}