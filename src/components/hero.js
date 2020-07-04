import React from 'react'
import Banner from '../images/banner.jpg'
import '../css/hero.css'

const Hero = () => {
    return (
        <>
            <div className="hero" style={{ 
                backgroundImage: `url(${Banner})`,
                backgroundPosition: "center",
                backgroundRepeat: "none",
                backgroundSize: "cover",
                width: "100%",
                height: "100vh",
                padding: "0",
                margin: "0",
                marginBottom: "1.45rem"
                }}>
                <div className="overlay" style={{
                    backgroundColor: "rgba(0,0,0,.2)",
                    width: "100%",
                    height: "100vh",
                    padding: "0",
                    margin: "0"
                }}>
                    <div className="hero-text">
                        <h1>Jumpstart your office</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
