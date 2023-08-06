import React from 'react';
import spritesImport from '../../assets/sprites/spritesImports';
import './about.css';
import { PeopleCard } from './people';

function AboutUs() {
    return (
        <>
            <div className='ourteam'>
                <p><span className='teamtitle'>Our Amazing Team</span><br className='separation'></br>Meet our talented group of developers creating an innovative eCommerce platform for digital products. Our vision is to revolutionize online shopping by providing a seamless marketplace where customers can discover, purchase, and access a wide range of digital goods. We aim to empower creators, enrich lives, and inspire creativity in a future full of endless possibilities.</p>
                
                <img src={ spritesImport.ourTeam } alt='Pixels Perfect Team' className='teamimg'></img>
            </div>

            <div className='peoplecard'>
                <PeopleCard
                    image= { spritesImport.lucioProfile }
                    name='Facundo Padilla'
                    age='16y old'
                    role='Developer'
                />

                <PeopleCard
                    image= { spritesImport.lucioProfile }
                    name='Fabrizio Guaglianone'
                    age='16y old'
                    role='Developer'
                />

                <PeopleCard
                    image= { spritesImport.lucioProfile }
                    name='Lucio Lopez'
                    age='16y old'
                    role='Developer'
                />

                <PeopleCard
                    image= { spritesImport.lucioProfile }
                    name='Agustin Ortiz'
                    age='16y old'
                    role='Developer'
                />
            </div>
        </>
    )
}

export default AboutUs;