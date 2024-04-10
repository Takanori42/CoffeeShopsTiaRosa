import React from "react";
import './style.css';

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
                        <li><a href="#">Cardápio</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Sobre nós</a></li>
                    </ul>
                </nav>
            </div>
            <div className="phrase-container">
                <p className="phrase">Aqui, cada café é uma história a ser saboreada.</p>
            </div>
        </header>
    )


}
