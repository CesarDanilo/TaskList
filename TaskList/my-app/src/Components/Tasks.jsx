import './css/Tasks.css';
import icons  from './img/lixeira.svg'

function Tasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    return (
        <>
            <div className="container">
                <div className="label">{tasks}</div>
                <button id='btnLixeira'><img src={icons} id='icon-lixeira'></img></button>
            </div>
        </>
    )
}

export default Tasks