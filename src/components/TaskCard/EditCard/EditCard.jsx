import { EditOutlined } from '@ant-design/icons';
import ModalForm from 'src/components/ModalForm/ModalForm';
import React, { useState } from "react";
import './EditCard.scss'

function EditCard({ task, updateTask, index, icone }) {
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
      <button className='editar' onClick={handleOpen}>{icone}</button>
      <ModalForm
        modalTitulo={"Editar Atividade"}
        primaryAction={'Salvar'}
        secondaryAction={'Cancelar'}
        open={open}
        setOpen={setOpen}
        tit={task.titulo}
        des={task.descricao}
        dFinal = {task.dataFinal}
        loc = {task.loc}
        corTask = {task.corFundo}
        change={handleSave}
      />
    </div>
  );
}

export default EditCard;
