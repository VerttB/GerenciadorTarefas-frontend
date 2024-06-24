import React, {useContext} from 'react';
import {MailOutlined,LinkedinFilled,FacebookFilled,GoogleOutlined,LockOutlined ,UserOutlined} from '@ant-design/icons';
import { Input, Space, Button, Form } from 'antd';
import '../assets/styles/components/login.scss'
import { DisableForm } from "./Forms.jsx";

function App(){

  const disable = useContext(DisableForm);
  console.log("cadastro:" ,disable);

  return(
    <div className="formAreaBlock cadastro" disabled="true">
      <h2>Sign Up</h2>
        <div className='formIcons'>
          <GoogleOutlined className='googleIcon'/>
          <FacebookFilled className='facebookIcon' />
          <LinkedinFilled className='linkedinIcon'/>
      </div>
    

    <Form name='formCadastro' disabled={disable}>

      <Form.Item name="Nome" validateTrigger="onBlur" 
      rules={[{
        required: true,
      }]}>

       <Input placeholder="Nome" prefix={<UserOutlined  />} />
       </Form.Item>

       <Form.Item name="Email" validateTrigger="onBlur"  
      rules={[{
        required: true,
      }]}>
       <Input placeholder="Email" prefix={<MailOutlined  />} />
       </Form.Item>

       <Form.Item name="Senha" validateTrigger="onBlur" 
      rules={[{
        required: true,
      }]}>
      <Input.Password placeholder="Senha" prefix={<LockOutlined/>}/>
     </Form.Item>
      </Form>
      
  
      
   
    </div>
  )
}

export default App