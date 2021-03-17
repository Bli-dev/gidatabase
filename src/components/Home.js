//REACT-REDUX
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//ACTIONS
import {initiaEntitiesFetchAction} from '../actions/initialEntitiesFetchAction';
//COMPONENTS
import Nav from './Nav';
import SelectedEntity from './SelectedEntity';
import CharacterInfo from './CharacterInfo';
import ArtifactWeaponInfo from './ArtifactWeaponInfo';
import MaterialsInfo from './MaterialsInfo';
import NationsInfo from './NationsInfo';
import DomainInfo from './DomainInfo';
import ErrorComponent from './ErrorComponent';
//STYLES AND MOTION
import styled from 'styled-components';
import { motion} from 'framer-motion';


const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initiaEntitiesFetchAction());
    }, [dispatch])

    const {entities} = useSelector((state) => state.initialEntities);
    const { isEntityActive, selectedEntityName, isItemActive } = useSelector((state) => state.currentActiveData);
    const {error} = useSelector((state) => state.error)
    
    return (
        <StyledHome>
                {entities && (<Nav />)}
            {error ? <ErrorComponent /> :
                isEntityActive ? <SelectedEntity /> :
                    isItemActive && selectedEntityName === 'artifacts' ? <ArtifactWeaponInfo /> :
                        isItemActive && selectedEntityName === 'characters' ? <CharacterInfo /> :
                            isItemActive && selectedEntityName === 'domains' ? <DomainInfo /> :
                                isItemActive && selectedEntityName === 'materials' ? <MaterialsInfo /> :
                                    isItemActive && selectedEntityName === 'nations' ? <NationsInfo /> :
                                        isItemActive && selectedEntityName === 'weapons' ? <ArtifactWeaponInfo /> : ''}
        </StyledHome>
)
}

const StyledHome = styled(motion.div)`
`

export default Home;

