
import './header.scss'
import { Link } from 'react-router-dom';

function Header(){

    return(
        <>
        <header>
            <div className="header_empresa_info">
                <Link className='link' to='/inicio'>
                        <p>🧻</p>
                        <p>LetCorporation</p>
                    </Link>
                    </div>
                
            <div className='header_extras'>
                <ul>
                    <li><Link id='signUp' to='/cadastro'>Sign Up</Link></li>
                    <li><Link id='signIn' to='/login'>Sign In</Link></li>
                    <li><Link id='sobre' to="/sobre">Sobre</Link></li>
                    <li><Link id='atividades' to='/atividades'>Atividades</Link></li>
                </ul>
                <input type="checkbox" id="slideTema" />
                <label htmlFor="slideTema" id="temaLabel"></label>
                </div>
        </header>
    </>
    )
}

export default Header