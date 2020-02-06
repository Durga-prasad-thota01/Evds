import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Form, Icon, Checkbox } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

function Mobile(props) {
let [mobileno, setMobileno] = useState('');
let [amount,setAmount] = useState('');
let [recharge,setRecharge]=useState({
  mobileno:'',
  amount:''
})
let [process,setProcess]=useState(false)
let [show,setShow]=useState(true);
let [recharged_datetime,setRecharged_datetime]= useState('');
let changeHandler=(e)=>{


  
// if(name=="mobileno"){
        //   setMobileno(val)
        //   // mbl=val;

    // }
    // if(name=="amount"){
    //   console.log(val)  

    //   //  amt=val;

    //   setAmount(val)

    // }


  setRecharge({
    ...recharge,
  [e.target.name]: e.target.value
  })
  let mob = parseInt(recharge.mobileno)
  let amt = recharge.amount;
  console.log(typeof(mob))
      //  let MobileNumber=/^\d{10}$/;
  // console.log(mob, amt)
  if ((/^\d{10}$/.test(mob))&&(amt>=1 && amt <= 100000)) {
      setShow(false)
  } else {
      setShow(true)
  }
  console.log(recharge.mobileno,recharge.amount);
}
  let submitHandler=(e)=>{
    setProcess(true)
    let mobileno=recharge.mobileno;
    let amount=recharge.amount;
    console.log(mobileno,amount)
    e.preventDefault(e);
    let data={
      "mobile_number":mobileno,
       "amount":amount,
      "recharged_datetime": moment().format(),
    }
    let key=localStorage.getItem("token");
    //  console.log(mobile,amt)  ;
    axios.post("https://evd-project.herokuapp.com/api/recharge/" ,data,
    {headers: {'content-type':'application/json','Authorization':`Token ${key}` }})
    
    .then(resp=>{ console.log(resp.data)
      setProcess(false)
      if(resp.data){     
        localStorage.setItem("mobile",mobileno);
        localStorage.setItem("amt",amount);
        props.history.push("/Sucess");       
      }
     
      else{
        props.history.push("/Fail"); 
      }
})
.catch(error => {
  props.history.push("/Fail");

  return error;
});
  }
    return (
        <div >
        {process?(
          <div>
          <Row>
        <Col xs={2} sm={2} md={6} lg={8} xl={8}> </Col>
        <Col xs={20} sm={20} md={12} lg={8} xl={8}>
             <h3> Please Wait....</h3>  
             </Col>
             <Col xs={2} sm={2} md={6} lg={8} xl={8}></Col>      
             </Row>
          </div>
        ):(
          <div>

         
        <Row>
        <Col xs={1} sm={1} md={6} lg={8} xl={8}> </Col>
        <Col xs={22} sm={22} md={12} lg={8} xl={8}>
        <h1>Recharge</h1>
          <Card  >
          <Form  onSubmit={submitHandler}>
        
<Form.Item>
       
<Input
placeholder="Mobile Number"
  type="tel"  
  pattern="^\d{10}$"
  maxLength="10"
  required
  name="mobileno"
  value={recharge.mobileno}
  onChange={changeHandler}
/>
</Form.Item>
<Form.Item>
<Input
 
  type="tel"
  placeholder="Amount"
  minLength="1"
  maxLength="6"
  name="amount"
  value={recharge.amount}
  required
  onChange={changeHandler}
/>

</Form.Item>
<Form.Item>

<Button type="primary" htmlType="submit" className="login-form-button" disabled={show?true:false}>
Recharge
</Button>

</Form.Item>
           </Form>
        </Card>
        </Col>
        <Col xs={1} sm={1} md={6} lg={8} xl={8}></Col>
      </Row>
      </div>
      )}
        </div>
    )
}
export default withRouter(Mobile);
