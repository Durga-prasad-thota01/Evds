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

  // let[usrname,setUsrname]=useState("");
  let [gmail,setGmail]=useState("");
  let[pass,setPass]=useState("");
  // console.log(username,email,password)

let forgotHandler=()=>{
  alert("Working in progresss")
}
  let handlerLogin=(e)=>{
    e.preventDefault();
  let logindata={
    // "username":usrname,
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
    else{
      alert("You are not authorized to perform this action");
    }
}
,(error=>{

alert("please enter valid email and password");
})
)
  }
    return (
        <div >
      
         <Row>
      <Col xs={2} sm={2} md={6} lg={8} xl={8}></Col>
      <Col  xs={20} sm={20} md={12} lg={8} xl={8}>
      <h1 style={{}}>Login</h1>
        <Card  style={{marginTop:"",  }}>
        <Form  onSubmit={handlerLogin} className="login-form">
       {/* <Form.Item>
         
        
            <Input
            required
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              title=" Enter Valid UserName"
              onChange={e=>setUsrname(e.target.value)}
            />
       </Form.Item>  */}
        <Form.Item>
         
        <Input
        required
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
          autoComplete="off"
          title="Enter valid Email"
          onChange={e=>setGmail(e.target.value)}
        />
  
    </Form.Item>
        <Form.Item>
          
            <Input
            required
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              autoComplete="off"
              placeholder="Password"
              title="Enter valid password"
              onChange={e=>setPass(e.target.value)}
            />
        </Form.Item>
        <Form.Item>
        <Row>
        <Col xs={6} sm={6} md={6} lg={10} xl={16}></Col>
        <Col xs={18} sm={18} md={18} lg={14} xl={8}>
        <Link  style={{}} onClick={forgotHandler} className="login-form-forgot" >
        Forgot password
      </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}> </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
        <Button type="primary" style={{}}
        
        htmlType="submit" className="login-form-button"
        
        >
            Sign In
          </Button><br/>
     <p style={{marginLeft:"26px"}} > OR </p>
          <Link to="/Register" style={{}}>
          <Button type="primary" style={{}} htmlType="submit" >

          Sign Up Here
          </Button> </Link>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}> </Col>
          </Row>
        </Form.Item>
      </Form>

      </Card>
      </Col>
      <Col xs={2} sm={2} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
}

