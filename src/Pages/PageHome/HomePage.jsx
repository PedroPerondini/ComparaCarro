import React, { Component } from "react";
import './HomePage.css';
import Header from '../components/header/header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGradient from "material-ui/svg-icons/image/gradient";

export default class HomePage extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            className: "center"
        };

        return (
            <>
                <Header/>
                <div className='containerImage'>
                    <h1> IMAGEM DO CARRO </h1>
                </div>
                <div className='titulo'>
                    <h1>Compara Carros</h1>
                </div>
                <div className='footer'>
                    <div className="container"> 
                        <Slider {...settings}>
                            <div className="audi">
                                <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div className="bugatti">
                                <img src="https://www.carlogos.org/logo/Bugatti-logo-1024x768.png" alt="" srcset="" />
                            </div>
                            <div className="chevrolet">
                                <img src="https://www.carlogos.org/logo/Chevrolet-logo-2004-1920x1080.jpg" alt="" srcset="" />
                            </div>
                            <div className="dodge">
                                <img src="https://bn1305files.storage.live.com/y4madApCk5R3_Wgiqw34BwEkaRjVEqL1xFG43qaeRHzx-QtQkW6UW7GbVE7rGIZy7Q9CLoR8WLZ24U7viDXMxXz1iPN-50Ew--dd7P-HrTrDXJEaBoGaHcprmJ2tDf4fn1pa_hNinGod1EusCzLqXaa4mO4MK0aMfWow-BDK2SZBOPbDoZi4DHPu1j-hYlLfPik?width=1920&height=1080&cropmode=none" alt="" srcset="" />
                            </div>
                            <div className="eagle">
                                <img src="https://www.carlogos.org/logo/Eagle-automobile-logo-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div className="ferrari">
                                <img src="https://www.carlogos.org/car-logos/ferrari-text-logo-1600x400.png" alt="" srcset="" />
                            </div>
                            <div className="gumpert">
                                <img src="https://www.carlogos.org/logo/Gumpert-logo-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div className="honda">
                                <img src="https://bn1305files.storage.live.com/y4mis1dmIZeYBiJByBNJQQ4POKpYkK8pqDQ9hR6fRxT51I9zTDGcoqCjAH2njujIT-dgHzNV81iiCVknLnlOIMBLO5iXP2lSkNiByqp5O--ZtUWQi-k3T6t1NylZd3HJuF5FL6aLa-HSLZoy0ibNlMDzGSZ-0lQH2zzSEqI3PCoy_5WQwqb-LiLiJQXyWBwHhgf?width=1920&height=1080&cropmode=none" alt="" srcset="" />
                            </div>
                        </Slider>
                    </div>
                </div> 
            </>
        );
    }
}