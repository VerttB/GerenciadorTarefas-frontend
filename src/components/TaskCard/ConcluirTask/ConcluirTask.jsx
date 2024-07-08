
import { CheckCircleOutlined} from "@ant-design/icons";
import './ConcluirTask.scss'
function ConcluirTask({task, index, updateTask}){

    
    return(
       <button onClick={() => {task.status = "Concluída" ;updateTask(task, index)}}><CheckCircleOutlined className="icone" ></CheckCircleOutlined></button> 
    )
}

export default ConcluirTask;