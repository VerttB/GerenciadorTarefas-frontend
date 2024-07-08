import {MailOutlined,LinkedinFilled,FacebookFilled,GoogleOutlined,LockOutlined ,UserOutlined} from '@ant-design/icons';
import { Input, Space, Button, Form } from 'antd';
import './login.scss'
import { DisableForm } from "../Forms/Forms";
import { useEffect, useState } from 'react';

function Cadastro(props){
  return(
    <div id="div-cadastro" className="formAreaBlock cadastro" disabled="true">
      <h2>Sign Up</h2>
        <div className='formIcons'>
          <GoogleOutlined className='googleIcon'/>
          <FacebookFilled className='facebookIcon' />
          <LinkedinFilled className='linkedinIcon'/>
      </div>
    

    <Form id='formCadastro' name='formCadastro' disabled={props.disable}>

      <Form.Item name="Nome" validateTrigger="onBlur" 
      rules={[{
        required: true,
      }]}>

       <Input value={props.nome} placeholder="Nome" prefix={<UserOutlined  />} />
       </Form.Item>

       <Form.Item name="Email" validateTrigger="onBlur"  
      rules={[{
        required: true,
      }]}>
       <Input value={props.email} placeholder="Email" prefix={<MailOutlined  />} />
       </Form.Item>

       <Form.Item  name="Senha" validateTrigger="onBlur" 
      rules={[{
        required: true,
      }]}>
      <Input.Password value={props.senha} placeholder="Senha" prefix={<LockOutlined/>}/>
     </Form.Item>
      </Form>
      
    </div>
  )
}

export default Cadastro