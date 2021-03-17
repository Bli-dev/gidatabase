//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInSlowerNoStagger } from './animations';

const ErrorComponent = () => <ErrorMessageContainer variants={fadeInSlowerNoStagger} initial='initial' animate='final'>
                                <ErrorMessage>Error getting data from server.</ErrorMessage>
                            </ErrorMessageContainer >;

const ErrorMessageContainer = styled(motion.div)`
    height: 25vh;
    width: 75vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
`

const ErrorMessage = styled.h1`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`

export default ErrorComponent;