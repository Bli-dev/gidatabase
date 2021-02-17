//REACT AND REDUX
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//API AND ACTION
import { entityItemIconURL, flowerOfLifeIconURL } from '../api';
import {fetchItemInfoAction} from '../actions/fetchItemInfoAction'
//STRING CONVERSION
import { stringToDisplay } from '../util';
//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {dataContainerStyles} from '../util';


const SelectedEntity = () => {
    const { selectedEntityName, selectedEntityItems } = useSelector((state) => state.currentActiveData)

    const dispatch = useDispatch();

    const fetchItemData = (entity, item) => {
        dispatch(fetchItemInfoAction(entity, item));
    }

    return (
        <SelectedEntityContainer>
            <SelectedEntityData>
                {selectedEntityItems.map(item =>
                    <SelectedEntityContent selectedEntityName={selectedEntityName} onClick={() => fetchItemData(selectedEntityName, item)} key={item}>
                        {(selectedEntityName === 'artifacts' && <img src={flowerOfLifeIconURL(selectedEntityName, item)} alt={item}></img>) ||
                            (selectedEntityName === 'characters' && <img src={entityItemIconURL(selectedEntityName, item)} alt={item}></img>) ||
                            (selectedEntityName === 'elements' && <img src={entityItemIconURL(selectedEntityName, item)} alt={item}></img>) ||
                            (selectedEntityName === 'weapons' && <img src={entityItemIconURL(selectedEntityName, item)} alt={item}></img>)}
                        <ItemName>{stringToDisplay(item)}</ItemName>
                    </SelectedEntityContent>
                    )}
            </SelectedEntityData>
        </SelectedEntityContainer>
    )
};

const SelectedEntityContainer = styled(motion.div)`
    width: 100vw;
    max-height: 90vh;
    padding: 2rem 0;
    overflow-y: scroll;
`

const SelectedEntityData = styled(dataContainerStyles)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
`;

const SelectedEntityContent = styled(motion.div)`
    width: ${({ selectedEntityName }) => selectedEntityName == 'artifacts' || selectedEntityName == 'characters' ? '185px' : selectedEntityName == 'weapons' ? '200px' : '300px'};
    height: ${({ selectedEntityName }) => selectedEntityName == 'artifacts' ? '185px' : selectedEntityName == 'weapons' ? '200px' : selectedEntityName == 'domains' ? '75px' : 'auto'};
    font-size: ${({selectedEntityName}) => selectedEntityName == 'artifacts' || selectedEntityName == 'weapons' ? `1.1rem` : `1.3rem`};
    display: flex;
    flex-direction: column;
    justify-content: space-around;;
    align-items: center;
    margin: 0.5rem;
    border: 1px solid rgba(69, 69, 69, 0.5);
    border-radius: 1rem;
    box-shadow: 1px 1px 10px black;
    &:hover{
        cursor: pointer;
    }
    
    img{
        width: 120px;
        height: 120px;
        border-radius: 1rem;
        padding-top: 0.5rem; 
        object-fit: cover;
        object-position: top;
    }
`

const ItemName = styled(motion.div)`
    text-align: center;
    text-overflow: wrap;
    padding: 0.5rem;
  
`

export default SelectedEntity;