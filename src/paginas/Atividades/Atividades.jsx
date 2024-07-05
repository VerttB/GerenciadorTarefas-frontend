import TaskCard from "src/components/TaskCard/TaskCard";
import { Navigate,redirect, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function Atividades({tasks, user}){

    
    useEffect(()=> {
        if(user === '') {redirect('/cadastro')}
        console.log(user === '');   
     })


    return(
        <TaskCard tasks={tasks}></TaskCard>
    )
}

export default Atividades