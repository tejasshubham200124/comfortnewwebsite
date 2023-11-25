import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'

export default function Example() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 0,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className="header" style={{ position: "relative" }}>
            <Slider {...settings}>
                <div style={{ position: "relative" }}>
                    <img src="./office.jpg" alt="Slide 3" style={{
                        width: "100%"
                    }} />
                </div>
                <div style={{ position: "relative" }}>
                    <img src="./serveillace.jpg" alt="Slide 2" style={{ width: "100%" }} />
                </div>
                <div style={{ position: "relative" }}>
                    <img src="./services.jpg" alt="Slide 2" style={{ width: "100%" }} />
                </div>

            </Slider>


            <motion.div
                className="common-text large-text"
                style={{
                    position: 'absolute',
                    top: '31%',
                    left: '30%',
                    color: 'white',
                    fontSize: '40px',
                    fontWeight: '900',
                    fontFamily: 'Roboto',
                    padding: '10px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    letterSpacing: '2px'
                }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
            >
                COMFORT TECHNO SERVICES
            </motion.div>

            <hr className="horizontal-line" style={{
                position: "absolute",
                top: "45%",
                left: "55%",
                transform: "translateX(-50%)", // Center the line horizontally
                width: "60%",
                border: "1px solid white",
            }} />

            <motion.div
                className="common-text small-text"
                style={{
                    position: 'absolute',
                    top: '45%',
                    left: '26%',
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: '900',
                    fontFamily: 'Roboto',
                    padding: '10px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
                    
                }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
            >
                " Empowering Security Through Surveillance Excellence. "
            </motion.div>
        </div>

        
    );
};


