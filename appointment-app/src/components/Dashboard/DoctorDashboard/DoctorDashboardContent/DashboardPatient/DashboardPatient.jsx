import React, { useContext } from 'react'
import { Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { UserContext } from '../../../../../contexts/UserContext'
import './styles.scss'

const DashboardPatient = () =>{
    const {docPatients} = useContext(UserContext)
    console.log('doc patients', docPatients)
    return(
        <div className="doctor-patients-container">
            <div className="dashboard-header">
                <div className="dashboard-title">All Patients</div>
                <div className="welcome-div">Welcome to Swift Application</div>
            </div>
            <div className="patients-container">
                {(docPatients || []).map((data)=>{
                    const patnt = (data || {}).patient
                    return(
                        <div className="patient-card">
                            <div className="patient-avatar">
                                <Avatar icon={<UserOutlined/>} size={64}/>
                            </div>
                            <div className="patient-info">
                                <div className="patient-name">{patnt.name}</div>
                                <div className="patient-contactNumber">{patnt.contactNumber}</div>
                                <div className="patient-email">{patnt.email}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DashboardPatient