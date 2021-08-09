import React from 'react'
import {UserOutlined, BugOutlined, BankOutlined} from '@ant-design/icons';
import Survery from './SurveryComponent/Survery';
import './styles.scss'

const DashboardHome = () =>{
    return (
        <div className="dashboard-home-container">
            <div className="dashboard-header">
                    <div className="dashboard-title">Dashboard</div>
                    <div className="welcome-div">Welcome to Swift Application</div>
            </div>
            <div className="hospital-info-div">
                    <div className="info-div">
                            <div className="details">
                                <div className="info-title">New patient</div>
                                <div className="info-number">27</div>
                            </div>
                            <UserOutlined className="info-icon"style={{color: "#457fca"}} />
                    </div>
                    <div className="info-div">
                        <div className="details">
                                <div className="info-title">OPD Patient</div>
                        <div className="info-number">12</div>
                        </div>
                        <UserOutlined className="info-icon" style={{color: "#78b83e"}}/>
                    </div>
                    <div className="info-div">
                        <div className="details">
                                <div className="info-title">Today's Operation</div>
                        <div className="info-number">05</div>
                        </div>
                        <BugOutlined className="info-icon" style={{color: "#F15F79"}}/>
                    </div>
                    <div className="info-div">
                        <div className="details">
                                <div className="info-title">Hospital Earning</div>
                        <div className="info-number">$3,540</div>
                        </div>
                        <BankOutlined className="info-icon" style={{color: "#379C94"}}/>
                    </div>
            </div>
                <Survery />
        </div>
    )
}

export default DashboardHome