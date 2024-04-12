import React from "react";
import "./style.css";

export default function Welcome() {
    return (
        <section id="sobre-nos" className="presentation">
            <div className="welcome">
                <div className="welcome-container">
                    <div className="welcome-title">
                        <h1>Sobre nós</h1>
                    </div>
                    <hr className="division"></hr>
                    <div className="welcome-text">
                        <p>Em nossa cafeteria, cada gole de café é uma
                            viagem de sabor. Com um ambiente acolhedor e baristas
                            especializados, oferecemos uma variedade de bebidas e
                            delícias caseiras. Venha nos visitar para
                            uma experiência única de café.</p>
                    </div>
                </div>
                <div>
                    <img className="img" src="mulher.png"></img>
                </div>
            </div>
        </section>
    )
}