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
    const renderView = () =>{
        console.log('render view', currentUser)
        if(currentUser.role==="doctor"){
            return <DoctorDashboard />
        } else if(currentUser.role==="admin"){
            return <AdminDashboard />
        }
    }
    if(loading) {
        console.log("in loading", loading)
        return <LoadSpinner />
    } 
    else {
        return(
            <div className="dashboard-container" style={{boxSizing: "border-box"}}>
                {renderView()}
            </div>
        )
    }

}

export default Dashboard