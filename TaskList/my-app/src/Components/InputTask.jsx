import Tasks from './Tasks';
import './css/InputTask.css';
import React, { useState, useEffect } from 'react';

function InputTask() {

    const [task, setTask] = useState('');
    const [getTask, setGetTask] = useState([]);
    const [hora, setHora] = useState();

    function Gravar(e) {
        e.preventDefault(); // Previne o comportamento padrão do evento

        if (!task) { // Verifica se a variável 'task' está vazia
            alert("Valor vazio");
            return;
        } else {
            let newTaskList = [...getTask, formatTime(task, hora)];
            setGetTask(newTaskList);
            localStorage.setItem('tasks', JSON.stringify(newTaskList));
            setTask(''); // Reseta o valor da tarefa
        }
    }

    function formatTime(task, hora) {
        return `${task} ----- ${hora}`.toUpperCase()
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
                    <input type="time"
                        min="07:00"
                        max="18:00"
                        step="3600"
                        required
                        id="inputDate"
                        onChange={(e) => {
                            setHora(e.target.value)
                        }}
                    />
                    <button id='btn' onClick={Gravar}>Nova Tarefa</button>
                </div>
            </div>
            <Tasks getTask={getTask} deleteTask={DeleteTask} />
        </div>
    )
}

export default InputTask
