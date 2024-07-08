import TaskCard from "src/components/TaskCard/TaskCard";
import CriarTask from "src/components/TaskCard/CriarTask";
import './Atividades.scss';
import { Navigate,redirect, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback  } from "react";
import { Input, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';

function Atividades({user}){

    const [tasks, setTasks] = useState([]);
    const [nomeAprocurar, setNomeAprocurar] = useState("");
    const navigate = useNavigate();

    const handleNomeAprocurar = (e) =>{
      setNomeAprocurar(prevNome => e.target.value);
    }

    function sendDataBack(tarefa, rota, metodo){
      fetch(rota, {
        
        method: metodo,
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(tarefa),
  })
  .then((response) => response.json())
    .then(data => console.log('Resposta:', data))
    .catch((error) => console.error());
    }

    const updateTask = (updatedTask, index) => {
        console.log(updatedTask.tarefaId)
        setTasks(prevTasks =>
          prevTasks.map((task,i) =>
            i === index
              ? { ...task, titulo: updatedTask.titulo, descricao: updatedTask.descricao, dataFinal: updatedTask.dataFinal }
              : task
          )
        );
        console.log(updatedTask)
        const tarefaAtualizada =  {...updatedTask, user: { userId: user.userId }};
        const rota = `http://localhost:8080/GerenciadorTarefas/${user.userId}/atividades/${updatedTask.tarefaId}/editar_task`;
        const metodo = 'PUT'
        sendDataBack(tarefaAtualizada,rota, metodo)
      };

      const deleteTask = (index, deletedTask) => {
        setTasks(prevTasks =>
          prevTasks.filter((_, i) => i !== index)
        );

        console.log(deletedTask)
        const rota = `http://localhost:8080/GerenciadorTarefas/${user.userId}/atividades/${deletedTask.tarefaId}/remover_task`
        const metodo = "DELETE"
        sendDataBack(deletedTask,rota,metodo)

        
      };

      const fetchDataGet = useCallback(() => {
        if (Object.keys(user).length !== 0) {
            console.log("fetch")
          fetch(`http://localhost:8080/GerenciadorTarefas/${user.userId}/atividades`)
            .then((response) => response.json())
            .then((data) => {
              setTasks(data);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          navigate('/cadastro');
        }
      }, [user, navigate]);

      

      const criarTask = (novaTask) => {
        console.log(novaTask);
        setTasks(t => [...t, novaTask])
        const newTaskData = {...novaTask, user : { userId: user.userId}};
        const rota =`http://localhost:8080/GerenciadorTarefas/${user.userId}/atividades/criar_task`;
        const metodo = "POST"
        console.log(rota)
        sendDataBack(newTaskData, rota,metodo);
        setTimeout(fetchDataGet, 50)
      }

      const procurarNome =() => {
        const rota = "http://localhost:8080/GerenciadorTarefas/";
        const metodo = "POST"
      }
    
      
    
    
    useEffect(() => {
        fetchDataGet(); 
      }, [fetchDataGet]);

    return(
        <main className="atividades-page">
            <div className="page-functions">
              <Space dir="horizontal">
            <Input onChange={e => handleNomeAprocurar(e)} value={nomeAprocurar} className='input' size='large' placeholder="Insira o Nome da Task"></Input>
             <button onClick={procurarNome}><SearchOutlined></SearchOutlined></button>
             </Space>
                </div>
            <section className='taskItems'>
                {tasks.map((t,i) => <TaskCard  key={t.tarefaId} userId={user.userId} task={t} index={i} change={updateTask} deleteTask={deleteTask}></TaskCard>)}
                <CriarTask userId={user.userId} change={t => criarTask(t)}></CriarTask>
            </section>
        </main>
    )
}

export default Atividades