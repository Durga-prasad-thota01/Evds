import React,{useState,useEffect} from 'react';
import { Typography } from 'antd';
import { Row, Col ,Card,Menu,Button,Icon,Form} from 'antd';
import axios from 'axios';

const { Paragraph } = Typography;
const { Text } = Typography;
const { Title } = Typography;
export default function Profile (){
    let[username,setUsername]=useState('');
    let[email,setEmail]=useState('');
    let [edit,setEdit]=useState(true);
    let [hide,setHide]=useState(true)
    let[profile,setProfile]=useState([]);
    let name="sreedhar"

    let key=localStorage.getItem("token");
useEffect(()=>{
axios.get("https://evd-project.herokuapp.com/api/current_user_profile/",
{headers: {'content-type':'application/json','Authorization':`Token ${key}` }})
.then (resp=>setProfile(resp.data))
},[])


let editClickHandler=(username,email)=>{
  setEdit(false);
  setHide(false);
setUsername(username)
setEmail(email)
}
let handleSubmit=()=>{
  // alert(username)
}
   return(
        <div >
         <Row>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
      <Col xs={22} sm={22} md={12} lg={8} xl={8}>
     
        
      <h1>Profile</h1>
   
      <Card >
      
         {hide?(
           <div>
           <h3>{profile.username}</h3><br></br>
           <h3>{profile.email}</h3><br></br> 
           </div>
         ):(
           <div>
           <from onSubmit={handleSubmit}>
           <input 
           value={profile.email}
           type="text"
           onChange={e=>setEmail(e.target.value)} >
           
           </input> <br/><br/>
           <input
           type="text"
           onChange={e=>setUsername(e.target.value)}>
           </input>  <br/><br/>
           
           </from>
           </div>
         )}
          <div>
       
       </div>
       
     
   
      { edit? (
        //  <Button onClick={editClickHandler}>edit</Button>
        <Icon style={{fontSize:"x-large"}} onClick={e=>editClickHandler(profile.username,profile.email)} type="edit" />
         ):(
        //  <Button>update</Button>
        <Icon style={{fontSize:"x-large",float:"right"}} type="save" />)
      }
    </Card>
    
    
      </Col>
      <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
}
