
import './header.css'

function Header(){

    return(
        <>
        <header>
            <div className="empresa_info">
                <i>Logo</i>
                <p>Nome Empresa</p>

                <ul>
                    <li><button>Sign Up</button></li>
                    <li><button>Sing Out</button></li>
                </ul>

                <input type="checkbox" id="slideTema" />
                <label htmlFor="slideTema"></label>
            </div>
        </header>
    </>
    )
}

export default Header