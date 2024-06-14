
import '../assets/styles/header.css';

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
                    <li><a href='#'>Sign Up</a></li>
                    <li><a href='#'>Sing Out</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
                <input type="checkbox" id="slideTema" />
                <label htmlFor="slideTema" id="temaLabel"></label>
                </div>
        </header>
    </>
    )
}

export default Header