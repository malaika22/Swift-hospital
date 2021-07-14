import React from 'react'
import { Layout } from 'antd'
import DashboardHome from '../../DoctorDashboard/DoctorDashboardContent/DashboardHome/DashboardHome'
import AdminPatient from './AdminPatient/AdminPatient'

const AdminDashboardContent = ({current}) =>{
        const {Content} = Layout
    console.log('current', current)
    const renderDashboardComponenet = () =>{
        switch(current) {
            case 'dashboard' :
                return <DashboardHome />
            case 'patients' :
                return <AdminPatient />
           // case 'appointment' : 
             //   return <DashboardAppointment /> 
            default:
                return <></>
        }
    }
    return(
         <Content className="dashboard-content-container">
           {renderDashboardComponenet()}
       </Content>  
    )
}

export default AdminDashboardContent