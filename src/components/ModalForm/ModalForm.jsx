import React, { useState, useEffect } from 'react';
import { Modal, Form, Input } from 'antd';
const { TextArea } = Input;

function ModalForm({ open, setOpen, primaryAction, secondaryAction, tit = "", des = "", change }) {
  const dataAtual = new Date();
  const dataFormatada = `${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1}-${dataAtual.getDate()}`
  const [titulo, setTitulo] = useState(tit);
  const [descricao, setDescricao] = useState(des);
  const [data,setData] = useState(dataFormatada)
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('titulo','');
    form.setFieldValue('descricao','');
  },[setOpen]);

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleDescricao = (e) => {
    setDescricao(e.target.value);
  };

  const handleCreate = () => {
    change({
      "nome": titulo,
      "descricao": descricao,
      "status": "Pendente",
      "data": data,

    });
  }

  const handleUpdate = () => {
    change({
      "nome": titulo,
      "descricao": descricao
    });
  }

  const handleSave = () => {
    form.validateFields().then(() => {
      setConfirmLoading(true);
      setTimeout(() => {
        setConfirmLoading(false);
        if(tit === "") handleCreate(); else handleUpdate();
        handleClose();
      }, 1000);
    });
  };

  const handleClose = () => {
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
      onCancel={handleClose}
      >

      <Form form={form}>
        <Form.Item
          label='Titulo'
          name='titulo'
          initialValue={titulo}
          rules={[{
            required: true,
            message: "É necessário atribuir um titulo a task"
          }]}
        >
        
          <Input name='titulo' onChange={handleTitulo}></Input>
        
        </Form.Item>
        <Form.Item
          label='Descrição'
          name='descricao'
          initialValue={descricao}
          rules={[{
            required: true,
            message: "É necessário atribuir uma descrição a task"
          }]}
        >
          <TextArea  name='descricao' onChange={handleDescricao}></TextArea>
        
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalForm;
