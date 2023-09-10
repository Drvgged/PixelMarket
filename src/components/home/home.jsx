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
                    <ReuCard
                        href="/products/among-sprite"
                        img={ spritesImport.amongSprite }
                        title="Among Us Sprite"
                        price="$4.99"
                        info="A pixel art of Among Us, my original creation"
                    />

                    <ReuCard
                        href="/products/other-sprite"
                        img={ spritesImport.foxSprite }
                        title='Fox Sprite'
                        price='$4.99'
                        info='A pixel art of Fox, my original creation'
                    />

                    <ReuCard
                        href="/products/gangster-sprite"
                        img={ spritesImport.gangsterSprite }
                        title="Gangster Sprite"
                        price="$4.99"
                        info="A pixel art of a Gangster, my original creation"
                    />

                    <ReuCard
                        href="/products/lario-sprite"
                        img={ spritesImport.larioSprite }
                        title='Lario Sprite'
                        price='$4.99'
                        info='A pixel art of Lario, my original creation'
                    />

                    <ReuCard
                        href="/products/warrior-sprite"
                        img={ spritesImport.warriorSprite }
                        title="Warrior Sprite"
                        price="$4.99"
                        info="A pixel art of a Woman Warrior, my original creation"
                    />
            </div>
        </>
    )
}

export default Home