import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';

export default function Home(){
    return (
        <section className ="home__section" id = "home">
             <div className="home__container container grid">
                <div className ="home__content grid">
                    <Social/>
                    <div className ="home__img"></div>
                    <Data/>
                </div>
             </div>
        </section>
    );
}