import InputTask from './InputTask';
import './css/Tasks.css';
import icons from './img/lixeira.svg'
import React from 'react';

function Tasks() {
    // Pegar a string armazenada no localStorage
    const getTask = localStorage.getItem("tarefa");

    // Verificar se getTask não é null antes de fazer o parse
    const taskObject = getTask ? JSON.parse(getTask) : [];

    return (
        <>
            {taskObject.map((e, index) => {
                return (
                    <>
                        <div className="container1" key={index}>
                            <div className="label">{e.tarefa}</div>
                            <button id='btnLixeira'>
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
