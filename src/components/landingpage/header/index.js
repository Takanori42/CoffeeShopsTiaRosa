import React from "react";
import './style.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="navbar">
                <div className="logo">
                    <h1 className="t1">Coffee Shops</h1>
                    <h2 className="t2">Tia Rosa</h2>
                </div>
                <nav className="nav">
                    <ul className="menu">
                        <li><Link to="menu" className="link">Cardápio</Link></li>
                        <li><a href="#fale-conosco" className="link">Fale Conosco</a></li>
                        <li><a href="#sobre-nos" className="link">Sobre nós</a></li>
                    </ul>
                </nav>
            </div>
            <div className="phrase-container">
                <p className="phrase">Aqui, cada café é uma história a ser saboreada.</p>
            </div>
        </header>
    )


}
