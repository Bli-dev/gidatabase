//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataContainerStyles } from '../util';
import {flyUp, fadeInFastStagger} from './animations'
//CONVERTERS
import {titleCase, stringToDisplay, materialsToImageConverter, rarityConversion } from '../util'

const TalentBook = () => {

    const { selectedItemData, selectedItemName } = useSelector((state) => state.currentActiveData);

    return (
        <TalentBookWeaponAscensionContainer key={`${selectedItemName}_key`} variants={fadeInFastStagger} initial='initial' animate='final'>
            {Object.keys(selectedItemData).map(book => (
                <ItemContainer key={`${book}_key`} variants={flyUp}>
                    <ItemTitle>
                        <TitleImageContainer>
                            <img src={materialsToImageConverter(book)} alt="missing"/>
                        </TitleImageContainer>
                        <h2>{titleCase(book)}</h2>
                    </ItemTitle>
                    <Line />
                    <ItemData>
                        <RaritySubclassesContainer>
                            {selectedItemData[book].items.map(item => (
                                <RaritySubClass key={`${book}${item.rarity}`}>
                                    <h2>{rarityConversion('rarity', item.rarity)}</h2>
                                    <h3>{item.name}</h3>
                                </RaritySubClass>
                            ))}    
                        </RaritySubclassesContainer>
                        <CharactersWeapons>
                            {selectedItemName === 'talent-book' && <h2>Characters</h2>}
                            {selectedItemName === 'talent-book' && (<h3>{selectedItemData[book].characters.map(character => stringToDisplay(character)).join(", ")}</h3>)}
                            {selectedItemName === 'weapon-ascension' && <h2>Weapons</h2>}
                            {selectedItemName === 'weapon-ascension' && (<h3>{selectedItemData[book].weapons.map(weapon => stringToDisplay(weapon)).join(", ")}</h3>)}
                        </CharactersWeapons>
                        <Availability>
                            <h2>Availability</h2>
                            <h3>{stringToDisplay(selectedItemData[book].availability.join(", "))}</h3>
                        </Availability>
                        <Source>
                            <h2>Source</h2>
                            <h3>{stringToDisplay(selectedItemData[book].source)}</h3>
                        </Source>
                    </ItemData>
                </ItemContainer>
            ))}
        </TalentBookWeaponAscensionContainer>
    )
}

const TalentBookWeaponAscensionContainer = styled(motion.div)`
    max-height: 90vh;
    padding: 2rem 0;
    overflow-y: scroll;
`
const ItemContainer = styled(dataContainerStyles)`
    margin: 1.5rem auto;
`
const ItemTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`
const Line = styled.div`
    height: 2px;
    background: rgba(169, 169, 169, 0.5);
    width: 75%;
    margin: 0 auto 1rem auto;
`
const TitleImageContainer = styled.div`
    margin-right: 1rem;
    width: 75px;
    img{
        width: 100%;
    }
`
const ItemData = styled.div`
    display: flex;
    @media(max-width: 1200px){
        flex-direction: column;
        align-items: center;
    }
`
const RaritySubclassesContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 1200px){
        width: auto;
    }
`
const RaritySubClass = styled.div`
    display: flex;
    align-items: center;
    h2{
        width: 8rem;
        text-align: right;
        padding-right: 0.5rem;
    }
    img{
        width: 1.3rem;
    }
    h1{
        font-size: 1.3rem;
    }

`
const CharactersWeapons = styled.div`
    width: 40%;  
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    @media (max-width: 1200px){
        width: auto;
    }
    h2{
        margin-bottom: 0.5rem;
    }
`
const Availability = styled(CharactersWeapons)`
width: 15%;
    @media (max-width: 1200px){
        width: auto;
    }
`
const Source = styled(CharactersWeapons)`
width: 15%;
    @media (max-width: 1200px){
        width: auto;
    }
`
export default TalentBook;