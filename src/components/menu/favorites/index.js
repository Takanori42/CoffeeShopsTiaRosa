import React from "react";
import "./style.css";


const mostRequested = [
    {
        img: "coffeef.png",
        title: "Café",
        stars: 5
    },
    {
        img: "breadofcheese.png",
        title: "Pão de queijo",
        stars: 5
    },
    {
        img: "redvelvet.png",
        title: "Red Velvet",
        stars: 4
    },
    {
        img: "chocolatecake.png",
        title: "Bolo de chocolate",
        stars: 5
    },
]

function FavoriteProduct({ img, title, stars }) {
    return (
        <div className="product">
            <img src={img} alt="product"></img>
            <div className="product-title-container">
                <span className="product-title">{title}</span>
            </div>
            <div className="stars">
                {[...Array(stars)].map((_, index) => (
                    <img key={index} src="star.png" />
                ))}
            </div>
        </div>
    )
}

export default function Favorites() {
    return (
        <div className="favorite-container">
            <div className="favorite-title">
                <h1>Mais pedidos</h1>
            </div>
            <div className="divider">
                <hr></hr>
            </div>
            <div className="favorites-products">
                {mostRequested.map((product, index) => (
                    <FavoriteProduct key={index} img={product.img} title={product.title} stars={product.stars} />
                ))}
            </div>
        </div>
    )
}