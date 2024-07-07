
import EditCard from "./EditCard/EditCard";
import "./TaskCard.scss";
function TaskCard({task, change, index}){
    return(
            <div className='card-conteiner'>
                <div className='card-header'>
                <h4>{task.nome}</h4>
                <EditCard task={task} index={index} updateTask={change}></EditCard>
                </div>

                <div className='card-descricao'>
                    <p>{task.descricao}</p>
                    <p>{task.data}</p>

                    <div className='card-status'>
                    <p>{task.status}</p>
                    <div style={{backgroundColor: task.status === 'Em andamento' ? 'orange' :
                                                   task.status === 'Concluida' ? 'green' : 'red'
                          }} className='bola'></div>

                    </div>
                </div>
            </div>
            
    )
}

export default TaskCard;