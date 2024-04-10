import React from "react";
import "./style.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-container">
                <div>
                    <img className="social-icon" src="twitter.png"></img>
                </div>
                <div>
                    <img className="social-icon" src="whatsapp.png"></img>
                </div>
                <div>
                    <img className="social-icon" src="instagram.png"></img>
                </div>
                <div>
                    <img className="social-icon" src="facebook.png"></img>
                </div>
            </div>
            <div className="contacts">
                <div className="phone-container">
                    <img className="icon-phone" src="phone.png"></img>
                    <h3 className="phone">61 3333-0000</h3>
                </div>

                <div className="address-container">
                    <img className="icon-place" src="place.png"></img>
                    <h3 className="address">71020631 - QE 11 Área Especial C -
                        Guará I - Brasília/DF</h3>
                </div>
            </div>
        </footer>
    )
}