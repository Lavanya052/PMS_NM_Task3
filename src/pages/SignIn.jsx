import React from 'react'
import { Container,Form, Button} from 'react-bootstrap';
import "../styles/SignIn.css";
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
const[formData, setFormData] =useState({
        email : "",
        password: ""
})
const handleChange=(e)=>{
  const{name,value}=e.target  ;
  setFormData({
    ...formData, [name]:value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
  history.push('/Home');
};

const navigate =useNavigate()

  return (<>
    <h1 style={{textAlign: "center"}}>PROJECT MANAGEMENT SYSTEM</h1>
    <Container>
    <h1>Login Form</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group>         {/*Email*/}
        <Form.Label>Email</Form.Label>
        <Form.Control 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            required/>
      </Form.Group>
      <Form.Group>        {/*password*/}
         <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
            required/>
      </Form.Group>
      <Form.Group>
        <Button varient="primary" type="submit" onClick={()=>navigate("/Home")}>Login</Button>
        <p>Not Registred?<Link to="/">Register</Link></p>
      </Form.Group>
    </Form>
  </Container></>
  )
}

export default SignIn
