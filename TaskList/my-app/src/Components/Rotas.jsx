import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../views/Home';
import Tarefas from '../views/Tarefas';

function Rotas() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<Tarefas />} />
        </Routes>

    )
}

export default Rotas