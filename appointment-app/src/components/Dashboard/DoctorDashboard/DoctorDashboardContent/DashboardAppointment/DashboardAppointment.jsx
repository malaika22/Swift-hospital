import React, {useContext} from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { UserContext } from '../../../../../contexts/UserContext'
import './styles.scss'

const DashboardAppointment = () =>{
    const { docPatients } = useContext(UserContext)
    console.log('doc patients', docPatients)
    return (
        <div className="dashboard-appointment-container">
            <div className="dashboard-header">
                <div className="dashboard-title">All Appointments</div>
                <div className="welcome-div">Welcome to Swift Application</div>
            </div>
            <div className="appointments-container">
                {(docPatients || []).map((data) => {
                    const patnt = (data || {}).patient
                    return (
                        <div className="appointment-card">
                            <div className="appointment-avatar">
                                <Avatar icon={<UserOutlined />} size={64} />
                            </div>
                            <div className="appointment-info">
                                <div className="appointment-name">{patnt.name}</div>
                                <div className="appointment-contactNumber">{patnt.contactNumber}</div>
                                <div className="appointment-email">{patnt.email}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DashboardAppointment