//REACT-REDUX
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//ACTIONS
import {initiaEntitiesFetchAction} from '../actions/initialEntitiesFetchAction';
//COMPONENTS
import Nav from './Nav';
import SelectedEntity from './SelectedEntity';
import CharacterInfo from './CharacterInfo';
//STYLES AND MOTION
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initiaEntitiesFetchAction());
    }, [dispatch])

    const {entities} = useSelector((state) => state.initialEntities);
    const { isEntityActive, selectedEntityName, isItemActive} = useSelector((state) => state.currentActiveData);
    return (
        <StyledHome>
            {entities && (<Nav />)}
            {isEntityActive && (<SelectedEntity />)}
            {isItemActive && selectedEntityName === 'characters' && <CharacterInfo />}
        </StyledHome>
)
}

const StyledHome = styled(motion.div)`
`

export default Home;
