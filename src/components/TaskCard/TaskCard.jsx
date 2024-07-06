
import "./TaskCard.scss";
import { EditOutlined } from '@ant-design/icons';
function TaskCard({task}){
  
    return(
            <div className='card-conteiner'>
                <div className='card-header'>
                <h4>{task.nome}</h4>
                <EditOutlined></EditOutlined>
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