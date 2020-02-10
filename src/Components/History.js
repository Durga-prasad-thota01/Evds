import React,{useState,useEffect} from 'react';
import { Input } from 'antd';
import { Row, Col ,Card} from 'antd';
import { Modal, Button } from 'antd';
import { Menu, Icon,Form } from 'antd';
import { Collapse,Typography } from 'antd';
import 'antd/dist/antd.css'; 
import './History.css';
import moment from 'moment';
import axios from 'axios';
import { Link } from "react-router-dom";
const { Paragraph } = Typography;
const History=(props)=>{
let[data,setData]=useState([]);
let[visible,setVisible]=useState(false);
const { Panel } = Collapse;
useEffect(()=>{  
  if (!localStorage.length)   
  {
    props.history.push("./"); 
      }
},[])


useEffect(()=>{
  let key=localStorage.getItem("token");
    
    axios.get("https://evd-project.herokuapp.com/api/recharge/",

    
    {headers: {'content-type':'application/json','Authorization':`Token ${key}` }}
    )
        .then(resp=>{setData(resp.data)})
       
  },[])

function callback(key) {
  console.log(key);
}
 var expandIconPosition  ='right';
// const text = "Transaction ID: PNP12345";
// const status="Sucessfull  payment for" ;
   let showModal = () => {
      
        setVisible(true);
      };
   let   handleOk = e => {
    setVisible(false);
      };
    
   let   handleCancel = e => {
    setVisible(false);
      };
    return(
        <div>
            <Row>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}>  
      </Col>
      <Col xs={22} sm={22} md={12} lg={8} xl={8}>
      <h1>Transaction History</h1>
   { 
      data.map(i=>(
        <Collapse  onChange={callback}
      expandIconPosition={expandIconPosition} bordered={true}
    
     style={{borderRadius:"10px"}}  >
     <Row>
     <Col xs={1} sm={1} md={1} lg={1} xl={1} ></Col>
     <Col xs={22} sm={22} md={22} lg={22} xl={22} >
      <div >Successful Payment for {i.mobile_number}  </div>
      </Col>
  <Col xs={1} sm={1} md={1} lg={1} xl={1} ></Col>
  </Row>
<Row>
      <Col xs={1} sm={1} md={1} lg={1} xl={2} ></Col>
      <Col xs={9} sm={9} md={11} lg={11} xl={10} >
      <div>{i.amount} /-  </div>
      </Col>
      <Col xs={13} sm={13} md={11} lg={11} xl={10}>
      <div >{ moment(i.recharged_date_time).format('MMMM Do YYYY, h:mm a')}</div>
      </Col> <br/><br/>
      <Col xs={1} sm={1} md={1} lg={11} xl={2} ></Col>
    </Row>
    <Panel >
      <Row>
      <Col xs={0} sm={0} md={0} lg={0} xl={2}> </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Card title="Payment Details " bordered={true} style={{borderRadius:"10px",border:"1px solid black"}} >
        
<Row>
<Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col>
<Col xs={20} sm={20} md={22} lg={22} xl={22}>
<p>Transaction Id:</p> 
<Paragraph ellipsis>
{i.transaction_id}
</Paragraph>


   </Col>

   <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col>
  </Row>

      

         </Card>
        </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={2}> </Col>
       </Row>
     </Panel>
   </Collapse>
  ))}
</Col>
<Col xs={1} sm={1} md={6} lg={8} xl={8}>
        <div >
        </div>
</Col>
</Row>
        </div>
    )
}
export default History;