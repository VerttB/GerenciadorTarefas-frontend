
import { Input } from 'antd';
import './InputPerfil.scss';

function InputSenhaPerfil({valor, texto, change}){

    return (
      <div>
            <label className='label' htmlFor={valor}>{texto}</label>
            <Input.Password onChange={change} className='input' name={valor} size='medium' value={valor}></Input.Password>
        </div>
    )
}

export default InputSenhaPerfil;