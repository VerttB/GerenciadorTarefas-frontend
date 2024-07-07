import TaskCard from "src/components/TaskCard/TaskCard";
import CriarTask from "src/components/TaskCard/CriarTask";
import './Atividades.scss';
import { Navigate,redirect, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback  } from "react";




function Atividades({user}){

    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    const updateTask = (updatedTask, index) => {
        console.log(updatedTask)
        setTasks(prevTasks =>
          prevTasks.map((task,i) =>
            i === index
              ? { ...task, nome: updatedTask.nome, descricao: updatedTask.descricao }
              : task
          )
        );
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

        fetch(`http://localhost:8080/api/${user.userId}/atividades/criar_task`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTaskData),
    })
    .then((response) => response.json())
    .then(data => console.log('Resposta:', data))
    .catch((error) => console.error());
        
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
                {tasks.map((t,i) => <TaskCard  key={t} task={t} index={i} change={updateTask} deleteTask={deleteTask}></TaskCard>)}
            </section>
        </main>
    )
}

export default Atividades