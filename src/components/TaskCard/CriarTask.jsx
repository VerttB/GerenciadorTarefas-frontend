import './CriarTask.scss';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState , useForm} from 'react';
import { Modal, Form, Input, Button } from 'antd';
const {TextArea} = Input;


function CriarTask(props){

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data,setData] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();

    function handleTitulo(e){
      setTitulo(e.target.value)
    }

    function handleDescricao(e){
      setDescricao(e.target.value)
    }
 
    const showModal = () => {
      setOpen(true);
    };

    const handleSubmit = () => {
      form.submit(props.change({
        "nome": titulo,
        "descricao": descricao,
        "status": "Pendente",
        "data": data.getDate(),

      }));
    }
    const handleEnviar = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        handleSubmit();

      }, 2000);
    };

    const handleCancelar = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };

    return(
        <div className='task-botoes'>
            <button onClick={showModal} className="adicionar" color="green" type="primary">Adicionar <PlusOutlined /></button>
            <Modal
                okText='Enviar'
                cancelText="Cancelar"
                title="Title"
                open={open}
                onOk={handleEnviar}
                confirmLoading={confirmLoading}
                onCancel={handleCancelar}>
     <Form form={form} preserve={false}>
        <Form.Item
        label='Titulo'
        name='titulo'
        rules={[{required: true,
                message: "É necessário atribuir um titulo a task"
        }]}>
        <Input name='titulo' onChange={() => handleTitulo(event)}></Input>
        </Form.Item>
        <Form.Item
        label='Descrição'
        name='descricao'
        rules={[{required: true,
                message: "É necessário atribuir uma descrição a task"
        }]}>
        <TextArea name='descricao' onChange={() => handleDescricao(event)}></TextArea>
        </Form.Item>
     </Form>
      </Modal>
            </div>
    )
}

export default CriarTask;