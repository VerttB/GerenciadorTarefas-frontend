
import React, { useState, useEffect } from 'react';

import { Modal, Form, Input, DatePicker } from 'antd';
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

function ModalForm({ open, setOpen, primaryAction, secondaryAction, tit = "", des = "", change, userId }) {


  const [titulo, setTitulo] = useState(tit);
  const [descricao, setDescricao] = useState(des);
  const [dataFinal, setDataFinal] = useState(dayjs().format(dateFormat))
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleDescricao = (e) => {
    setDescricao(e.target.value);
  };

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
      "corFundo":' #81ACF0',
      "userId": userId,
      "dataCriacao": '2024-01-01',
      "dataFinal": dataFinal

    });
  }

  const handleUpdate = () => {
    change({
      "titulo": titulo,
      "descricao": descricao
    });
  }

  const handleSave = () => {
    
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

          <TextArea showCount maxLength={150}  name='descricao' onChange={handleDescricao}></TextArea>
        </Form.Item>
        <Form.Item
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
      </Form>
    </Modal>
  );
}

export default ModalForm;