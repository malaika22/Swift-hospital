import React, { useState } from 'react'
import './styles.scss'
import DoctorSideBar from '../Sidebar/DoctorSidebar/DoctorSidebar'
import DoctorDashboardContent from './DoctorDashboardContent/DoctorDashboardContent'

const DoctorDashboard = () =>{
    const [current, setCurrent] = useState('dashboard')
    return(
        <div className="doctorDashboard-container">
            <DoctorSideBar current={current} setCurrent={setCurrent}/>
            <DoctorDashboardContent current={current}/>
        </div>
    )
}

export default DoctorDashboard