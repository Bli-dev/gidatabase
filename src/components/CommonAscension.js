//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//CONVERTERS
import { stringToDisplay,rarityConversion, materialsToImageConverter } from '../util';
//STYLES AND MOTION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataContainerStyles } from '../util'
import { flyUp } from './animations';

const CommonAscension = () => {

    const { selectedItemData } = useSelector((state) => state.currentActiveData);

    console.log(selectedItemData)

    return (
        <CommonAscensionContainer>
            {Object.keys(selectedItemData).map((key, i)=> (
                <MaterialContainer key={i}>
                    <HeaderContainer>
                        <ImageContainer>
                            <img src={materialsToImageConverter(key)} alt="missing"/>
                        </ImageContainer>
                        <h1>{stringToDisplay(key)}</h1>
                    </HeaderContainer>
                    <Line />
                    <MaterialDataContainer>
                        <RaritySubclassesContainer>
                        {selectedItemData[key].items.map(sub => (
                            <RaritySubClasses key={sub.id}>
                                <h3>{rarityConversion('rarity', sub.rarity)}</h3>
                                <h2>{stringToDisplay(sub.name)}</h2>
                            </RaritySubClasses>
                        ))}  
                        </RaritySubclassesContainer>
                        <CharactersWeaponsContainer>
                            {selectedItemData[key].weapons && <h2>Weapons</h2>}
                            {selectedItemData[key].characters && <h2>Characters</h2>}
                            <h3>{selectedItemData[key].weapons ? selectedItemData[key].weapons.map(weapon => stringToDisplay(weapon)).join(', ') :
                                 selectedItemData[key].characters ? selectedItemData[key].characters.map(character => stringToDisplay(character)).join(', ') : ''}</h3>
                        </CharactersWeaponsContainer>
                        <SourcesContainer>
                            <h2>Sources</h2>
                            <h3>{selectedItemData[key].sources.join(', ')}</h3>
                        </SourcesContainer>
                    </MaterialDataContainer>
                </MaterialContainer>
            ))}
        </CommonAscensionContainer>
    )
}

const CommonAscensionContainer = styled(motion.div)`
    max-height: 90vh;
    padding: 1rem 0;
    overflow-y: scroll;

`

const MaterialContainer = styled(dataContainerStyles)`
    margin: 1rem auto;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    backdrop-filter: blur(15px);
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 1.7rem;
    }
`
const ImageContainer = styled.div`
    margin-right: 1rem;
    width: 75px;
    img{
        width: 100%;
    }
`
const Line = styled.div`
    height: 2px;
        background: rgba(169, 169, 169, 0.5);
        width: 75%;
        margin: 0 auto 1rem auto;
`
const MaterialDataContainer = styled.div`
    display: flex;
    margin-top: 1.5rem;
    @media (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`
const RaritySubClasses = styled.div`
    display: flex;
    align-items: flex-end;;
    h3{
        width: 6rem;
        text-align: right;
        padding-right: 0.5rem;
    }
    img{
        width: 1.3rem;
    }
    h2{
        font-size: 1.3rem;
    }
`
const RaritySubclassesContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 800px){
        width: auto;
    }
`
const CharactersWeaponsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    @media (max-width: 800px){
        width: auto;
    }
    h2{
        margin: 0.5rem 0;
    }
    h3{
        text-align: center;
    }
`
const SourcesContainer = styled(CharactersWeaponsContainer)`
    width: 20%;
    @media (max-width: 800px){
        width: auto;
    }
`
export default CommonAscension;