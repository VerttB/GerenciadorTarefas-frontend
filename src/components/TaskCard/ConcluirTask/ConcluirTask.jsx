
import { CheckCircleOutlined} from "@ant-design/icons";
import './ConcluirTask.scss'
function ConcluirTask({task, index, updateTask, icone}){

    
    return(
       <button className="concluir" onClick={() => {task.status = "Concluída" ;updateTask(task, index)}}>{icone}</button> 
    )
}

export default ConcluirTask;