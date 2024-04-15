import React, { useState } from "react";
import "./style.css";

export default function Favorites() {
    const [selectedButton, setSelectedButton] = useState("Café")
    const menuButtons = ["Café", "Sucos", "Bolos e tortas", "Pães", "Doces"]

    const mostRequested = [
        {
            img: "coffeef.png",
            title: "Café",
            category: "Café",
            description: "Café quentinho",
            stars: 5
        },
        {
            img: "breadofcheese.png",
            title: "Pão de queijo",
            category: "Pães",
            description: "Café quentinho",
            stars: 5
        },
        {
            img: "redvelvet.png",
            title: "Red Velvet",
            category: "Bolos e tortas",
            description: "Café quentinho",
            stars: 4
        },
        {
            img: "chocolatecake.png",
            title: "Bolo de chocolate",
            category: "Bolos e tortas",
            description: "bolo di murango",
            stars: 5
        },
        {
            img: "chocolatecake.png",
            title: "Bolo de chocolate",
            category: "Doces",
            description: "Café quentinho",
            stars: 5
        },
    ]

    function MenuButton({ title }) {
        const className = selectedButton === title ? "menu-button menu-button-selected" : "menu-button"

        return (
            <button className={className} onClick={
                () => setSelectedButton(title)
            }>{title}</button>
        )
    }

    function MenuProduct({ img, title, description, stars }) {
        return (
            <div className="product-item">
                <img src={img} alt="product"></img>
                <div className="product-title-container">
                    <span className="product-title">{title}</span>
                </div>
                <div className="product-description">
                    <span>{description}</span>
                </div>
                <div className="stars">
                    {[...Array(stars)].map((_, index) => (
                        <img key={index} src="star.png" />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="menu-container">
            <div className="menu-title">
                <h1>Cardápio</h1>
            </div>
            <div className="divider">
                <hr></hr>
            </div>
            <div className="menu-filter">
                {menuButtons.map((button, index) => (
                    <MenuButton key={index} title={button} />
                ))}
            </div>
            <div className="menu-products">
                {mostRequested.filter((item) => {
                    return item.category === selectedButton
                }).map((product, index) => (
                    <MenuProduct key={index} img={product.img} title={product.title} stars={product.stars} description={product.description} />
                ))}
            </div>
        </div>
    )
}

