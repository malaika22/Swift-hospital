import React, { useContext } from 'react'
import { Layout, Avatar, Menu, Button } from 'antd'
import {UserOutlined, MailOutlined, PhoneOutlined, HomeFilled, CalendarFilled} from '@ant-design/icons'
import { UserContext } from '../../../../contexts/UserContext'
import './styles.scss'

const DoctorSideBar = ({current, setCurrent}) =>{
    const {Sider} = Layout
    const {userLogout} = useContext(UserContext)
    const handleMenuChange = (e) =>{
        console.log('key' ,e.key)
        setCurrent(e.key)
    }
    return(
        <Sider className="dashboardSider doctor-siderbar">
            <div className="sider-main-container">
                <div className="hospital-title">Swift Hospital</div>
                <div className="sidebar-container">
                    <div className="profile-div">
                        <div className="profile-info">
                            <div className="profile-avatar">
                                <Avatar icon={<UserOutlined />} size={64}/>
                            </div>
                            <div className="profile-content">
                                <div className="welcome-title">
                                    Welcome
                                </div>
                                <div className="doctor-title">
                                    Dr.John
                                </div>
                                <div className="icons-row">
                                    <span className="icons"><MailOutlined className="icon"/></span>
                                    <span className="icons"><UserOutlined className="icon"/></span>
                                    <span className="icons"> <PhoneOutlined /> </span>
                                </div>
                            </div>
                        </div>
                        <div className="report-container">
                            <div className="report-heading">Today Report</div>
                            <div className="report-info">
                                <div className="report-box">
                                    16 Patient
                                </div>
                                <div className="report-box">
                                    20 Pending
                                </div>
                                <div className="report-box">
                                    04 Visit
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-container">
                        <div className="menu-title">MAIN NAVIGATION</div>
                        <Menu className="sidebar-menu" onClick={handleMenuChange} selectedKeys={[current]} defaultSelectedKeys={[current]}>
                            <Menu.Item className="menu-item" key="dashboard">
                                <HomeFilled className="menu-icon"/> <span className="menuItem-title">Dashboard</span>
                            </Menu.Item>
                            <Menu.Item className="menu-item" key="appointment"> 
                                <CalendarFilled className="menu-icon"/> <span className="menuItem-title">Appointment</span>
                            </Menu.Item>
                            <Menu.Item className="menu-item" key="patients"> 
                                <UserOutlined className="menu-icon"/> <span className="menuItem-title">Patients</span> 
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className="logout-container">
                        <Button onClick={()=>userLogout()}>Logout</Button>
                    </div>
                </div>
            </div>
        </Sider>
    )
}

export default DoctorSideBar