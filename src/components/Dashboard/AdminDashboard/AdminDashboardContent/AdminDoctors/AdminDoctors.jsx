import React, { useContext } from 'react'
import { Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { UserContext } from '../../../../../contexts/UserContext'
import './styles.scss'
import DoctorCard from './DoctorCard/DoctorCard';

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
                        <DoctorCard patnt={data}/>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminDoctors