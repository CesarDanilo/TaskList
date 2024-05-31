import { Link } from 'react-router-dom';
import React from 'react';

function Menu() {
    return (

            <aside>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tarefas">Tasks</Link>
                    </li>
                </ul>
            </aside>


    )
}

export default Menu