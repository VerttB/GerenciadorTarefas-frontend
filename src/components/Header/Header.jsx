
import './header.scss'


function Header(){

    return(
        <>
        <header>
            <div className="header_empresa_info">
                <p>🧻</p>
                <p>LetCorporation</p>
                </div>

            <div className='header_extras'>
                <ul>
                    <li><a id='signUp' href='#'>Sign Up</a></li>
                    <li><a id='signIn' href='#'>Sign In</a></li>
                    <li><a id='sobre' href="#">Sobre</a></li>
                </ul>
                <input type="checkbox" id="slideTema" />
                <label htmlFor="slideTema" id="temaLabel"></label>
                </div>
        </header>
    </>
    )
}

export default Header