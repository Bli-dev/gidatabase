//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//CONVERTERS
import {titleCase, stringToDisplay, materialsToImageConverter } from '../util';
//STYLES AND MOTION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataContainerStyles } from '../util'
import { flyUp } from './animations';

const LocalSpecialties = () => {

    const { selectedItemData } = useSelector((state) => state.currentActiveData);

    console.log(selectedItemData)

    return (
        <LocalSpecialtiesContainer>
            {Object.keys(selectedItemData).map((region, i)=> (
                <RegionContainer key={i}>
                    <Region>
                        <h1>{titleCase(region)}</h1>
                    </Region>
                    <Line></Line>
                    <Specalties>
                        {selectedItemData[region].map(specialty => (
                            <SpecialtyContainer key={specialty.id}>
                                <SpecialtyData>
                                    <SpecialtyImageContainer>
                                        <img src={materialsToImageConverter(specialty.id)} alt="missing"/>
                                    </SpecialtyImageContainer>
                                    <h3>{specialty.name}</h3>
                                </SpecialtyData>
                                <Characters>
                                    <h2>Characters</h2>
                                    <h3>{specialty.characters.map(character => stringToDisplay(character)).join(', ')}</h3>
                                </Characters>
                            </SpecialtyContainer>
                        ))}
                    </Specalties>
                </RegionContainer>
            ))}
        </LocalSpecialtiesContainer>
    )
}

const LocalSpecialtiesContainer = styled(motion.div)`
    max-height: 90vh;
    overflow-y: scroll;
`
const RegionContainer = styled(dataContainerStyles)`
    margin: 1.5rem auto;
`
const Region = styled.div`
    text-align: center;
    margin: 1rem auto 0.5rem auto;;
`
const Line = styled.div`
    height: 2px;
    background: rgba(169, 169, 169, 0.5);
    width: 75%;
     margin: 0 auto 2rem auto;
`
const Specalties = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex: 1 1 auto;
`
const SpecialtyContainer = styled.div` 
    flex-shrink: 0;
    min-width: 30%;
    display: flex;
    justify-content: space-around;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    box-shadow: 1px 1px 10px rgba(69, 69, 69, 1);
`
const SpecialtyData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const SpecialtyImageContainer = styled.div`
    width: 75px;
    img{
        width: 100%;
    }
`
const Characters = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    h2{
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
`
export default LocalSpecialties;