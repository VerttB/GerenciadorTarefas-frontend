
import PropTypes from "prop-types";
import "./TaskCard.scss";

function TaskCard({tasks}){

    return(
        <section className='taskItems'>

            {tasks.map((task,index) =>(
            <div key={index} className='card-conteiner'>
                <div className='card-header'>
                <h4>{task.nome}</h4>
                </div>
                <div className='card-descricao'>
                    <p>{task.descricao}</p>
                    <p>{task.data}</p>
                    <div className='card-status'>
                    <div className='bola'></div>
                    <p>{task.status}</p>
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