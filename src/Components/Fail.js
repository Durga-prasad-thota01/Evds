import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";

import { Button } from 'antd';
export default function Fail() {
   
    return (
        <div style={{marginTop:"50px" }}  >
         <Row>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
      <Col xs={22} sm={22} md={12} lg={8} xl={8}>
        <Card >
            <h1>Status Update</h1>
            <h3 style={{textAlign:"center"}}>sorry,</h3>
            <h2 style={{textAlign:"center"}}>Payment failure for</h2>
            <h3 style={{textAlign:"center"}}>99999999999</h3>
            <h3 style={{textAlign:"center"}}>for 1000 BIR</h3>
            <Row>
              <Col xs={5} sm={5} md={5} lg={8} xl={2}></Col>
              <Col xs={14} sm={14} md={14} lg={8} xl={6}>
            <Link to='/Fail'>
            <Button style={{marginLeft:"130px"}}  type="primary">Try again</Button>  </Link>
            <br/>
            <br/>
            <Link to='/Home'>
         <Button style={{marginLeft:"115px"}} type="primary">New Recharge</Button>
         </Link>
         </Col>
         <Col xs={5} sm={5} md={5} lg={8} xl={15}></Col>
         </Row>
      </Card>
      </Col>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
}
