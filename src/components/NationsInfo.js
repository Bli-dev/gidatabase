//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';

//UTILITIES
import { stringToDisplay, visionTextToImageConverter, dataContainerStyles } from '../util';

//STYLES AND ANMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {fadeInSlowerNoStagger} from './animations'
    
    
const NationsInfo = () => {

    const { selectedItemName, selectedItemData } = useSelector((state) => state.currentActiveData)

    const nationsDescription = {
        liyue: "A bountiful harbor that lies in the east of Teyvat. Mountains stand tall and proud alongside the stone forest, that, together with the open plains and lively rivers, make up Liyue's bountiful landscape, which shows its unique beauty through each of the four seasons. Just how many gifts from the Geo God lie in wait amongst the rocks of Liyue's mountains?",
        mondstadt: "A city of freedom that lies in the northeast of Teyvat. From amongst mountains and wide-open plains, carefree breezes carry the scent of dandelions — a gift from the Anemo God, Barbatos — across Cider Lake to Mondstadt, which sits on an island in the middle of the lake."
    }

    return (
        <NationsInfoContainer>
            <SelectedNationContainer key={`${selectedItemName}_key`} variants={fadeInSlowerNoStagger} initial='initial' animate='final'>
                <HeaderContainer>
                    <div>
                        <img src={visionTextToImageConverter(selectedItemData.element)} alt={stringToDisplay(selectedItemData.element)}/>
                    </div> 
                    <h1>{selectedItemData.name}</h1>
                </HeaderContainer>
                <SubsectionContainer>
                    <h2>Archon:</h2>
                    <h3>{selectedItemData.archon}</h3>
                </SubsectionContainer>
                <SubsectionContainer>
                    <h2>Controling Entity:</h2>
                    <h3>{selectedItemData.controllingEntity}</h3>
                </SubsectionContainer>
                <p>{nationsDescription[selectedItemName]}</p>
            </SelectedNationContainer>
        </NationsInfoContainer>
    )
}

const NationsInfoContainer = styled.div`
    max-height: 90vh;
    padding: 2rem 0;
    overflow-y: scroll;
`

const SelectedNationContainer = styled(dataContainerStyles)`
        p{
            padding: 2rem 0.5rem;
            font-size: 1.5rem;
            line-height: 2rem;
            text-align: justify;
            width: 85%;
            margin: auto;
            text-indent: 2rem;
        }

`
const SubsectionContainer = styled(motion.div)`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    line-height: 2rem;
    h2{
        padding-right: 0.5rem;
    }
    h3{
        font-size: 1.3rem;
    }
`

const HeaderContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    img{
        width: 80%;
    }
`

export default NationsInfo;