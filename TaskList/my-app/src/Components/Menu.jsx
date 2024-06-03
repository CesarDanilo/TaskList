import { Link } from 'react-router-dom';
import React from 'react';
import './css/Menu.css'

function Menu() {
    return (

            <aside>
                <ul>
                    <li>
                        <Link to="/" className='links'>Home</Link>
                    </li>
                    <li>
                        <Link to="/tarefas" className='links'>Tasks</Link>
                    </li>
                    <li>
                        <Link to="/tarefas" className='links'>about</Link>
                    </li>
                </ul>
            </aside>


    )
}

export default Menu