import React, { useContext, useEffect, useState } from 'react'
import {Input, Form, Button} from 'antd'
import {EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';
import { UserContext } from '../../contexts/UserContext';

const Login = () =>{
    const {userLogin, currentUser} = useContext(UserContext)
    const [credentials , setCredentials] = useState({
        email : "" ,
        password : ""
    })

    useEffect(()=>{
        console.log('current user', currentUser)
    }, [currentUser])
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

    return(
        <div className="login-container">
                <div className="login-div">
                    <Form
                    className="login-form form"
                    onFinish={finishHandler}
                    name="login-form"
                    >
                        <div className="login-header form-header">
                            Login
                        </div>
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
                  <Form.Item>
                      <Button
                      type="primary"
                      key="submit"
                      className="submit-label"
                      onClick={finishHandler}
                      htmlType="submit">Submit</Button>
                  </Form.Item>

                    </Form>
                </div>
        </div>
    )
}

export default Login