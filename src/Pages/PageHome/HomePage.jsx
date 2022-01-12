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
                <div className='container'>
                    <div className='audi-logo'>
                        <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="audi-logo" srcset="" />
                    </div>
                    <div className='bugatti-logo'>
                        <img src="https://www.carlogos.org/logo/Bugatti-logo-1024x768.png" alt="bugatti-logo" srcset="" />
                    </div>
                    <div className='chevy-logo'>
                        <img src="https://www.carlogos.org/logo/Chevrolet-logo-2013-2560x1440.png" alt="chevy-logo" srcset="" />
                    </div>
                </div>
            </div>
        </>
    );
}