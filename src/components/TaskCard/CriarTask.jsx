import './CriarTask.scss';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState , useForm} from 'react';
import ModalForm from "src/components/ModalForm/ModalForm";

function CriarTask(props){
    const [open, setOpen] = useState(false);

    function handleOpen(){
      setOpen( () => !open);
    }
    return(
        <div className='task-botoes'>
            <button onClick={handleOpen} className="adicionar" color="green" type="primary">Adicionar <PlusOutlined /></button>
            <ModalForm change={props.change} primaryAction={'Criar'} secondaryAction={'Cancelar'} open={open} setOpen={ o => setOpen(o)}></ModalForm>
            </div>
    )
}

export default CriarTask;