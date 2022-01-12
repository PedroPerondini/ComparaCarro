import React from 'react';
import './HomePage.css';
import Header from '../components/header/header';

export default function HomePage () {


    return (
        <>
            <Header/>
            <div className='containerImage'>
                <h1> IMAGEM DO CARRO </h1>
            </div>
            <div className='titulo'>
                <h1> TITULO </h1>
            </div>
            <div className='footer'>
                <h1> ICONES </h1>
            </div>
        </>
    );
}