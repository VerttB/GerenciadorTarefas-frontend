import React, {useContext ,useEffect, useState} from 'react';
import { DisableForm } from "../Forms/Forms.jsx";
import {MailOutlined,LinkedinFilled,FacebookFilled,GoogleOutlined,LockOutlined ,UserOutlined} from '@ant-design/icons';
import { Input, Alert, Button, Form, Empty} from 'antd';
import './login.scss'


const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

 
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};


function Login(props){
  const [form] = Form.useForm();


  console.log("contexto", props.disable);


  const handleSubmit = () => {
    form.submit(
      props.setEmail(email),
      props.setSenha(senha));
  }

  return(
    <div className="formAreaBlock">
      <h2>Sign Up</h2>
        <div className='formIcons'>
          <GoogleOutlined className='googleIcon'/>
          <FacebookFilled className='facebookIcon' />
          <LinkedinFilled className='linkedinIcon'/>
      </div>


      <Form onFinish={handleSubmit} disabled={!props.disable} className='formLogin' form={form} name='formLogin' layout='vertical' autoComplete='off'>

        <Form.Item name="Email" validateTrigger="onBlur"
        rules={[{required: true}]} >
          <Input value={props.email} placeholder="Email" prefix={<MailOutlined  />} />
          </Form.Item>
          <Form.Item name="Senha" validateTrigger="onBlur"
          rules={[{required: true}]} >
        <Input.Password value={props.senha} onChange={() => setEmail()} placeholder="Senha" prefix={<LockOutlined/>}/>
        </Form.Item>

        <Form.Item className='formItem'>
          <SubmitButton className="submitButton" form={form}>Logar</SubmitButton>
        </Form.Item>
      </Form>    
    </div>
  )
}

export default Login