// react
import React, { useState } from 'react';

const Register = props => {
  const [register, setRegister] = useState({username: "", password: "", confirmPassword: ""})
  const handleChange = e => {
    setRegister({...register, [e.target.name]: e.target.value})
    console.log(register)
}
const handleSubmit = e => {
  e.preventDefault();
}
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }} action={handleSubmit}>
        {register.password !== register.confirmPassword && register.confirmPassword.length >= 3 ? <p>Password fields do not match!</p> : <></>}
        <label for="uname">Username</label>
        <input type="text" required id="uname" name="username" value={register.username} onChange={handleChange}/>
        
        <label for="pword">Password</label>
        <input type="password" required id="pword" name="password" value={register.password} onChange={handleChange}/>

        <label for="conpword">Confirm Password</label>
        <input type="password" required id="conpword" name="confirmPassword" value={register.confirmPassword} onChange={handleChange} />

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <label for="conage">I am at least 13 years old or older</label>
          <input type="checkbox" required name="age" />
        </div>

        <button type="submit">Submit</button>
    </form>
  );
}

export default Register;