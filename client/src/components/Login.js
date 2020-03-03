// react
import React, { useState } from 'react';

const Login = props => {
const [login, setLogin] = useState({username: "", password: ""})

  const handleChange = e => {
    setLogin({...login, [e.target.name]: e.target.value})
  }
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }} action={handleSubmit}>
        <label for="uname">Username</label>
        <input type="text" required id="uname" name="username" value={login.username} onChange={handleChange}/>
        
        <label for="pword">Password</label>
        <input type="password" required id="pword" name="password" value={login.password} onChange={handleChange}/>

        <button type="submit">Submit</button>
    </form>
  );
}

export default Login;