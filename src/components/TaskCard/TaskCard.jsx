
import PropTypes from "prop-types";
import "./TaskCard.scss";
import { EditOutlined } from '@ant-design/icons';
function TaskCard({tasks}){
  

    return(
        <section className='taskItems'>
            
            {tasks.map((task,index) =>(
            <div key={index} className='card-conteiner'>
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
            ))}
        </section>
    )
}

TaskCard.propTypes = {
    nome: PropTypes.string,
    descricao: PropTypes.string,
    status: PropTypes.string,
    data: PropTypes.string
}

TaskCard.defaultProps = {
    nome:"",
    descricao:"",
    status:"",
    data:""
}

export default TaskCard;