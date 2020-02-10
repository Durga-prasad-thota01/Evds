import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Button,Form } from 'antd';
import { Link } from "react-router-dom";
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
        
        alert("Registered succesfully")
        props.history.push("/");     
      }
    },(error=>{
        alert("Already Registered ....");
    })
    )
  }
    return (
        <div >
         <Row>
      <Col xs={2} sm={2} md={6} lg={8} xl={8}></Col>
      <Col xs={20} sm={20} md={12} lg={8} xl={8}>
      <h1>Registration</h1>
     
        <Card  style={{marginTop:"10px", }}>
        <Form  onSubmit={Handler}>
        <Row>
        <Col span={10}>
        <Form.Item>
        <Input 
        required
         placeholder="First Name"
         type="text"
         autoComplete="off"
         title="Valid Name"
         onChange={e=>setFirstname(e.target.value)}
         /> 
         </Form.Item>
        </Col>
        <Col span={4}></Col>
        <Col span={10}>
        <Form.Item>
        <Input 
        required
        placeholder="Last Name"
        type="text"
        autoComplete="off"
        title="Valid Name"
        onChange={e=>setLastname(e.target.value)}
         />
         </Form.Item>
        </Col>
        </Row> 
        <Form.Item>
         <Input 
         required
         placeholder="User Name"
         type="text"
         autoComplete="off"
         title="Valid username"
         onChange={e=>setUsername(e.target.value)}
         /> 
         </Form.Item>
         <Form.Item>
         <Input 
         required
         placeholder="Enter Your Email Address"
         type="email"
         autoComplete="off"
         title="@gmail.com"
         onChange={e=>setEmail(e.target.value)}
           />
           </Form.Item>
           <Form.Item>
         <Input 
         required
         placeholder="Password"
         type="password"
         autoComplete="off"
         title="minimum 8 characters"
         onChange={e=>setPassword(e.target.value)}
         />
         </Form.Item>
         <Form.Item>
          <Input 
          required
          placeholder="Confirm Password"
          type="password"
          autoComplete="off"
          title="minimum 8 characters"
          onChange={e=>setConfirmpassword(e.target.value)}
          />
          </Form.Item> 
          <Form.Item>
          <select class="browser-default " style={{width:"100%",height:"32px"}}  required
          onChange={e=>setUsertype(e.target.value)} 
                 >
                   <option value="" disabled selected>Select User Type</option>
                   <option value="0">Admin</option>
                   <option value="1">Retailer</option>
                  
   </select>
   </Form.Item>
   <Row>
   <Col xs={8} sm={8} md={8} lg={8} xl={8}> </Col>
   <Col xs={8} sm={8} md={8} lg={8} xl={8}>
        <Form.Item>
         <Button type="primary"
         htmlType="submit"
         >Sign Up</Button>
         </Form.Item>
         <Form.Item>

         <Link to="/"  >

         <Button type="primary"
         >Sign In here ?</Button>
         </Link>
         </Form.Item>
         </Col>
         <Col xs={8} sm={8} md={8} lg={8} xl={8}></Col>
         </Row>
         </Form>
      </Card>
      </Col>
      <Col xs={2} sm={2} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
};
export default  withRouter(Register);


