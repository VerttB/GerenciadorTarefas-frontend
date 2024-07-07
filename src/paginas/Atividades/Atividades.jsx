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

      const fetchData = useCallback(() => {
        if (Object.keys(user).length !== 0) {
            console.log("fetch")
          fetch('/src/assets/jsonsdeteste/tasks.json')
            .then((response) => response.json())
            .then((data) => {
              setTasks(data.filter(d => d.userId === user.userId));
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          navigate('/cadastro');
        }
      }, [user, navigate]);
    
    
    
    useEffect(() => {
        fetchData(); // Executar imediatamente ao montar o componente
      }, [fetchData]);



    return(
        <main className="atividades-page">
            <CriarTask change={t => setTasks( ta => [...ta, t])}></CriarTask>
            <section className='taskItems'>
                {tasks.map((t,i) => <TaskCard key={t.nome} task={t} index={i} change={updateTask} deleteTask={deleteTask}></TaskCard>)}
            </section>
        </main>
    )
}

export default Atividades