import React ,{useEffect}from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
 function Logout(props) {
    useEffect(()=>{  
        if (!localStorage.length)   
        {
          props.history.push("./"); 
            }
      },[])


    let LogoutHandler=()=>{
        if(window.confirm("are you sure you want to logout!"))
        {      localStorage.clear();  
             props.history.push("./");    
             } 
    }
    return (
        <div>
         <Row>
      <Col  xs={1} sm={1} md={6} lg={8} xl={8}></Col>
      <Col  xs={22} sm={22} md={12} lg={8} xl={8}>
        <Card  style={{marginTop:"50px" }}>
              <h2>confirm Logout</h2>
         <Button type="primary" onClick={LogoutHandler}>Logout</Button>
      </Card>
      </Col>
      <Col  xs={1} sm={1} md={6} lg={8} xl={8}></Col>
    </Row>
        </div>
    )
}
export default withRouter(Logout)
