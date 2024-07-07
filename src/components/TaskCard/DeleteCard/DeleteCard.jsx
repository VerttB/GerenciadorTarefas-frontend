import { CloseOutlined } from '@ant-design/icons';
import './DeleteCard.scss'


function DeleteCard({deleteTask, index} ){

    return (
        <button className='delete-button' onClick={ () => deleteTask(index)}><CloseOutlined></CloseOutlined></button>
    )
}

export default DeleteCard;