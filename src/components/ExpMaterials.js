//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//CONVERTERS
import { rarityConversion, materialsToImageConverter } from '../util';
//STYLES AND MOTION
import styled from 'styled-components';
import { dataContainerStyles } from '../util'
import { fadeInSlowerNoStagger } from './animations';

const ExpMaterials = () => {

    const { selectedItemData, selectedItemName } = useSelector((state) => state.currentActiveData)
   
    return (
        <ExpMaterialsContainer>
            <MaterialsContainer key={`${selectedItemName}_key`} variants={fadeInSlowerNoStagger} initial='initial' animate='final'>
            {selectedItemData.items.map(item => (
                <Material key={item.id}>
                    <h2>{item.name}</h2>
                    <ImageContainer>
                        <img src={materialsToImageConverter(item.id)} alt=""/>
                    </ImageContainer>
                    <ExperienceContainer>
                        <h2>Experience:</h2>
                        <h2>{item.experience}</h2>
                    </ExperienceContainer>
                    <RarityContainer>
                        <h2>Rarity:</h2>
                        <h1>{rarityConversion('rarity', item.rarity)}</h1>
                    </RarityContainer>
                </Material>
            ))}
            </MaterialsContainer>
        </ExpMaterialsContainer>
    )
}

const ExpMaterialsContainer = styled.div`
    max-height: 90vh;
    padding: 2rem 0;
    overflow-y: scroll;
`
const MaterialsContainer = styled(dataContainerStyles)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1.5rem;
`
const Material = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    box-shadow: 1px 1px 10px rgba(69, 69, 69, 1);
`
const ImageContainer = styled.div`
    width: 150px;
    img{
        width: 100%;
    }
`
const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    h2{
        margin-right: 1rem;
    }
`
const RarityContainer = styled(ExperienceContainer)`    
    img{
        width: 1.3rem;
    }
`

export default ExpMaterials;