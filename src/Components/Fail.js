import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";

import { Button } from 'antd';
export default function Fail() {
   
    return (
        <div >
         <Row>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
      <Col xs={22} sm={22} md={12} lg={8} xl={8}>
        <Card >
            <h1>Status Update</h1>
            <h3 style={{textAlign:"center"}}>sorry,</h3>
            <h3 style={{textAlign:"center"}}>Payment failure for</h3>
            <h3 style={{textAlign:"center"}}>99999999999</h3>
            <h3 style={{textAlign:"center"}}>for 1000 BIR</h3>
            <Button style={{marginLeft:"130px"}}  type="primary">Try again</Button>
            <br/>
            <br/>
            <Link to='/Home'>
         <Button style={{marginLeft:"115px"}} type="primary">New Recharge</Button>
         </Link>
      </Card>
      </Col>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
}
