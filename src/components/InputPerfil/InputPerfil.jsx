
import { Input } from 'antd';
import './InputPerfil.scss';

function InputPerfil({valor, texto, change}){

    return (
      <div>
            <label className='label' htmlFor={valor}>{texto}</label>
            <Input onChange={change} className='input' name={valor} size='large' value={valor}></Input>
        </div>
    )
}

export default InputPerfil;