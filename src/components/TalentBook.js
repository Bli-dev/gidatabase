//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {dataContainerStyles} from '../util';
//CONVERTERS
import {titleCase, visionTextToImageConverter, stringToDisplay, materialsToImageConverter, rarityConversion } from '../util'

const TalentBook = () => {

    const { selectedItemData } = useSelector((state) => state.currentActiveData);

    console.log(selectedItemData);

    return (
        <TalentBookContainer>
            {Object.keys(selectedItemData).map(book => (
                <BookContainer>
                    <BookTitle>
                        <BookImageContainer>
                            <img src={materialsToImageConverter(book)} alt="missing"/>
                        </BookImageContainer>
                        <h2>{titleCase(book)}</h2>
                    </BookTitle>
                    <Line />
                    <BookData>
                        <RaritySubclassesContainer>
                            {selectedItemData[book].items.map(item => (
                                <RaritySubClass>
                                    <h2>{rarityConversion('rarity', item.rarity)}</h2>
                                    <h3>{item.name}</h3>
                                </RaritySubClass>
                            ))}    
                        </RaritySubclassesContainer>
                        <Characters>
                            <h2>Characters</h2>
                            <h3>{selectedItemData[book].characters.map(character => stringToDisplay(character)).join(", ")}</h3>
                        </Characters>
                        <Availability>
                            <h2>Availability</h2>
                            <h3>{stringToDisplay(selectedItemData[book].availability.join(", "))}</h3>
                        </Availability>
                        <Source>
                            <h2>Source</h2>
                            <h3>{stringToDisplay(selectedItemData[book].source)}</h3>
                        </Source>
                    </BookData>
                </BookContainer>
            ))}
        </TalentBookContainer>
    )
}

const TalentBookContainer = styled(motion.div)`
`
const BookContainer = styled(dataContainerStyles)`
    margin: 1.5rem auto;
`
const BookTitle = styled.div`
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
const BookImageContainer = styled.div`
    margin-right: 1rem;
    width: 75px;
    img{
        width: 100%;
    }
`
const BookData = styled.div`
    display: flex;
`
const RaritySubclassesContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const RaritySubClass = styled.div`
    display: flex;
    h2{
        width: 6rem;
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
const Characters = styled.div`
    width: 40%;  
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    h2{
        margin-bottom: 0.5rem;
    }
`
const Availability = styled(Characters)`
width: 20%;
`
const Source = styled(Characters)`
width: 15%;
`
export default TalentBook;