
import ConcluirTask from "./ConcluirTask/ConcluirTask";
import DeleteCard from "./DeleteCard/DeleteCard";
import EditCard from "./EditCard/EditCard";
import ReactDom from 'react-dom';
import "./TaskCard.scss"
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// import from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";



function TaskCard({task, change, index, deleteTask, userId}){

    return(
            <div className='card-conteiner'>
                <div className='card-header' style={{backgroundColor: task.corFundo}}>
                <h4>{task.titulo}</h4>
                <div className="funcoes">
                <EditCard userId={userId} task={task} index={index} updateTask={change}></EditCard>
                <DeleteCard  deleteTask={deleteTask} deletedTask={task} index={index}></DeleteCard>
                <ConcluirTask icone= {<FontAwesomeIcon icon={faCircleCheck} />} task={task} updateTask={change}></ConcluirTask>
                </div>
                </div>

                <div className='card-descricao'>
                    <p>{task.descricao}</p>
                    <p>{task.dataCriacao} --- {task.dataFinal}</p>

                    <div className='card-status'>
                    <p>{task.status}</p>
                    <div style={{backgroundColor: task.status === 'Em andamento' ? 'orange' :
                                                   task.status === 'Concluída' ? 'green' :
                                                   task.status === 'Pendente' ? 'blue' : 'red'
                          }} className='bola'></div>

                    </div>
                </div>
            </div>
            
    )
}

export default TaskCard;