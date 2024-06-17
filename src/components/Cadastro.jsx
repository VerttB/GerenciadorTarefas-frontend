import React from 'react';
import {MailOutlined,LinkedinFilled,FacebookFilled,GoogleOutlined,LockOutlined ,UserOutlined} from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import '../assets/styles/components/login.scss'

function App(){
  return(
    <div className="loginForm">
      <h2>Sign Up</h2>
        <div className='loginIcons'>
          <GoogleOutlined className='googleIcon'/>
          <FacebookFilled className='facebookIcon' />
          <LinkedinFilled className='linkedinIcon'/>
      </div>
      <Space direction='vertical'>
       <Input placeholder="Nome" prefix={<UserOutlined  />} />
        <Space direction='vertical'>
       <Input placeholder="Email" prefix={<MailOutlined  />} />
       <Space>
      <Input.Password placeholder="Senha" prefix={<LockOutlined/>}/>
      </Space>
      </Space>  
      </Space>

      <Button>Sign Up</Button>
  
      
   
    </div>
  )
}

export default App