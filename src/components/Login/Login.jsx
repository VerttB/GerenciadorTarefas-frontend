import React, { useEffect, useState, useCallback  } from 'react';
import { useNavigate } from "react-router-dom";
import { MailOutlined, LockOutlined, GoogleOutlined, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import { Input, Button, Form } from 'antd';
import './login.scss';

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = useState(false);
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

function Login({ setUser, email, setEmail, senha, setSenha, disable }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const navegar = useCallback(() => {

      navigate('/atividades');
    
  }, [navigate]);


  const handleLogin = (usuario) => {
    fetch('http://localhost:8080/GerenciadorTarefas/login', {    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    })
    .then((response) => response.json())
    .then(data => {
      setUser(data)
      setTimeout(() => navegar(),50);
    })
    .catch((error) => console.error('Erro:', error));
  };

  useEffect( ()=> {
    form.resetFields();
  }, [disable]);

  const handleSubmit = (values) => {
    const usuario = {
      email: values.Email,
      senha: values.Senha,
    };
   
   
    handleLogin(usuario);
  };

  return (
    <div id="div-login" className="formAreaBlock">
      <h2>Login</h2>
      <div className='formIcons'>
        <GoogleOutlined className='googleIcon' />
        <FacebookFilled className='facebookIcon' />
        <LinkedinFilled className='linkedinIcon' />
      </div>

      <Form
        id='formLogin'
        onFinish={handleSubmit}
        disabled={!disable}
        className='formLogin'
        form={form}
        name='formLogin'
        layout='vertical'
        autoComplete='off'
      >
        <Form.Item
          name="Email"
          validateTrigger="onBlur"
          rules={[{ required: true, message: "Por favor, insira seu email" }]}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            prefix={<MailOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="Senha"
          validateTrigger="onBlur"
          rules={[{ required: true, message: "Por favor, insira sua senha" }]}
        >
          <Input.Password
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item className='formItem'>
          <SubmitButton form={form}>Logar</SubmitButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
