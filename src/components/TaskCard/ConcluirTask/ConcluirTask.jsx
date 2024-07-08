
import { CheckCircleOutlined} from "@ant-design/icons";
function ConcluirTask({task, index, updateTask}){

    
    return(
       <button onClick={() => {task.status = "Concluída" ;updateTask(task, index)}}><CheckCircleOutlined></CheckCircleOutlined></button> 
    )
}

export default ConcluirTask;