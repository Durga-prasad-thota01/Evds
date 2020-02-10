import React,{useEffect} from 'react';
import 'antd/dist/antd.css';
// import Login from './Login';
import Mobile from './Mobile';
import Profile from './Profile';
import History from './History';
import Logout from './Logout';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }
export default function Home(props) {
  useEffect(()=>{  
    if (!localStorage.length)   
    {
      props.history.push("./"); 
        }
  },[])
    return (
        <div >
        <Tabs onChange={callback} type="card">
        <TabPane tab="Recharge" key="1">
          <Mobile/>
        </TabPane>
        <TabPane tab="Profile" key="2">
          <Profile/>
        </TabPane>
        <TabPane tab="History" key="3">
          <History/>
        </TabPane>
        <TabPane tab="Logout" key="4">
        <Logout/>
      </TabPane>
      </Tabs>
        </div>
    )
}
