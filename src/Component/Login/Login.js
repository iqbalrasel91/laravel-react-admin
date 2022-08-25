import {Button, Checkbox, Form, Input} from 'antd';
import React, {useState} from 'react';
import './Login.css'
import axios from "axios";

function Login(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('http://localhost/laravel-react-backend/public/api/login', {
            email: email,
            password: password
        }).then(response => {
            setLoading(false);
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('user', JSON.stringify(response['data']));
            console.log(response);
        }).catch(error => {
            setLoading(false);
            setError("Something went wrong. Please try again later.");
        });
    }
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img
                        src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=500"
                        alt="Login"/>
                </div>
                <Form name="login-form"
                      labelCol={{span: 8,}}
                      wrapperCol={{span: 16,}}
                      initialValues={{remember: true,}}
                      autoComplete="off">

                    <p className="form-title">Welcome back</p>
                    <p>Login to the Dashboard</p>

                    <Form.Item
                        label="email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                        onChange={e => setEmail(e.target.value)}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        onChange={e => setPassword(e.target.value)}>
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    { error ? error : ''}
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" className="login-form-button" htmlType="submit"
                                value={loading ? 'Loading...' : 'Login'} onClick={handleLogin}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;