import React, {useContext ,useEffect} from 'react';
import { DisableForm } from "./Forms.jsx";
import {MailOutlined,LinkedinFilled,FacebookFilled,GoogleOutlined,LockOutlined ,UserOutlined} from '@ant-design/icons';
import { Input, Alert, Button, Form} from 'antd';
import '../assets/styles/components/login.scss'


const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
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


function Login(){
  const [form] = Form.useForm();
  const disable = useContext(DisableForm);


  console.log(typeof(disable));



  return(
    <div className="formAreaBlock">
      <h2>Sign Up</h2>
        <div className='formIcons'>
          <GoogleOutlined className='googleIcon'/>
          <FacebookFilled className='facebookIcon' />
          <LinkedinFilled className='linkedinIcon'/>
      </div>


      <Form disabled={!disable} className='formLogin' form={form} name='formLogin' layout='vertical' autoComplete='off'>

        <Form.Item name="Email" validateTrigger="onBlur"
        rules={[{required: true}]} >
          
          <Input  placeholder="Email" prefix={<MailOutlined  />} />
          </Form.Item>
          <Form.Item name="Senha" validateTrigger="onBlur"
          rules={[{required: true}]} >
        <Input.Password placeholder="Senha" prefix={<LockOutlined/>}/>
        </Form.Item>
        <Form.Item className='formItem'>
        <SubmitButton className="logarButton" form={form}>Logar</SubmitButton>
        </Form.Item>
      </Form>    
    </div>
  )
}

export default Login