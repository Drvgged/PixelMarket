import React from "react";
import LarioImage from '../img/lario-sprite.png';
import OtherSprite from "../img/sprites.png";
import './home.css';
import ReuCard from './product-reu';

function Home() {
    return (
        <>

            <div className="hero">
                <h1>Welcome to PixelsPerfect</h1>
                <p>The best market of Sprites, 3D Models and much more</p>
            </div>
        
            <div className="title-gallery">
                <h1>¡BEST SELLER!</h1>
            </div>

            <div className="product-gallery">
                <a href="/products/lario-sprite">
                    <ReuCard
                        img={LarioImage}
                        title='Lario Sprite'
                        price='$4.99'
                        info='A pixel art of Lario, my original creation'
                    />
                </a>

                <a href="/products/other-sprite">
                    <ReuCard
                        img={ OtherSprite }
                        title='Other Sprite'
                        price='$4.99'
                        info='A pixel art of Other, my original creation'
                    />
                </a>
            </div>
        </>
    )
}

export default Home