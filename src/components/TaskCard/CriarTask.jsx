import './CriarTask.scss';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Modal, Form, Input } from 'antd';

function CriarTask(){
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data,setData] = useState("")
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
      setOpen(true);
    };
    const handleEnviar = () => {
      
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
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
                title="Title"
                open={open}
                onOk={handleEnviar}
                confirmLoading={confirmLoading}
                onCancel={handleCancelar}>
     <Form>
        <Form.Item
        label='Titulo'
        name='titulo'
        rules={[{required: true,
                message: "É necessário atribuir um titulo a task"
        }]}>
        <Input name='titulo'></Input>
        </Form.Item>
        <Form.Item
        label='Descrição'
        name='descricao'
        rules={[{required: true,
                message: "É necessário atribuir uma descrição a task"
        }]}>
        <Input name='descricao' rows={4}></Input>
        </Form.Item>
     </Form>
      </Modal>
            {/* <Button type="primary" danger>Deletar <CloseOutlined /></Button> */}
            </div>
    )
}

export default CriarTask;