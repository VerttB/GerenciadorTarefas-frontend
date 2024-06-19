
import {Card} from 'antd'

function TaskCard({tasks}){

    const taskList = tasks.map(task =>(
    <Card title={task.nome} extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>{task.descricao}</p>
    <p>{task.status}</p>
    <p>{task.data}</p>
    </Card>));
            

    console.log(taskList)
    return(
        <section>
            {taskList}
        </section>
    )
}

export default TaskCard;