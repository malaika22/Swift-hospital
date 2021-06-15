import React, { useContext } from 'react'
import {Button} from 'antd'
import {Redirect} from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const Dashboard = () =>{
    const {currentUser ,userLogout} = useContext(UserContext)
    console.log('current user', currentUser)
    if(Object.keys(currentUser).length === 0){
        return <Redirect to="/login" />
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <Button onClick={()=>userLogout()}>Logout</Button>
        </div>
    )
}

export default Dashboard