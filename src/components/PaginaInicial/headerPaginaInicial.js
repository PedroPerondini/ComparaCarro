import React from 'react';
import './headerPaginaInicial.css'

function HeaderPaginaInicial()
{
    return (
    <div className ="right">
        <p className="home">Home</p>
        <p className="comparar">Comparar</p>
        <div className="border">
            <p className="baixar">Baixar aplicativo</p> 
        </div>
    </div>);
}

export default HeaderPaginaInicial;