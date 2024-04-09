import React from "react";
import "./style.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-container">
                <div>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
            </div>
            <div className="contacts">
                <div className="phone-container">
                    <img className="icon-phone"></img>
                    <h3 className="phone">61 3333-0000</h3>
                </div>
            </div>
            <div className="address-container">
                <img className="icon-place"></img>
                <h3 className="71020631 - QE 11 Área Especial C - Guará I - Brasília/DF"></h3>
            </div>

        </footer>
    )
}