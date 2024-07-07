import { CloseOutlined } from '@ant-design/icons';
import './DeleteCard.scss'


function DeleteCard({deleteTask, index, deletedTask} ){

    return (
        <button className='delete-button' onClick={ () => deleteTask(index, deletedTask)}><CloseOutlined></CloseOutlined></button>
    )
}

export default DeleteCard;