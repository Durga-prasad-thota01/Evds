import React,{useState} from 'react';
import { Typography } from 'antd';
import { Row, Col ,Card,Menu,Button,Icon,Form} from 'antd';

const { Paragraph } = Typography;
const { Text } = Typography;
const { Title } = Typography;
export default function Profile (){
    let[name,setName]=useState('');
    let[email,setEmail]=useState('');
    let [edit,setEdit]=useState(true)

    console.log(name,email)
    let editClickHandler=()=>{
        setEdit(false);
    }
   return(
        <div >
         <Row>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
      <Col xs={22} sm={22} md={12} lg={8} xl={8}>
      <h1>Profile</h1>
      <Card >
      <Form>
       <Title>Profile</Title>
       <h3 onchange={e=>setName(e.target.value)}  >Name</h3><br></br>
       <h3 onchange={e=>setEmail(e.target.value)}  >email</h3><br></br> 
      { edit? (
      //  <Button onClick={editClickHandler}>edit</Button>
      <Icon style={{fontSize:"x-large"}} onClick={editClickHandler} type="edit" />
      ):(
      //  <Button>update</Button>
      <Icon style={{fontSize:"x-large",float:"right"}} type="save" />)
    }
      </Form>
    </Card>
      </Col>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
}
