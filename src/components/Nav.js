//REACT AND REDUX
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//ACTION
import { fetchEntityContentAction } from '../actions/fetchEntityContentAction';
//STRING CONVRTION
import { stringToDisplay } from '../util';
//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';



const Nav = () => {

    const {entities} = useSelector((state) => state.initialEntities);
    const dispatch = useDispatch();
    
    const fetchEntityContent = (entity) => {
        dispatch(fetchEntityContentAction(entity))
    }

    return (
        <StyledNav>
            {entities.map((entity, i) => (entity !== 'elements' &&
                <ButtonContainer>
                    <button onClick={() => fetchEntityContent(entity)} key={i}>{stringToDisplay(entity)}</button>
                    <LinesContainer>
                        <Line1 />
                        <Line2 />
                    </LinesContainer>
                </ButtonContainer>
            ))}
        </StyledNav>
    ) 
    
}

const StyledNav = styled(motion.div)`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1.5rem 0rem;
    width: 75%;
    margin: auto;
    min-height: 10vh;
    @media(max-width: 800px){
        width: 90%
    }
`

const ButtonContainer = styled(motion.div)`
    button{
        border: none;
        background: transparent;
        outline: none;
        font-size: 1.5rem;
        padding: 0.2rem;
        border-radius: 2rem;
        &:hover{
            cursor: pointer;
            box-shadow: 1px 1px 15px white;
        }
    }
`
const LinesContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
`
const Line1 = styled(motion.div)`
    height: 2px;
    background:white;
    width: 0%;
`
const Line2 = styled(Line1)`
`

export default Nav;