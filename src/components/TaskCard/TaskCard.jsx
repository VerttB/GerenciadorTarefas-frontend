
import ConcluirTask from "./ConcluirTask/ConcluirTask";
import DeleteCard from "./DeleteCard/DeleteCard";
import EditCard from "./EditCard/EditCard";
import ReactDom from 'react-dom';
import "./TaskCard.scss"
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// import from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrashCan, faPenToSquare, faAlignJustify, faCalendar } from "@fortawesome/free-solid-svg-icons";



function TaskCard({task, change, index, deleteTask, userId}){

    return(
            <div className='card-conteiner'>
                <div className='card-header' style={{backgroundColor: task.corFundo}}>
                <h4>{task.titulo}</h4>
                <div className="funcoes">
                <ConcluirTask icone= {<FontAwesomeIcon icon={faCircleCheck} />} task={task} updateTask={change}></ConcluirTask>
                <EditCard icone={<FontAwesomeIcon icon={faPenToSquare} />} userId={userId} task={task} index={index} updateTask={change}></EditCard>
                <DeleteCard icone={<FontAwesomeIcon icon={faTrashCan} />}  deleteTask={deleteTask} deletedTask={task} index={index}></DeleteCard>
                </div>
                </div>

                <div className='card-descricao'>
                    <p>{<FontAwesomeIcon icon={faAlignJustify}/>}{task.descricao}</p>
                    <p>{<FontAwesomeIcon icon={faCalendar}/>} {task.dataCriacao} --- {task.dataFinal}</p>

                    <div className='card-status'>
                    <p className="status"><svg className="olho" version="1.1" id="svg2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" sodipodi:docname="eye-open.svg" inkscape:version="0.48.4 r9939" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <sodipodi:namedview inkscape:cy="417.05123" inkscape:cx="455.50398" inkscape:zoom="0.37249375" showgrid="false" id="namedview30" guidetolerance="10" gridtolerance="10" objecttolerance="10" borderopacity="1" bordercolor="#666666" pagecolor="#ffffff" inkscape:current-layer="svg2" inkscape:window-maximized="1" inkscape:window-y="24" inkscape:window-height="876" inkscape:window-width="1535" inkscape:pageshadow="2" inkscape:pageopacity="0" inkscape:window-x="65"> </sodipodi:namedview> <path id="path6686" inkscape:connector-curvature="0" d="M779.843,599.925c0,95.331-80.664,172.612-180.169,172.612 c-99.504,0-180.168-77.281-180.168-172.612c0-95.332,80.664-172.612,180.168-172.612 C699.179,427.312,779.843,504.594,779.843,599.925z M600,240.521c-103.025,0.457-209.814,25.538-310.904,73.557 c-75.058,37.122-148.206,89.496-211.702,154.141C46.208,501.218,6.431,549,0,599.981c0.76,44.161,48.13,98.669,77.394,131.763 c59.543,62.106,130.786,113.018,211.702,154.179c94.271,45.751,198.616,72.092,310.904,73.557 c103.123-0.464,209.888-25.834,310.866-73.557c75.058-37.122,148.243-89.534,211.74-154.179 c31.185-32.999,70.962-80.782,77.394-131.763c-0.76-44.161-48.13-98.671-77.394-131.764 c-59.543-62.106-130.824-112.979-211.74-154.141C816.644,268.36,712.042,242.2,600,240.521z M599.924,329.769 c156.119,0,282.675,120.994,282.675,270.251c0,149.256-126.556,270.25-282.675,270.25S317.249,749.275,317.249,600.02 C317.249,450.763,443.805,329.769,599.924,329.769L599.924,329.769z"></path> </g></svg>{task.status}</p>
                    <div style={{backgroundColor: task.status === 'Em andamento' ? 'orange' :
                                                   task.status === 'Concluída' ? 'green' :
                                                   task.status === 'Pendente' ? '#00AAFF' : 'red'
                          }} className='bola'></div>

                    </div>
                </div>
            </div>
            
    )
}

export default TaskCard;