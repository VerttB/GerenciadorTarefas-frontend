
import {Card} from 'antd';
import PropTypes from "prop-types";
import "../assets/styles/components/task.scss";
function TaskCard({tasks}){

    const taskList = tasks.map(task =>(
    <Card className='cardItem' title={task.nome} >
    <p>{task.descricao}</p>
    <p>{task.status}</p>
    <p>{task.data}</p>
    </Card>));
            

    console.log(taskList)
    return(
        <section className='taskItems'>
            {taskList}
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