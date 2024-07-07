import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
const { TextArea } = Input;

function ModalForm({ open, setOpen, primaryAction, secondaryAction, tit = "", des = "", change }) {
  const [titulo, setTitulo] = useState(tit);
  const [descricao, setDescricao] = useState(des);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleDescricao = (e) => {
    setDescricao(e.target.value);
  };

  const handleSave = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      change({
        "nome": titulo,
        "descricao": descricao
      });
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      okText={primaryAction}
      cancelText={secondaryAction}
      title="Edit Task"
      open={open}
      onOk={handleSave}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form form={form}>
        <Form.Item
          label='Titulo'
          name='titulo'
          rules={[{
            required: true,
            message: "É necessário atribuir um titulo a task"
          }]}
        >
          <Input value={titulo} name='titulo' onChange={handleTitulo}></Input>
        </Form.Item>
        <Form.Item
          label='Descrição'
          name='descricao'
          rules={[{
            required: true,
            message: "É necessário atribuir uma descrição a task"
          }]}
        >
          <TextArea value={descricao} name='descricao' onChange={handleDescricao}></TextArea>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalForm;
