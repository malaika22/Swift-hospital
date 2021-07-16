import React from 'react'
import { Layout } from 'antd'
import DashboardHome from '../../DoctorDashboard/DoctorDashboardContent/DashboardHome/DashboardHome'
import AdminPatient from './AdminPatient/AdminPatient'
import AdminDoctors from './AdminDoctors/AdminDoctors'

const AdminDashboardContent = ({current}) =>{
        const {Content} = Layout
    console.log('current', current)
    const renderDashboardComponenet = () =>{
        switch(current) {
            case 'dashboard' :
                return <DashboardHome />
            case 'patients' :
                return <AdminPatient />
            case 'doctors' : 
                return <AdminDoctors /> 
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