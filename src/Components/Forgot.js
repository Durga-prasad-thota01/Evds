import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Link } from "react-router-dom";
import { Form, Icon,Checkbox } from 'antd';
import { Button } from 'antd';
export default function Forgot() {
    return (
        <div >
         <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <h1>Forgot Password</h1>
        <Card  style={{marginTop:"", width: 400 }}>
        <Form  className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Confirm Password"
        />
    
    </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign In
          </Button><br/>
         
        </Form.Item>
      </Form>
      </Card>
      </Col>
      <Col span={8}></Col>
    </Row>
        </div>
    )
}

