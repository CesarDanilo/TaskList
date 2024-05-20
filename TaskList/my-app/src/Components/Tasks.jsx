import './css/Tasks.css';
import icons  from './img/lixeira.svg'

function Tasks(){
    return (
        <>
            <div className="container">
                <div className="label">TEXTO</div>
                <button id='btnLixeira'><img src={icons} id='icon-lixeira'></img></button>
            </div>
        </>
    )
}

export default Tasks