import TaskCard from "src/components/TaskCard/TaskCard";
import CriarTask from "src/components/TaskCard/CriarTask";
import './Atividades.scss';
import { Navigate,redirect, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback  } from "react";




function Atividades({user}){

    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

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
              ? { ...task, titulo: updatedTask.titulo, descricao: updatedTask.descricao, dataFinal: '2024-09-09'}
              : task
          )
        );
        console.log(updatedTask)
        const tarefaAtualizada =  {...updatedTask, user: { userId: user.userId }};
        const rota = `http://localhost:8080/api/${user.userId}/atividades/${updatedTask.tarefaId}/editar_task`;
        const metodo = 'PUT'
        sendDataBack(tarefaAtualizada,rota, metodo)
      };

      const deleteTask = (index) => {
        setTasks(prevTasks =>
          prevTasks.filter((_, i) => i !== index)
        );
        
      };

      const fetchDataGet = useCallback(() => {
        if (Object.keys(user).length !== 0) {
            console.log("fetch")
          fetch(`http://localhost:8080/api/${user.userId}/atividades`)
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
        const rota =`http://localhost:8080/api/${user.userId}/atividades/criar_task`;
        const metodo = "POST"
        console.log(rota)
        sendDataBack(newTaskData, rota,metodo);
     
    
        
      }
    
      
    
    
    useEffect(() => {
        fetchDataGet(); // Executar imediatamente ao montar o componente
      }, [fetchDataGet]);


      console.log(tasks)
      console.log("Usuario", user.userId)
    return(
        <main className="atividades-page">
            <CriarTask userId={user.userId} change={t => criarTask(t)}></CriarTask>
            <section className='taskItems'>
                {tasks.map((t,i) => <TaskCard  key={t.tarefaId} userId={user.userId} task={t} index={i} change={updateTask} deleteTask={deleteTask}></TaskCard>)}
            </section>
        </main>
    )
}

export default Atividades