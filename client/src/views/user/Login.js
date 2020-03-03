// react
import React from 'react';

import LoginForm from "../../components/Login"

const Login = () => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoginForm />
        </div>
    );
};

export default Login;