import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
export default function Register() {
    return (
        <div >
         <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <h1>Registration</h1>
        <Card  style={{marginTop:"50px", width: 400 }}>
         <Input placeholder="Name" /> <br/><br/>
         <Input placeholder="Enter Your Email Address"  /> <br/><br/>
         <Input placeholder="Password" /> <br/><br/>
          <Input placeholder="Confirm Password" /> <br/><br/>
         <Button type="primary">Sign In</Button>

      </Card>
      </Col>
      <Col span={8}></Col>
    </Row>
        </div>
    )
}

