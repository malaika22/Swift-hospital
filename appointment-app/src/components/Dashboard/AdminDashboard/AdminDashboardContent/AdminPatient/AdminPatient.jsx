import React, { useContext } from 'react'
import { Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { UserContext } from '../../../../../contexts/UserContext'
import './styles.scss'
import PatientCard from './PatientCard/PatientCard';

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
                        <PatientCard patnt={data} />
                    )
                })}
            </div>
        </div>
    )
}

export default AdminPatient