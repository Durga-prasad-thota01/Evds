import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { Link } from "react-router-dom";
import { Button } from 'antd';
export default function Payment(props) {
  let [mob,setMob]=useState('');
  let [amunt,setAmunt]=useState('');
  // let[pment,setPment]=useState('');
  let[ptype,setPtype]=useState('');
    const { Option } = Select;
   
     
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
      let handleClick=(e)=>{
        let mobile=mob;
        let amount=amunt;
        // let payment=pment;
        let paytype=ptype;
        console.log(mobile,amount,paytype)
      }
    return (
        <div>
         <Row>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
      <Col xs={22} sm={22} md={12} lg={8} xl={8}>
        <Card  style={{marginTop:"50px" }}>
            <h1>Payment</h1>
            <h3>{mob}</h3>
            <h3>{amunt}</h3>
            <select class="browser-default "  required
            onChange={(e)=>setPtype(e.target.value)} 
                   >
                     <option value="" disabled selected>Select Payment Type</option>
                     <option value="Cash">cash</option>
                     <option value="Card">card</option>
                    
     </select><br/><br/>
     <Link to="/Sucess" >

         <Button type="primary" onClick={handleClick}>Confirm</Button>
         </Link >

      </Card>
      </Col>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
}
