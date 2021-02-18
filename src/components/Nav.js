//REACT AND REDUX
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//ACTIONS
import { fetchEntityContentAction } from '../actions/fetchEntityContentAction';
import { resetEntityAction } from '../actions/resetEntityAction';
//STRING CONVRTION
import { stringToDisplay } from '../util';
//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';



const Nav = () => {

    const { entities } = useSelector((state) => state.initialEntities);
    const dispatch = useDispatch();
    
    const fetchEntityContent = (entity) => {
        dispatch(resetEntityAction);
        dispatch(fetchEntityContentAction(entity))    
    }

    return (
        <StyledNav>
            {entities.map((entity, i) => (entity !== 'elements' &&
                <Button onClick={() => fetchEntityContent(entity)} key={i}
                whileHover={{cursor: 'pointer', scale: 1.3}}>
                {stringToDisplay(entity)}</Button>
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
        width: 85%
    }
`
const Button = styled(motion.button)`
    border: none;
    background: transparent;
    outline: none;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 2rem;
`

export default Nav;