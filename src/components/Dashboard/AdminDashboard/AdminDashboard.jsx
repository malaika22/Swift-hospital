import React , {useState} from 'react'
import { useHistory } from 'react-router'
import AdminSideBar from '../Sidebar/AdminSidebar/AdminSidebar'
import AdminDashboardContent from './AdminDashboardContent/AdminDashboardContent'
import './styles.scss'

const AdminDashboard = () =>{
    const [current, setCurrent] = useState('dashboard')
    console.log('in admin dashboard')
    return(
        <div className="doctorDashboard-container">
            <AdminSideBar current={current} setCurrent={setCurrent}/>
            <AdminDashboardContent current={current}/>
        </div>
    )
}

export default AdminDashboard