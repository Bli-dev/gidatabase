//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';

//IMAGES
import star from './img/yellow_star.png';

//VISION ICONS
import anemo from './img/anemo.png';
import cryo from './img/cryo.png';
import dendro from './img/dendro.png';
import electro from './img/electro.png';
import geo from './img/geo.png';
import hydro from './img/hydro.png';
import pyro from './img/pyro.png';

export const visionTextToImageConverter = (vision) => {
    switch (vision) {
        case 'Anemo':
            return anemo;
        case 'Cryo':
            return cryo;
        case 'Dendro':
            return dendro;
        case 'Electro':
            return electro;
        case 'Geo':
            return geo;
        case 'Hydro':
            return hydro;
        case 'Pyro':
            return pyro;
        default:
            return 'image missing';
    }
}

//STRING CONVERSION
export const stringToDisplay = (incoming_string) => {
    if (incoming_string === 'traveler-anemo') {
        return 'TravelerA'
    } else if (incoming_string === 'traveler-geo') {
        return 'TravelerG'
    } else {
        return incoming_string.split(/-|_/).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }
}

//RATING CONVERSION
export const rarityConversion = (key, value) => {
    if (key === 'rarity' || key === 'max_rarity') {
        
        const totalStars = []
        
        for (let i = 1; i <= value; i++){
            totalStars.push(star)
        }
        return (
            <div className='starsContainer'>
                {totalStars.map((item, i) => <img src={item} alt ='star' key={i}></img>)}
            </div>
        );
    } else {
        return value;
    }
}



//REUSABLE STYLES
export const dataContainerStyles = styled(motion.div)`
    width: 80%;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 2rem;
    background: rgb(149,149,149); /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgba(149,149,149,1) 0%, rgba(13,13,13,1) 46%, rgba(1,1,1,1) 50%, rgba(10,10,10,1) 53%, rgba(78,78,78,1) 76%, rgba(56,56,56,1) 87%, rgba(27,27,27,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgba(149,149,149,1) 0%,rgba(13,13,13,1) 46%,rgba(1,1,1,1) 50%,rgba(10,10,10,1) 53%,rgba(78,78,78,1) 76%,rgba(56,56,56,1) 87%,rgba(27,27,27,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, rgba(149,149,149,0.5) 0%,rgba(13,13,13,0.5) 46%,rgba(1,1,1,0.5) 50%,rgba(10,10,10,0.5) 53%,rgba(78,78,78,0.5) 76%,rgba(56,56,56,0.5) 87%,rgba(27,27,27,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#959595', endColorstr='#1b1b1b',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    box-shadow: 5px 5px 5rem rgba(69, 69, 69, 0.7);
    backdrop-filter: blur(10px);
`
    