import React from "react";
import "./style.css";

export default function Places() {
    return (
        <section className="container-places">
            <div className="text-place">
                <h1>Conheça a nossa unidade</h1>
            </div>
            <div className="img-container">
                <div>
                    <img className="img" src="coffee1.png"></img>
                </div>
                <div>
                    <img className="img" src="coffee2.png"></img>
                </div>
                <div>
                    <img className="img" src="coffee3.png"></img>
                </div>
            </div>
        </section>
    )
}