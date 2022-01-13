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
            slidesToShow: 6,
            slidesToScroll: 1,
            className: "center"
        };

        function imageResize ()
        {
            let images = document.getElementsByClassName('container');
            images.style.width = '1920px';
            images.stye.height = '1080px';
        }

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
                    <div className="container" onLoad={imageResize()}> 
                        <Slider {...settings}>
                            <div>
                                <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Bugatti-logo-1024x768.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Chevrolet-logo-2004-1920x1080.jpg" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Dodge-logo-1990-2100x2100.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/logo/Eagle-automobile-logo-1920x1080.png" alt="" srcset="" />
                            </div>
                            <div>
                                <img src="https://www.carlogos.org/car-logos/scuderia-ferrari-logo-800x1050.png" alt="" srcset="" />
                            </div>
                        </Slider>
                    </div>
                </div> 
            </>
        );
    }
}


