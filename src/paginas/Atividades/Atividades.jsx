import TaskCard from "src/components/TaskCard/TaskCard";
import { Navigate,redirect, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function Atividades({tasks, user}){

    
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user === '') {
            navigate('/cadastro');
        }
    }, [user, navigate]);


    return(
        <TaskCard tasks={tasks}></TaskCard>
    )
}

export default Atividades