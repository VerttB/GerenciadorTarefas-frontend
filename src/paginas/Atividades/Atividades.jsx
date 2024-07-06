import TaskCard from "src/components/TaskCard/TaskCard";
import CriarTask from "src/components/TaskCard/CriarTask";
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
        <>
        <CriarTask></CriarTask>
        <TaskCard tasks={tasks}></TaskCard>
    </>
    )
}

export default Atividades