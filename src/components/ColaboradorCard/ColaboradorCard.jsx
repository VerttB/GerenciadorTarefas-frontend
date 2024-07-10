import './ColaboradorCard.scss'

import { LinkedinFilled, GithubFilled} from '@ant-design/icons';

function ColaboradorCard({color, secundaryColor, github, nome, titulo, tecnologia, linkedin}){

    const corFundo = {
        background: `linear-gradient(to bottom, ${color}, ${secundaryColor} `
    }

    return(
        <div className="colaborador-card">
            <div className="card-header" style={corFundo}>
                <img className="card-image" src={`${github}.png`} alt=""  />
            </div>
            <div className="card-conteudo">
                <div className='conteudo-texto'>
                    <h4>{nome}</h4>
                    <h5>{titulo}</h5>
                    <p className={nome}>{tecnologia}</p>
                </div>
                <div className="icones">
                    <a href={linkedin} target='_blank' ><LinkedinFilled className='icone'></LinkedinFilled></a>
                   <a href={github} target='_blank'> <GithubFilled className='icone'></GithubFilled></a>
                </div>
            </div>
        </div>
    )

}


export default ColaboradorCard;