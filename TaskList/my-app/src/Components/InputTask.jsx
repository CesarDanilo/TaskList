import Tasks from './Tasks';
import './css/InputTask.css';
import { useState } from 'react';

const tarefaArray = new Array();

function InputTask() {

    const [task, setTask] = useState();

    function Gravar() {
        const tarefa = {
            tarefa: task
        }
        
        tarefaArray.push(tarefa);

        localStorage.setItem("tarefa", JSON.stringify(tarefaArray));
        return (
                <Tasks />
        )
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