//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';

//STYLES AND MOTION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataContainerStyles } from '../util';
//CONVERSIONS
import {materialsToImageConverter} from '../util';

const BossMaterial = () => {

    const {selectedItemData} = useSelector((state) => state.currentActiveData)

    return (
        <BossMaterialContainer>
            <MaterialContainer>
                {Object.keys(selectedItemData).map(key => (
                    <Material>                   
                            <h2>{selectedItemData[key].name}</h2>
                            <ImageContainer>
                                <img src={materialsToImageConverter(selectedItemData[key].id)} alt="missing" />
                            </ImageContainer>
                        <SourceContainer>
                            <h3>Source:</h3>
                            <h4>{selectedItemData[key].source}</h4>
                        </SourceContainer>
                    </Material>
                ))}
            </MaterialContainer>
        </BossMaterialContainer>
    )
}

const BossMaterialContainer = styled(motion.div)`
    max-height: 90vh;
    padding: 2rem 0;
    overflow-y: scroll;
`

const MaterialContainer = styled(dataContainerStyles)`
    max-width: 75%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const Material = styled(motion.div)`
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    box-shadow: 1px 1px 10px rgba(69, 69, 69, 1);
    h2{
        font-size: 1.5rem;
    }
`

const ImageContainer = styled.div`
    height: 100px;
    margin: 0.5rem;
    img{
        height: 100%;
        }
`
const SourceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    h3{
        padding-right: 0.5rem;
    }
    h4{
        font-size: 1.1rem;
    }
`
export default BossMaterial;