import React, { useContext } from 'react'
import { Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { UserContext } from '../../../../../contexts/UserContext'
import './styles.scss'

const AdminDoctors = () =>{
    const {adminDocs} = useContext(UserContext)
    console.log('doc patients', adminDocs)
    return(
        <div className="doctor-patients-container">
            <div className="dashboard-header">
                <div className="dashboard-title">All Doctors</div>
                <div className="welcome-div">Welcome to Swift Application</div>
            </div>
            <div className="patients-container">
                {(adminDocs || []).map((data)=>{
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

export default AdminDoctors