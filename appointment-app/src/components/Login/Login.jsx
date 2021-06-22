import React, { useContext, useEffect, useState } from 'react'
import {Input, Form, Button, Radio} from 'antd'
import { Link , Redirect } from 'react-router-dom'
import {EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assests/logo.png'
import './styles.scss'

const Login = () =>{
    const {userLogin, currentUser} = useContext(UserContext)
    const [value, setValue] = useState("doctor")
    const [credentials , setCredentials] = useState({
        email : "" ,
        password : ""
    })

    const finishHandler = () =>{
        if(credentials.email && credentials.password){
            console.log('credentials', credentials)
           userLogin(credentials)
        }
    }

    const changeHandler = (e) =>{
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    if(Object.keys(currentUser).length>0) {
        return <Redirect to="/" />
    }

    const radioChange = (e) =>{
        console.log('radio', e.target.value)
        setValue(e.target.value)
    }

    return(
        <div className="login-container">
                <div className="login-div">
                    <div className="logo-div">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="form-div">
                        <div className="form-welcome-title">Welcome! Please login </div>
                        <div className="login-radio-div">
                            <Radio.Group onChange={radioChange} value={value} className="radio-options-div">
                                <Radio value={"doctor"} className="radio-option">As doctor</Radio> <span className="or-option-label">Or</span>
                                <Radio value={"admin"} className="radio-option">As Admin</Radio>
                            </Radio.Group>
                        </div>
                            <Form
                            className="login-form form"
                            onFinish={finishHandler}
                            name="login-form"
                            >
                                <Form.Item
                                name="email"
                                rules={[{required: true, message: "Please input your email"}]}
                                className="login-label">
                                    <Input 
                                    placeholder="Enter you email here"
                                    name="email"
                                    type="email"
                                    className="input-field email-input"
                                    onChange={changeHandler}
                                    />

                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                    className="login-label"
                                >
                                    <Input.Password
                                            placeholder="Enter your password here"
                                            iconRender={(visible) =>
                                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                            }
                                            className="password-input input-field"
                                            onChange={changeHandler}
                                            name="password"
                                    />
                                </Form.Item>
                                {value === 'doctor' ? 
                                (
                                <Form.Item className="submit-label">
                                    <Button
                                    type="primary"
                                    key="submit"
                                    className="submit-button"
                                    onClick={finishHandler}
                                    htmlType="submit">Submit</Button>
                                </Form.Item>
                                ) : <div>Admin login</div>
                            }
                            </Form>

                    </div>
                    <span className="signup-option">Don't have an account? <Link to="/signup"><span style={{color: "#33AA9E"}}>Register here</span></Link></span>
                </div>
        </div>
    )
}

export default Login