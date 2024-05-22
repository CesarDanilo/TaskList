import './css/InputTask.css';
import { useState } from 'react';

const input = document.getElementById('#inputTask');

const tasks = [];

function InputTask(){

    const [task, setTask] = useState();

    function Gravar() {
        localStorage.setItem('tasks', task);

    }

    return (
        <>
            <div className="container">
                <div className="inputs">
                    <input type="text" id='inputTask' onChange={(e) => {setTask(e.target.value)}}/>
                    <button id='btn' onClick={() => {Gravar()}}>Nova Tarefa</button>
                </div>
            </div>
        </>
    )
}

export default InputTask