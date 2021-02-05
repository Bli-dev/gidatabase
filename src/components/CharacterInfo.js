//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//API
import {charPortraitURL} from '../api'
//STYLES AND ANIMATION
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { dataContainerStyles } from '../util';
//VISION ICONS
import anemo from '../img/anemo.png';
import cryo from '../img/cryo.png';
import dendro from '../img/dendro.png';
import electro from '../img/electro.png';
import geo from '../img/geo.png';
import hydro from '../img/hydro.png';
import pyro from '../img/pyro.png';
//CONVERSIONS
import {stringToDisplay, rarityConversion} from '../util';

const CharacterInfo = () => {

    const {selectedItemName, selectedItemData} = useSelector((state) => state.currentActiveData)

    console.log(selectedItemData)

    const visionTextToImageConverter = (vision) => {
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


    return (
        <SelectedCharacterContainer>
            <PortraitContainer>
                <VisionContainer>
                    <img src={visionTextToImageConverter(selectedItemData.vision)} alt={selectedItemData.vision}/>
                </VisionContainer>
                <img src={charPortraitURL(selectedItemName)} alt={`${stringToDisplay(selectedItemName)} portrait is missing`}/>
            </PortraitContainer>
            <CharacterDataContainer>
                <SubNav>
                    <ul>
                        <li><a href='#top'>Top</a></li>
                        <li><a href='#skillTalents'>Active Talents</a></li>
                        <li><a href='#passiveTalents'>Passive Talents</a></li>
                        <li><a href='#constellations'>Constellations</a></li>
                    </ul>
                </SubNav>
                <CharData>
                <BasicInfoContainer id='top'>
                    {Object.keys(selectedItemData).map(key => (
                        typeof selectedItemData[key] !== 'object' &&
                        <BasicInfoSection>
                            <InfoKey>{`${stringToDisplay(key)}:`}</InfoKey>
                            <InfoValue>{rarityConversion(key, selectedItemData[key]) }</InfoValue>
                        </BasicInfoSection>
                    ))}
                </BasicInfoContainer>
    {Object.keys(selectedItemData).map(key => (
            typeof selectedItemData[key] == 'object' &&
        <ListCategoryContainer id={key}>
            <h2>{key === 'constellations' ?  'Constellations' : key === 'passiveTalents' ? 'Passive Talents' : 'Active Talents'}</h2>
                {selectedItemData[key].map((item, i)=> 
                <ListedCategory key={i}>
                    <CategoryName>{`${item.unlock}: ${item.name}`}</CategoryName>
                    <CategoryDescription>{item.description}</CategoryDescription>
                    {item.upgrades && <CategoryData>{item.upgrades.map(value => <SkillInfo>
                            <h4>{`${value.name}:`}</h4>
                            <p>{`${value.value};`}</p>
                    </SkillInfo>)}</CategoryData>}
                </ListedCategory>
                )}
        </ListCategoryContainer>
    ))}
                </CharData>
            </CharacterDataContainer>
        </SelectedCharacterContainer>
    )
}

const SelectedCharacterContainer = styled(dataContainerStyles)`
    display: flex;
    justify-content: space-between;
    height: 80vh;
    padding: 0;
    overflow: hidden;
`;

const PortraitContainer = styled(motion.div)`
    width: 45%;
    text-align: center;
    backdrop-filter: blur(20px);
    z-index: 3;
    img{
        max-height: 100%;
        padding: 1rem 0rem 1rem 0.5rem;
    }
`
const CharacterDataContainer = styled(motion.div)`
    width: 55%;
    height: 100%;
    padding: 0.5rem 1rem 2rem 0rem;
    backdrop-filter: blur(10px);
    z-index: 4;
    overflow-y: hidden; 
`

const CharData = styled(motion.div)`
    height: 90%;
    width: 100%;
    position: relative;
    z-index: 5;
    overflow-y: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: rgba(169, 169, 169, 1);
    }
    &::-webkit-scrollbar-track{
        background: transparent;
    }
`

const BasicInfoContainer = styled(motion.div)`
   padding: 1rem 0.2rem 0rem 1rem;
`

const VisionContainer = styled(motion.div)`
    position: absolute;
    padding-left: 0.5rem;
    top: 0;
    left: 0;
`
const BasicInfoSection = styled(motion.div)`
    display: flex;
    padding: 0.1rem 0rem;
`
const InfoKey = styled.h3`
    min-width:20%;
    padding: 0.2rem 0.3rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
`
const InfoValue = styled.p`
    max-width: 80%;
    padding: 0.2rem 0.3rem 0.2rem 0.2rem;
    font-size: 1.1rem;
    text-align: justify;
    display: flex;
    align-items: center;
    img{
        width: 1.3rem;
    }
`

const SubNav = styled(motion.div)`
    width: 100%;
    margin: 0 auto;
    position: sticky;
    top: 0;
    padding: 0.5rem;
    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        li{
            padding: 0.2rem;
            a{
                text-decoration: none;
            }
        }
    }
`

const ListCategoryContainer = styled(motion.div)`
    margin-top: 1rem;
    padding: 0rem 1rem;
    h2{
        text-align: center;
        padding: 0.5rem 0;
    }
`

const ListedCategory = styled(motion.div)`
    padding: 0.5rem 0rem;
`

const CategoryName = styled.h3`
    text-align: center;
    text-decoration: underline; 
    padding: 0.3rem
`

const CategoryDescription = styled.p`
    font-size: 1.1rem;
    text-align: center;
    padding-right: 0.5rem;
`

const CategoryData = styled(motion.div)`
    padding: 1rem;
`

const SkillInfo = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        padding-left: 0.5rem;
    }
`

export default CharacterInfo;