import Tasks from './Tasks';
import './css/InputTask.css';
import React, { useState, useEffect } from 'react';

function InputTask() {

    const [task, setTask] = useState('');
    const [getTask, setGetTask] = useState([]);

    function Gravar(e) {
        e.preventDefault();
        let newTaskList = [...getTask, task];
        setGetTask(newTaskList);
        localStorage.setItem('tasks', JSON.stringify(newTaskList));
        setTask('');
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
                    <input required type="text" id='inputTask' value={task} onChange={(e) => {
                        setTask(e.target.value)
                    }} />
                    <button id='btn' onClick={Gravar}>Nova Tarefa</button>
                </div>
            </div>
            <Tasks getTask={getTask} deleteTask={DeleteTask} />
        </div>
    )
}

export default InputTask
