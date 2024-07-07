
import DeleteCard from "./DeleteCard/DeleteCard";
import EditCard from "./EditCard/EditCard";
import "./TaskCard.scss";
function TaskCard({task, change, index, deleteTask}){

    return(
            <div className='card-conteiner'>
                <div className='card-header' style={{backgroundColor: task.corFundo}}>
                <h4>{task.titulo}</h4>
                <div className="funcoes">
                <EditCard task={task} index={index} updateTask={change}></EditCard>
                <DeleteCard deleteTask={deleteTask} index={index}></DeleteCard>
                </div>
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