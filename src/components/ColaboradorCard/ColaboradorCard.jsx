import './ColaboradorCard.scss'

import { LinkedinFilled, GithubFilled} from '@ant-design/icons';

function ColaboradorCard({color, secundaryColor, image, nome, children}){

    //secundaryColor = color.replace()
    const corFundo = {
        background: `linear-gradient(to bottom, ${color}, ${secundaryColor} `
    }
    return(
        <div className="colaborador-card">
            <div className="card-header" style={corFundo}>
                <img className="card-image" src={image} alt=""  />
            </div>
            <div className="card-conteudo">
                <h4>{nome}</h4>
                <h5>{children}</h5>
                <div className="icones">
                    <LinkedinFilled className='icone'></LinkedinFilled>
                    <GithubFilled className='icone'></GithubFilled>
                </div>
            </div>
        </div>
    )

}


export default ColaboradorCard;