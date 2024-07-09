
import './header.scss'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

function naoLogadoLinks() {
    return (
        <>
            <li><Link id='signUp' to='/cadastro'>SIGN UP</Link></li>
            <li><Link id='signIn' to='/login'>SIGN IN</Link></li>
        </>
    )
}

function Header({ user }) {

    return (
        <>
            <header>
                <div className="header_empresa_info">
                    <Link className='link' to='/inicio'>
                        <p>QuickTasks</p>
                    </Link>
                </div>

                <div className='header_extras'>
                    <ul>
                    <li><Link className='link' id='sobre' to="/sobre">Sobre</Link></li>
                        

                        {Object.keys(user).length !== 0 ?
                         <>
                            <li><Link className='link' id='atividades' to='/atividades'>Atividades</Link></li>
                            <li><Link className='link'  id='perfil' to={'/perfil'}><UserOutlined></UserOutlined></Link></li>
                        </>
                            :
                            <>
                                <li><Link className='link' id='signIn' to='/login'>SIGN IN</Link></li>
                                <li><Link className='link' id='signUp' to='/cadastro'>SIGN UP</Link></li>
                            </>
                        }
                    </ul>
   
                </div>
            </header>
        </>
    )
}

export default Header