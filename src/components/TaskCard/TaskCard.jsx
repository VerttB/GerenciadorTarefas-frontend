
import {Card} from 'antd';
import PropTypes from "prop-types";
import "./task.scss";

function TaskCard({tasks}){

    return(
        <section className='taskItems'>
            {tasks.map((task, index) =>(
                <Card key={index} className='cardItem' title={task.nome} >
                <p>{task.descricao}</p>
                <p>{task.status}</p>
                <p>{task.data}</p>
                </Card>))}
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
    nome:" ",
    descricao:"",
    status:"",
    data:""
}

export default TaskCard;