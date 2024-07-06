import './CriarTask.scss';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useState , useForm} from 'react';
import { Modal, Form, Input, Button } from 'antd';
const {TextArea} = Input;

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
    function cria(){
        props.change({
            "nome": "Tarefa 19",
            "descricao": "Descrição da tarefa 19",
            "status": "Em andamento",
            "data": "2024-06-17",
            "userId": 3
        })
    }

    const showModal = () => {
      setOpen(true);
    };
    const handleEnviar = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
  
        form.submit(props.change({
          "nome": titulo,
          "descricao": descricao,
          "status": "Pendente",
          "data": data.getDate(),
          
        }));

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
     <Form form={form}>
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
            {/* <Button type="primary" danger>Deletar <CloseOutlined /></Button> */}
            </div>
    )
}

export default CriarTask;