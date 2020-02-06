import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Button,Form } from 'antd';

import { withRouter } from 'react-router-dom';
import axios from 'axios';


 function Register(props) {
   let [firstname,setFirstname]=useState("")
   let [lastname,setLastname]=useState('')
   let [username,setUsername]=useState('')
   let [email,setEmail]=useState('')
   let [password,setPassword]=useState('')
   let [confirmpassword,setConfirmpassword]=useState('')
   let [usertype,setUsertype]=useState('')  



  //  const handleChange=()=>{

  //  }
   
   let Handler=(e)=>{
      
    e.preventDefault();
    let registerdata={
        "username": username,
        "email": email,
        "password1": password,
        "password2": confirmpassword,
        "first_name": firstname,
        "last_name": lastname,
        "user_type": usertype
    }
    console.log(registerdata)
    axios.post("https://evd-project.herokuapp.com/rest-auth/registration/",registerdata)
    .then(resp=>{console.log(resp.data)
      if(resp.data){     
       
        props.history.push("/");       
      }
  // else{
  //   alert("Already Registered ....");
  // }
    })
    
  }
   
    return (
        <div >
         <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <h1>Registration</h1>
     
        <Card  style={{marginTop:"50px", width: 400 }}>
        <Form >
        <Row>
        <Col span={10}>
        <Input 
         placeholder="First Name"
         type="text"
         onChange={e=>setFirstname(e.target.value)}
         /> 
        </Col>
        <Col span={4}></Col>
        <Col span={10}>
        <Input 
        placeholder="Last Name"
        type="text"
        onChange={e=>setLastname(e.target.value)}
         />
        </Col>
        </Row> <br/>
         <Input 
         placeholder="User Name"
         type="text"
         onChange={e=>setUsername(e.target.value)}
         /> <br/><br/>
         <Input 
         placeholder="Enter Your Email Address"
         type="email"
         onChange={e=>setEmail(e.target.value)}
           /> <br/><br/>
         <Input 
         placeholder="Password"
         type="password"
         onChange={e=>setPassword(e.target.value)}
         /> <br/><br/>
          <Input 
          placeholder="Confirm Password"
          type="password"
          onChange={e=>setConfirmpassword(e.target.value)}
          /> <br/><br/>
          <select class="browser-default " style={{width:"100%"}}  required
          onChange={e=>setUsertype(e.target.value)} 
                 >
                   <option value="" disabled selected>Select User Type</option>
                   <option value="0">Admin</option>
                   <option value="1">Retailer</option>
                  
   </select>
        
        <br/><br/>
         <Button type="primary"
          onClick={Handler}
         >Sign Up</Button>
         </Form>
      </Card>
     
      </Col>
      <Col span={8}></Col>
    </Row>
    
        </div>
    )
};
export default  withRouter(Register);


