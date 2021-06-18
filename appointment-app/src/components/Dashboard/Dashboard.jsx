import React, { useContext, useEffect } from 'react'
import {Button} from 'antd'
import {Redirect, useHistory} from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import DoctorDashboard from './DoctorDashboard/DoctorDashboard'

const Dashboard = () =>{
    const {currentUser ,userLogout, loading, sessionUser} = useContext(UserContext)
    console.log('current user', currentUser)
    const history = useHistory()
    if(loading=== 'loading') {
         console.log("session user", sessionUser)
        return <div>Loadinggg</div> 
    } else if(loading === 'no user') {
       history.push('/login')
    } else
    return(
        <div className="dashboard-container">
            <DoctorDashboard />
            <Button onClick={()=>userLogout()}>Logout</Button>
        </div>
    )
}

export default Dashboard