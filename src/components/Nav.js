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
            {entities.map((entity, i) => (entity !== 'elements' && <button onClick={() => fetchEntityContent(entity)} key={i}>{stringToDisplay(entity)}</button>))}
        </StyledNav>
    ) 
    


}

const StyledNav = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0rem;
    width: 75%;
    margin: auto;
    min-height: 10vh;
    button{
        border: none;
        background: transparent;
        outline: none;
        font-size: 1.5rem;
        padding: 1rem;
        border-radius: 2rem;
        &:hover{
            cursor: pointer;
            box-shadow: 1px 1px 15px white;
        }
    }
`

export default Nav;