import './css/InputTask.css';

function InputTask(){
    return (
        <>
            <div className="container">
                <div className="inputs">
                    <input type="text" id='inputTask'/>
                    <button id='btn'>Nova Tarefa</button>
                </div>
            </div>
        </>
    )
}

export default InputTask