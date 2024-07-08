
import { Input } from 'antd';
import './InputPerfil.scss';

function InputPerfil({valor, texto, pl = ""}){

    return (
      <div>
            <label className='label' htmlFor={valor}>{texto}</label>
            <Input placeholder={pl} className='input' name={valor} size='large' value={valor}></Input>
        </div>
    )
}

export default InputPerfil;