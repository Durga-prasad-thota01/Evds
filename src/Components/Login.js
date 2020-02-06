import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';

import axios from 'axios';
import { Input } from 'antd';
import { Link } from "react-router-dom";
import { Form, Icon,Checkbox } from 'antd';

import { Button } from 'antd';
export default function Login(props) {

  let[usrname,setUsrname]=useState("");
  let [gmail,setGmail]=useState("");
  let[pass,setPass]=useState("");
  // console.log(username,email,password)


  let handlerLogin=(e)=>{
    e.preventDefault();
  let logindata={
    "username":usrname,
    "email":gmail,
    "password":pass
   
  }
  // console.log(username,email,password)

  axios.post("https://evd-project.herokuapp.com/rest-auth/login/",logindata
  // {
  //   headers: {
  //       Authorization: token ? `Token ${key}`}
  //     }
  )
  // { headers: {"Authorization" : ` token ${}`}})
    
    .then(resp=>{ console.log(resp.data)
      if(resp.data){     
        let key=resp.data.key;
      localStorage.setItem("token",key)
  
        props.history.push("/Home");       
      }
})
  }
    return (
        <div >
         <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <h1 style={{marginLeft:"156px"}}>Login</h1>
        <Card  style={{marginTop:"", width: 400 }}>
        <Form  onSubmit={handlerLogin} className="login-form">
        <Form.Item>
         
        
            <Input
            required
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              title=" Enter Valid UserName"
              onChange={e=>setUsrname(e.target.value)}
            />
      
        </Form.Item>
        <Form.Item>
         
        <Input
        required
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
          title="Enter valid Email"
          onChange={e=>setGmail(e.target.value)}
        />
  
    </Form.Item>
        <Form.Item>
          
            <Input
            required
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              title="Enter valid password"
              onChange={e=>setPass(e.target.value)}
            />
        </Form.Item>
        <Form.Item>
        <Row>
        <Col span={12}></Col>
        <Col span={12}>
        <Link to="/Forgot" style={{marginLeft:"56px"}} className="login-form-forgot" >
        Forgot password
      </Link>
        </Col>
      </Row>
        <Button type="primary" style={{marginLeft:"150px"}}
        
        htmlType="submit" className="login-form-button"
        
        >
            Log in
          </Button><br/>
     <p style={{marginLeft:"170px"}} > OR </p>
          <Link to="/Register" style={{marginLeft:"136px"}}>
          <Button type="primary" style={{marginLeft:"0px"}} htmlType="submit" >

          Register Here
          </Button> </Link>
        </Form.Item>
      </Form>

      </Card>
      </Col>
      <Col span={8}></Col>
    </Row>
        </div>
    )
}

