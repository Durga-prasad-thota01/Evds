import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";

import { Button } from 'antd';
export default function Sucess(props) {
    let [mob,setMob]=useState('');
  let [amunt,setAmunt]=useState('');

  useEffect(()=>{  
    if (!localStorage.length)   
    {
      props.history.push("./"); 
        }
  },[])

    useEffect(()=>{
        let mob=localStorage.getItem("mobile");
        if(mob){
          setMob(mob)
        }
        let amunt=localStorage.getItem("amt");
        if(amunt){
          setAmunt(amunt)
        }
       },[])
    return (
        <div style={{marginTop:"50px" }}>
         <Row>
      <Col  xs={1} sm={1} md={6} lg={8} xl={8}></Col>
      <Col xs={22} sm={22} md={12} lg={8} xl={8}>
   
        <Card >
            <h1  style={{textAlign:"center"}} >Status Update</h1>
            <h2  style={{textAlign:"center"}}>Recharge sucessful for</h2>
            <h3  style={{textAlign:"center"}} >{mob}</h3>
            <h3  style={{textAlign:"center"}} >with {amunt} Rs</h3>
            <Row>
      <Col  xs={5} sm={5} md={5} lg={8} xl={2}></Col>
      <Col xs={14} sm={14} md={14} lg={8} xl={6}></Col>
             <Link to="/Home" >
         <Button  style={{textAlign:"center"}} type="primary">New Recharge</Button>
         
       </Link>
       <Col  xs={5} sm={5} md={5} lg={8} xl={15}></Col>
    </Row>
      </Card>
      </Col>
      <Col  xs={1} sm={1} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
}
