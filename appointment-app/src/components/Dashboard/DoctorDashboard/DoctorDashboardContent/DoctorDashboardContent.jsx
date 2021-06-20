import React from 'react'
import { Layout } from 'antd'
import DashboardHome from './DashboardHome/DashboardHome'
import DashboardAppointment  from './DashboardAppointment/DashboardAppointment'
import DashboardPatient from './DashboardPatient/DashboardPatient'

const DoctorDashboardContent = ({current}) =>{
    const {Content} = Layout
    console.log('current', current)
    const renderDashboardComponenet = () =>{
        switch(current) {
            case 'dashboard' :
                return <DashboardHome />
            case 'patients' :
                return <DashboardPatient />
            case 'appointment' : 
                return <DashboardAppointment /> 
            default:
                return <></>
        }
    }
    return(
       <Content>
           {renderDashboardComponenet()}
       </Content>
    )
}

export default DoctorDashboardContent