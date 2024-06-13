
import './header.css'

function Header(){

    return(
        <>
        <header>
            <div className="header_empresa_info">
                <i>Logo</i>
                <p>Nome Empresa</p>
                </div>

            <div className='header_extras'>
                <ul>
                    <li><button>Sign Up</button></li>
                    <li><button>Sing Out</button></li>
                    <li><a href="">Sobre</a></li>
                </ul>
                <input type="checkbox" id="slideTema" />
                <label htmlFor="slideTema" id="temaLabel"></label>
                </div>
        </header>
    </>
    )
}

export default Header