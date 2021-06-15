import React, { useContext, useState } from 'react'
import {Form, Button, Input} from 'antd'
import { Redirect } from 'react-router';
import { UserContext } from '../../contexts/UserContext'
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Signup = () =>{
    const {userSignup, currentUser} = useContext(UserContext)
    const [credentials, setCredentials] = useState({
            name : "",
            email : "",
            password : "",
            passwordConfirm : "",
            experience : "",
            speciality : ""
    })

    const changeHandler = (e) =>{
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const finishHandler = () =>{
            if(credentials) {
                userSignup(credentials)
            }
    }

    if(Object.keys(currentUser).length>0) {
       return <Redirect to="/" />
    }
    return(
        <div className="signup-container">
            <div className="signup-div">
                <Form
                onFinish={finishHandler}
                className="signup-form form"
                >
                    <div className="signup-header">Signup</div>
                    <Form.Item className="form-label name-label"
                    required={[{required : true , message : "Please enter your name"}]}
                    >
                        <Input name="name" 
                        type="text"
                        placeholder="Username"
                        value={credentials.name}
                        onChange={changeHandler}
                        className="input-field user-field"
                        />
                    </Form.Item>
                    <Form.Item className="form-label email-label"
                    required={[{required : true , message: "Please enter you email"}]}
                    >
                        <Input type="email"
                        className="input-field email-field"
                        placeholder="Enter your email" 
                        onChange={changeHandler}
                        name="email"
                        value={credentials.email}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: "Password can't be an empty field" },
                        ]}
                        className="password-label form-label login-label signUp-label"
                        >
                        <Input.Password
                            name="password"
                            placeholder="Your Password"
                            iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                            className="password-input input-field"
                            value={credentials.password}
                            onChange={changeHandler}
                        />
                    </Form.Item>

                    <Form.Item
                        name="passwordConfirm"
                        dependencies={["password"]}
                        hasFeedback
                        className="password-field form-label login-label"
                        rules={[
                            {
                            required: true,
                            message: "Please confirm your password",
                            },
                            ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                                }
                                return Promise.reject(
                                new Error(
                                    "The two passwords that you entered do not match!"
                                )
                                );
                            },
                            }),
                        ]}
                        >
                        <Input.Password
                            placeholder="Confirm Password"
                            iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                            name="passwordConfirm"
                            value={credentials.confirmPassword}
                            className="password-input input-field"
                            onChange={changeHandler}
                        />
                    </Form.Item>

                    <Form.Item
                    className="experience-label form-label"
                    name="experience"
                    required={[{required : true , message : "Please enter your experience"}]}
                    >
                        <Input type="number"
                        name="experience"
                        onChange={changeHandler}
                        value={credentials.experience}
                        className="experience-field input-field"
                        />
                    </Form.Item>
                    <Form.Item
                    className="speciality-label form-label"
                    name="speciality"
                    required={[{required : true , message : "Please enter your speciality"}]}
                    >
                        <Input type="text"
                        className="input-field speciality-field"
                        onChange={changeHandler}
                        value={credentials.speciality}
                        name="speciality"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button key="submit" htmlType="submit" onChange={finishHandler}>Signup</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Signup