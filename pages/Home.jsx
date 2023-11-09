import React from 'react'
import { Container,Button } from 'react-bootstrap'
import "../styles/Home.css";
import { Link,useNavigate } from 'react-router-dom';
const Home = () => {
  return (<>
  <h1 style={{textAlign: "center"}}>PROJECT MANAGEMENT SYSTEM</h1>
    <Container>
        <h1>Welcome to Our Website</h1>
        <p>We are here to serve you</p>
        <Button varient="primary" type="submit">Get Started</Button>
        
    </Container></>
  )
}

export default Home
