import './css/InputTask.css';
import { useState } from 'react';

let tasks = new Array();

function InputTask() {

    const [task, setTask] = useState();

    function Gravar() {
        tasks.push({ task: task })
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    return (
        <>
            <div className="container">
                <div className="inputs">
                    <input type="text" id='inputTask' onChange={(e) => { setTask(e.target.value) }} />
                    <button id='btn' onClick={() => { Gravar() }}>Nova Tarefa</button>
                </div>
            </div>
        </>
    )
}

export default InputTask