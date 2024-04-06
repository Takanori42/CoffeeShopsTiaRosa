import React from "react";
import "./style.css";

export default function Items() {
    return (
        <section className="items">
            <div className="item">
                <div className="icon-conteiner">
                    <img className="icon" src="cappuccino.png"></img>
                </div>
                <div className="item-text">
                    <span>Cafés</span>
                    <span>Cappuccinos</span>
                </div>
            </div>
            <div className="item">
                <div className="icon-conteiner">
                    <img className="icon" src="bebida.png"></img>
                </div>
                <div className="item-text">
                    <span>Bebidas</span>
                    <span>Geladas</span>
                </div>
            </div>
            <div className="item">
                <div className="icon-conteiner">
                    <img className="icon" src="bolo.png"></img>
                </div>
                <div className="item-text">
                    <span>Bolos e</span>
                    <span>Doces</span>
                </div>
            </div>
            <div className="item">
                <div className="icon-conteiner">
                    <img className="icon" src="pao.png"></img>
                </div>
                <div className="item-text">
                    <span>Pães</span>
                    <span>quentinhos</span>
                </div>
            </div>
        </section>
    )
}