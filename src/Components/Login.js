import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Link } from "react-router-dom";
import { Form, Icon,Checkbox } from 'antd';

import { Button } from 'antd';
export default function Login() {
    return (
        <div >

         <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <h1 style={{marginLeft:"156px"}}>Login</h1>
        <Card  style={{marginTop:"", width: 400 }}>
        <Form  className="login-form">
        <Form.Item>
         
        
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
      
        </Form.Item>
        <Form.Item>
          
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
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
        <Button type="primary" style={{marginLeft:"150px"}} htmlType="submit" className="login-form-button">
            Log in
          </Button><br/>
     <p style={{marginLeft:"163px"}} > OR </p>
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

