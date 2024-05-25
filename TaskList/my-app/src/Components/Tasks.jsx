import './css/Tasks.css';
import icons from './img/lixeira.svg'
import React from 'react';

function Tasks(prop) {
    // Pegar a string armazenada no localStorage
    //const getTask = JSON.parse(localStorage.getItem("tarefa"));

    // Verificar se getTask não é null antes de fazer o parse
    //const taskObject = getTask ? JSON.parse(getTask) : [];

    // const [] = useState()
    
    console.log('task: ' ,prop.getTask)

    return (
        <>
            {prop.getTask?.map((e, index) => {
                return (
                    <>
                        <div className="container1" key={index} id={index}>
                            <div className="label">{e}</div>
                            <button id='btnLixeira' onClick={() => {prop.deleteTask(index)}}>
                                <img alt="lixeira" src={icons} id='icon-lixeira' />
                            </button>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Tasks;
