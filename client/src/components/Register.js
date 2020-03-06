// react
import React, { useState, useContext } from 'react';
import axios from 'axios';

// styled components
import styled from 'styled-components';

// helpers
import { styletest } from '../helpers/styletest';

// contexts
import { DefaultTheme } from '../contexts/DefaultTheme';

const Register = props => {
  const [register, setRegister] = useState({username: "", password1: "", password2: ""})

  // contexts
  const colorPalette = useContext(DefaultTheme).colors;

  const handleChange = e => {
    setRegister({...register, [e.target.name]: e.target.value})
    console.log(register)
}

const handleSubmit = e => {
  e.preventDefault();
  const endpoint = 'https://mud-backend-ddlp.herokuapp.com/api/registration/';
    axios
      .post(endpoint, this.state)
      .then(response => {
          console.log(response)
        localStorage.setItem('key', response.data.key)
        this.props.history.push('/dashboard')
      })
      .catch(error => console.log(error));
}
  return (
    <Container colors={colorPalette}>
      <Form action={handleSubmit}>
          <Label for="uname">Username</Label>
          <Input type="text" required id="uname" name="username" value={register.username} onChange={handleChange} colors={colorPalette}/>
          
          <Label for="pword">Password</Label>
          <Input type="password" required id="pword" name="password1" value={register.password1} onChange={handleChange} colors={colorPalette}/>
          {register.password1 !== register.password2 && register.password2.length >= 3 ? <p>Password fields do not match!</p> : <></>}
          <Label for="conpword">Confirm Password</Label>
          <Input type="password" required id="conpword" name="password2" value={register.password2} onChange={handleChange} colors={colorPalette}/>
  
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Label for="conage">I am at least 13 years old or older</Label>
            <input type="checkbox" required name="age" />
          </div>
  
          <Button type="submit" colors={colorPalette}>Submit</Button>
      </Form>
    </Container>
  );
}

// styled components

const Container = styled.div`
  width: 40%;
  max-height: 60%; // temp height
  background-color: ${props => props.colors.surface800};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.colors.surface100};
  padding: 2rem 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 2rem;
`

const Input= styled.input`
  width: 70%;
  height: 2.4rem;
  background-color: ${props => props.colors.surface100};
  margin-bottom: 2rem;
`

const Label= styled.label`
  font-size: 1.2rem;
`

const Button = styled.button`
        width: 7rem;
        height: 3rem;
        margin: 0 0.5rem;
        padding: 0.5rem;
        border: none;
        background-color: ${props => props.colors.surface300};
        color: ${props => props.colors.surface100};
        letter-spacing: 0.015rem;
        font-weight: bold;
        font-size: 1rem;

            &:hover {
                background-color: ${props => props.colors.highlight};
            }

            &:last-child {
                width: 8rem;
                margin-right: 1rem;
            }
`

export default Register;