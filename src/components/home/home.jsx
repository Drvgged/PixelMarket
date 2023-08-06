import React from "react";
import spritesImport from "../../assets/sprites/spritesImports";
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
                <a href="/products/among-sprite">
                    <ReuCard
                        img={ spritesImport.amongSprite }
                        title="Among Us Sprite"
                        price="$4.99"
                        info="A pixel art of Among Us, my original creation"
                    />
                </a>

                <a href="/products/other-sprite">
                    <ReuCard
                        img={ spritesImport.foxSprite }
                        title='Other Sprite'
                        price='$4.99'
                        info='A pixel art of Other, my original creation'
                    />
                </a>

                <a href="/products/gangster-sprite">
                    <ReuCard
                        img={ spritesImport.gangsterSprite }
                        title="Gangster Sprite"
                        price="$4.99"
                        info="A pixel art of a Gangster, my original creation"
                    />
                </a>

                <a href="/products/lario-sprite">
                    <ReuCard
                        img={ spritesImport.larioSprite }
                        title='Lario Sprite'
                        price='$4.99'
                        info='A pixel art of Lario, my original creation'
                    />
                </a>

                <a href="/products/warrior-sprite">
                    <ReuCard
                        img={ spritesImport.warriorSprite }
                        title="Warrior Sprite"
                        price="$4.99"
                        info="A pixel art of a Woman Warrior, my original creation"
                    />
                </a>
            </div>
        </>
    )
}

export default Home