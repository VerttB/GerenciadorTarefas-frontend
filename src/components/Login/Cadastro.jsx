import { MailOutlined, LinkedinFilled, FacebookFilled, GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Button, Form } from 'antd';
import './login.scss';
import React, { useState } from 'react';

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

function Cadastro({ setUser,nome, setNome, email, setEmail, senha, setSenha, disable }) {
  const [form] = Form.useForm();

  const handleCadastro = (usuario) => {
    fetch('http://localhost:8080/GerenciadorTarefas/cadastro', {    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    })
    .then((response) => response.json())
    .then(data => {
      console.log(usuario);
      console.log('data')
      setUser(data);
    })
    .catch((error) => console.error('Erro:', error));
  };

  const handleSubmit = (values) => {
    const usuario = {
      nome: values.nome,
      email: values.email,
      senha: values.senha,
    };
    handleCadastro(usuario);
  };

  return (
    <div className="formAreaBlock cadastro" disabled={disable}>
      <h2>Sign Up</h2>
      <div className='formIcons'>
        <GoogleOutlined className='googleIcon' />
        <FacebookFilled className='facebookIcon' />
        <LinkedinFilled className='linkedinIcon' />
      </div>
    
      <Form form={form} disabled={disable} onFinish={handleSubmit} name='formCadastro' layout='vertical' autoComplete='off'>
        <Form.Item
          name="nome"
          initialValue={nome}
          validateTrigger="onBlur"
          rules={[{ required: true, message: 'Por favor, insira seu nome' }]}
        >
          <Input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        
        <Form.Item
          name="email"
          initialValue={email}
          validateTrigger="onBlur"
          rules={[{ required: true, message: 'Por favor, insira seu email' }]}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            prefix={<MailOutlined />}
          />
        </Form.Item>
        
        <Form.Item
          name="senha"
          initialValue={senha}
          validateTrigger="onBlur"
          rules={[{ required: true, message: 'Por favor, insira sua senha' }]}
        >
          <Input.Password
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        
        <Form.Item className='formItem'>
          <SubmitButton form={form}>Cadastrar</SubmitButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Cadastro;
