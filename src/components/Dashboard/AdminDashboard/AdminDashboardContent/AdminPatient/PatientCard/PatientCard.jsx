import React, { useContext, useState } from 'react'
import {Avatar, Button, Input} from 'antd'
import {UserOutlined} from '@ant-design/icons';
import { UserContext } from '../../../../../../contexts/UserContext';



const PatientCard = ({patnt}) =>{
    const {updatePatient, deleteAdminPatient} = useContext(UserContext)
    const [updateStauts, setUpdateStauts] = useState(false)
    const [updatePatnt, setUpdatePatnt] = useState(patnt)
    
    const handleUpdatePatient = () =>{
        setUpdateStauts(!updateStauts)
        updatePatient(updatePatnt)
    }
    
    const updatePatientHandler = (e) => {
        setUpdatePatnt({
                ...updatePatnt ,
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
                                <Input name="name" className="patient-name" value={updatePatnt.name} onChange={updatePatientHandler}/>
                                <Input name="contactNumber" className="patient-contactNumber" value={updatePatnt.contactNumber} onChange={updatePatientHandler}/>
                                <Input className="patient-email" value={updatePatnt.email} name="email" onChange={updatePatientHandler}/>
                                </div>
                                <div className="updatedButtonDiv">
                                <Button onClick={()=>handleUpdatePatient(updatePatient)}>Update</Button>
                                </div>
                        </> : 
                        <>
                                <div className="patient-info">
                                        <div className="patient-name">{patnt.name}</div>
                                        <div className="patient-contactNumber">{patnt.contactNumber}</div>
                                        <div className="patient-email">{patnt.email}</div>
                                </div>
                                <div className="updatedButtonDiv">
                                        <Button onClick={()=>setUpdateStauts(!updateStauts)}>Update</Button>
                                </div>    
                                <div>
                                        <Button onClick={()=>deleteAdminPatient(patnt)}>Delete</Button>
                                </div>  
                        </>
                        }
               </div>
        )
}

export default PatientCard