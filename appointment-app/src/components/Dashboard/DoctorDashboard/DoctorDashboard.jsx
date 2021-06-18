import React from 'react'
import './styles.scss'
import DoctorSideBar from '../Sidebar/DoctorSidebar/DoctorSidebar'
import DoctorDashboardContent from './DoctorDashboardContent/DoctorDashboardContent'

const DoctorDashboard = () =>{
    return(
        <div className="doctorDashboard-container">
            <DoctorSideBar />
            <DoctorDashboardContent/>
        </div>
    )
}

export default DoctorDashboard