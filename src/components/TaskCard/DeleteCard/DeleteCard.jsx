import { CloseOutlined } from '@ant-design/icons';
import './DeleteCard.scss'


function DeleteCard({deleteTask, index, deletedTask, icone} ){

    return (
        <button className='delete-button' onClick={ () => deleteTask(index, deletedTask)}>{icone}</button>
    )
}

export default DeleteCard;