
import './header.scss'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

function naoLogadoLinks() {
    return (
        <>
            <li><Link id='signUp' to='/cadastro'>Sign Up</Link></li>
            <li><Link id='signIn' to='/login'>Sign In</Link></li>
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
                        <li><Link id='signUp' to='/cadastro'>Sign Up</Link></li>

                        {Object.keys(user).length !== 0 ?
                         <>
                            <li><Link id='atividades' to='/atividades'>Atividades</Link></li>
                            <li><Link id='perfil' to={'/perfil'}><UserOutlined></UserOutlined></Link></li>
                        </>
                            :
                            <>
                                <li><Link id='signIn' to='/login'>Sign In</Link></li>
                                <li><Link id='sobre' to="/sobre">Sobre</Link></li>
                            </>
                        }
                    </ul>
                    {/* <input type="checkbox" id="slideTema" />
                <label htmlFor="slideTema" id="temaLabel"></label> */}
                </div>
            </header>
        </>
    )
}

export default Header