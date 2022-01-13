import React, { Component } from "react";
import './HomePage.css';
import Header from '../components/header/header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class HomePage extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
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
                    <div className="container"> 
                        <Slider {...settings}>
                            <div>
                                <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="" srcset="" />
                            </div>
                        </Slider>
                    </div>
                </div> 
            </>
        );
    }
}


