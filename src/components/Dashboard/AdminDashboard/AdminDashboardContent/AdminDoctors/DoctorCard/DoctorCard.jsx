import React, { useContext, useState } from 'react'
import {Avatar, Button, Input} from 'antd'
import {UserOutlined} from '@ant-design/icons';
import { UserContext } from '../../../../../../contexts/UserContext';



const DoctorCard = ({patnt}) =>{
    const {updateDoctor, deleteAdminDoctor} = useContext(UserContext)
    const [updateStauts, setUpdateStauts] = useState(false)
    const [updateDoc, setUpdateDoc] = useState(patnt)
    
    const handleUpdateDoctor = () =>{
        setUpdateStauts(!updateStauts)
        updateDoctor(updateDoc)
    }
    
    const updateDoctorHandler = (e) => {
        setUpdateDoc({
                ...updateDoc ,
                [e.target.name] : e.target.value
        })
    }

        return(
               <div className="patient-card">
                        <div className="patient-avatar">
                            <Avatar icon={<UserOutlined/>} size={64}/>
                        </div>
                        {
                                updateStauts ? 
                        <>
                                <div className="patient-info">
                                <Input name="name" className="patient-name" value={updateDoc.name} onChange={updateDoctorHandler}/>
                                <Input name="experience" className="patient-contactNumber" value={updateDoc.experience} onChange={updateDoctorHandler}/>
                                <Input className="patient-email" value={updateDoc.email} name="email" onChange={updateDoctorHandler}/>
                                </div>
                                <div className="updatedButtonDiv">
                                <Button onClick={()=>handleUpdateDoctor(updateDoc)}>Update</Button>
                                </div>
                        </> : 
                        <>
                                <div className="patient-info">
                                        <div className="patient-name">{patnt.name}</div>
                                        <div className="patient-contactNumber"><span>Experience : </span>{patnt.experience}</div>
                                        <div className="patient-email">{patnt.email}</div>
                                </div>
                                <div className="updatedButtonDiv">
                                        <Button onClick={()=>setUpdateStauts(!updateStauts)}>Update</Button>
                                </div>    
                                <div>
                                        <Button onClick={()=>deleteAdminDoctor(patnt)}>Delete</Button>
                                </div>  
                        </>
                        }
               </div>
        )
}

export default DoctorCard