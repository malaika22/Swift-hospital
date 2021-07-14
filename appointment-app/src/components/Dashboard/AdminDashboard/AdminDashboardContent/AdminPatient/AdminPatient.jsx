import React, { useContext } from 'react'
import { Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { UserContext } from '../../../../../contexts/UserContext'
import './styles.scss'

const AdminPatient = () =>{
    const {adminPatients} = useContext(UserContext)
    console.log('doc patients', adminPatients)
    return(
        <div className="doctor-patients-container">
            <div className="dashboard-header">
                <div className="dashboard-title">All Patients</div>
                <div className="welcome-div">Welcome to Swift Application</div>
            </div>
            <div className="patients-container">
                {(adminPatients || []).map((data)=>{
                    return(
                        <div className="patient-card">
                            <div className="patient-avatar">
                                <Avatar icon={<UserOutlined/>} size={64}/>
                            </div>
                            <div className="patient-info">
                                <div className="patient-name">{data.name}</div>
                                <div className="patient-contactNumber">{data.contactNumber}</div>
                                <div className="patient-email">{data.email}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminPatient