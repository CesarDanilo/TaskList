import Tasks from './Tasks';
import './css/InputTask.css';
import React, { useState, useEffect } from 'react';

function InputTask() {

    const [task, setTask] = useState('');
    const [getTask, setGetTask] = useState([]);

    function Gravar(e) {
        e.preventDefault();
        if (!e.target.value) {
            alert("vazio")
        } else {
            let newTaskList = [...getTask, task];
            setGetTask(newTaskList);
            localStorage.setItem('tasks', JSON.stringify(newTaskList));
            setTask('');
        }
    }

    function DeleteTask(id) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.splice(id, 1);
        setGetTask(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    useEffect(() => {
        let storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setGetTask(JSON.parse(storedTasks));
        }
    }, [])

    return (
        <div>
            <div className="container">
                <div className="inputs">
                    <input
                        type="text"
                        id='inputTask'
                        value={task}
                        onChange={(e) => {
                            setTask(e.target.value)
                        }}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                document.getElementById('btn').click(); // Aciona o botão
                            }
                        }}
                        placeholder='Digite sua tarefa aqui'
                    />
                    <button id='btn' onClick={Gravar}>Nova Tarefa</button>
                </div>
            </div>
            <Tasks getTask={getTask} deleteTask={DeleteTask} />
        </div>
    )
}

export default InputTask
