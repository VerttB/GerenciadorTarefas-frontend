import { EditOutlined } from '@ant-design/icons';
import ModalForm from 'src/components/ModalForm/ModalForm';
import React, { useState } from "react";
import './EditCard.scss'

function EditCard({ task, updateTask, index }) {
  const [open, setOpen] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSave = (updatedFields) => {
    const newTask = {
      ...task,
      ...updatedFields
    };
    updateTask(newTask, index);
    setOpen(false); // Fechar o modal após salvar
  };

  return (
    <div className="task-botoes">
      <button className='editar' onClick={handleOpen}><EditOutlined /></button>
      <ModalForm
        primaryAction={'Salvar'}
        secondaryAction={'Cancelar'}
        open={open}
        setOpen={setOpen}
        tit={task.nome}
        des={task.descricao}
        change={handleSave}
      />
    </div>
  );
}

export default EditCard;
