import React, { useContext, useEffect } from 'react'
import {Button} from 'antd'
import {Redirect, useHistory} from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import DoctorDashboard from './DoctorDashboard/DoctorDashboard'
import LoadSpinner from '../LoadSpinner/LoadSpinner'
import AdminDashboard from './AdminDashboard/AdminDashboard'

const Dashboard = () =>{
    const {currentUser, loading} = useContext(UserContext)
    console.log('current user', currentUser)
    const history = useHistory()
    if(loading) {
        console.log("in loading")
        return <LoadSpinner />
    } 
    else
    return(
        <div className="dashboard-container" style={{boxSizing: "border-box"}}>
            {currentUser || {}.role === "admin" ? 
                <AdminDashboard /> : 
                <DoctorDashboard />
            }
           
        </div>
    )
}

export default Dashboard