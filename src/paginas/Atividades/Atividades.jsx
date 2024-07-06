import TaskCard from "src/components/TaskCard/TaskCard";
import CriarTask from "src/components/TaskCard/CriarTask";
import './Atividades.scss';
import { Navigate,redirect, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";




function Atividades({user}){

    const [tasks, setTasks] = useState([]);
    
    const navigate = useNavigate();
    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            fetch('src/assets/jsonsdeteste/tasks.json')
            .then((response) => response.json())
            .then((data)=> {setTasks(data.filter( d => d.userId === user.userId))})
        }
        else{
            navigate('/cadastro');
        }
        console.log(tasks);

    }, [navigate]);


    return(
        <main className="atividades-page">
            <CriarTask change={t => setTasks( ta => [...ta, t])}></CriarTask>
            <section className='taskItems'>
                {tasks.map((t,i) => <TaskCard key={i} task={t}></TaskCard>)}
            </section>
        </main>
    )
}

export default Atividades