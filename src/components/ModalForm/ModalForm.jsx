
import React, { useState, useEffect } from 'react';

import { Modal, Form, Input, DatePicker, ColorPicker, Space } from 'antd';
const { TextArea } = Input;
const dateFormat = 'YYYY-MM-DD';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;

function ModalForm({modalTitulo, open, setOpen, primaryAction, secondaryAction, tit = "", des = "", dFinal = dayjs().format(dateFormat), change, userId }) {


  const [titulo, setTitulo] = useState(tit);
  const [descricao, setDescricao] = useState(des);
  const [dataFinal, setDataFinal] = useState(dFinal);
  const [cor, setCor] = useState('#81ACF0');
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleDescricao = (e) => {
    setDescricao(e.target.value);
  };

  const handleCor = (color) => {
    setCor(color.toHexString());
   
  }

  const handleDataFinal = (date,dateString) => {
    setDataFinal(dateString);
  }

  useEffect(() => {
    form.resetFields();
  }, [setOpen]);

  const handleCreate = () => {
    change({
      "titulo": titulo,
      "descricao": descricao,
      "status": "Pendente",
      "corFundo": cor,
      "userId": userId,
      "dataCriacao": '2024-01-01',
      "dataFinal": dataFinal
    });
  }

  const handleUpdate = () => {
    change({
      "titulo": titulo,
      "descricao": descricao,
      "dataFinal": dataFinal,
      "corFundo": cor
    });
  }

  const handleSave = () => {
    form.validateFields().then(()=>{
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
      title={modalTitulo}
      open={open}
      onOk={handleSave}
      confirmLoading={confirmLoading}
      onCancel={handleClose}
      >

      <Form form={form} layout='vertical'>
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

          <TextArea showCount maxLength={150}  name='descricao' onChange={handleDescricao}></TextArea>
        </Form.Item>
        <Space direction='horizontal'>
        <Form.Item
          layout='horizontal'
          label='Prazo'
          name='prazo'
          initialValue={dayjs(dataFinal, dateFormat)}
          rules={[{
            required: true,
            message: "É necessário atribuir um prazo a tarefa"
          }]}
        >
          <DatePicker onChange={handleDataFinal} format={dateFormat}></DatePicker>
        </Form.Item>
        </Space>
        <Space size={'large'} direction='horizontal'>
        <Form.Item layout='horizontal'
          label='Cor'
          name='Cor'
          initialValue={cor}
          rules={[{
            required: false,
          }]}
        >

          <ColorPicker format='hex' value={cor} onChange={handleCor} 
          showText
           ></ColorPicker>
        </Form.Item>
        </Space>
        
      </Form>
    </Modal>
  );
}

export default ModalForm;