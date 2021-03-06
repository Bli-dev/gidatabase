//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//CONVERTERS
import {titleCase, visionTextToImageConverter} from '../util';
//STYLES AND MOTION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataContainerStyles } from '../util'
import { fadeInSlowerNoStagger } from './animations';
//UUID
import { v4 as uuidv4 } from 'uuid';

const DomainInfo = () => {

    const { selectedItemData } = useSelector((state) => state.currentActiveData);

    return (
        <DomainInfoContainer>
            {Object.keys(selectedItemData).length !== 0 ? (
            <DomainData key={selectedItemData.id} variants={fadeInSlowerNoStagger} initial='initial' animate='final'>
                <DomainName>{selectedItemData.name}</DomainName>
                <Line />
                <DomainNationContainer>
                    <h2>Nation:</h2>
                    <h2>{selectedItemData.nation}</h2>
                </DomainNationContainer>
                <DomainLocationContainer>
                    <h2>Location:</h2>
                    <h2>{selectedItemData.location}</h2>
                </DomainLocationContainer>
                <TypeContainer>
                    <h2>Type:</h2>
                    <h2>{selectedItemData.type}</h2>
                </TypeContainer>
                <RecommendedElementsContainer>
                    <h2>Recommended Elements:</h2>
                    <h3>{selectedItemData.recommendedElements.map(element => <img key={uuidv4()} src={visionTextToImageConverter(titleCase(element.element))}
                        alt={titleCase(element.element)} />)}</h3>
                </RecommendedElementsContainer>
                <DomainDescriptionContainer>
                    <h2>Description:</h2>
                    <h3>{selectedItemData.description}</h3>
                </DomainDescriptionContainer>
                <RequirementsContainer>
                    <RequirementsHeader>Requirements</RequirementsHeader>
                        <Requirements>
                        {selectedItemData.requirements.map(element=> (
                            <RequirementContainer key={uuidv4()}>
                                <Requirement>
                                    <Level>
                                        <h2>Level:</h2>
                                        <h3>{element.level}</h3>
                                    </Level>
                                    <AdventureRank>
                                        <h2>Adventure Rank:</h2>
                                        <h3>{element.adventureRank}</h3>
                                    </AdventureRank>
                                    <RecommendedLevel>
                                        <h2>Recommended Level:</h2>
                                        <h3>{element.recommendedLevel}</h3>
                                    </RecommendedLevel>
                                </Requirement>
                                <LeyLineDisorderContainer>
                                    <h2>Ley Line Disorder</h2>
                                    <div></div>
                                    <h3>{element.leyLineDisorder}</h3>
                                </LeyLineDisorderContainer>
                            </RequirementContainer>
                        ))}
                        </Requirements>
                </RequirementsContainer>
                <RewardsContainer>
                    <RewardsHeader>Rewards</RewardsHeader>
                    {selectedItemData.rewards
                        .filter(item => (item.day === 'mon' || item.day === 'tue' || item.day === 'wed' || item.day === 'sun'))
                        .map(item => (
                            <RewardContainer key={uuidv4()}>
                                <DayOfTheWeek>{item.day === 'mon' ? "Monday, Thursday" : item.day === 'tue' ? "Tuesday, Friday" :
                                    item.day === 'wed' ? "Wednesday, Saturday" : "Sunday"}
                                </DayOfTheWeek>
                                {item.details.map(domainLevel => (
                                    <DomainLevel key={uuidv4()}>
                                        <RewardData>
                                            <Level>
                                                <h2>Level:</h2>
                                                <h3>{domainLevel.level}</h3>
                                            </Level>
                                            <AdventureExperience>
                                                <h2>Adventure Experience:</h2>
                                                <h3>{domainLevel.adventureExperience}</h3>
                                            </AdventureExperience>
                                            <CompanionshipExperience>
                                                <h2>Companionship Experience:</h2>
                                                <h3>{domainLevel.companionshipExperience}</h3>
                                            </CompanionshipExperience>
                                            <Mora>
                                                <h2>Mora:</h2>
                                                <h3>{domainLevel.mora}</h3>
                                            </Mora>
                                        </RewardData>
                                        <Drops>
                                            <h2>Drops:</h2>
                                            <div></div>
                                            <h3>{domainLevel.drops ? domainLevel.drops.map(drop => drop.name).join(", ") : domainLevel.items.map(drop => drop.name).join(", ")}</h3>
                                        </Drops>
                                    </DomainLevel>
                                ))}
                            </RewardContainer>
                        ))}
                </RewardsContainer>
            </DomainData>) : (<DataNotFound key={`${selectedItemData.id}_no_info`} variants={fadeInSlowerNoStagger} initial='initial' animate='final'>Information is not Available</DataNotFound>)}
        </DomainInfoContainer>
    )
}

const DomainInfoContainer = styled(motion.div)`
    max-height: 90vh;
    padding: 2rem 0;
    overflow-y: scroll;
`
const DomainData = styled(dataContainerStyles)`
`
const DomainName = styled.h1`
    text-align: center;
    margin-bottom: 0.5rem;
`
const Line = styled.div`
    height: 2px;
    background: rgba(169, 169, 169, 0.5);
    width: 75%;
    margin: 0 auto 2rem auto;
`
const TypeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2rem;
    @media (max-width: 800px){
        font-size: 0.9rem;
        line-height: 1.7rem;
    }
    h2{
        margin-right: 0.5rem;
    }
`
const DomainNationContainer = styled(TypeContainer)`
`
const DomainLocationContainer = styled(TypeContainer)`
`
const RecommendedElementsContainer = styled(TypeContainer)`
    img{
        width: 2rem;
        @media(max-width: 800px){
            width: 1.5rem;
        }
    }
`
const DomainDescriptionContainer = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const RequirementsContainer = styled.div`
`
const RequirementsHeader = styled.h1`
    text-align: center;
    padding: 1rem 0rem 0.5rem 0rem;
`
const Requirements = styled.div`
 margin: 2rem 1rem;
    box-shadow: 1px 1px 15px rgba(69, 69, 69, 0.5);
    border-radius: 10px;
`
const RequirementContainer = styled.div`
    display: flex;
    @media(max-width: 1200px){
        flex-direction: column;
        align-items: center;
    }
`
const Requirement = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    @media(max-width: 1200px){
        width: auto;
    }
`
const Level = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        margin-right: 0.7rem;
        font-size: 1.3rem;
    }
    h3{
        font-size: 1.3rem;
    }
`
const AdventureRank = styled(Level)`
`
const RecommendedLevel = styled(Level)`
`
const LeyLineDisorderContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    @media(max-width: 1200px){
        width: auto;
    }
    div{
        height: 2px;
        background: rgba(169, 169, 169, 1);
        width: 50%;
        margin: 0 auto 0.5rem auto;
    }
`
const RewardsContainer = styled.div`
`
const RewardsHeader = styled(RequirementsHeader)`
`
const RewardContainer = styled(Requirements)`
`
const DayOfTheWeek = styled.h2`
    text-align: center;
    padding: 1rem;
    font-size: 1.7rem;
`
const DomainLevel = styled(RequirementContainer)`
`
const RewardData = styled(Requirement)`
`
const AdventureExperience = styled(Level)`
`
const CompanionshipExperience = styled(Level)`
`
const Mora = styled(Level)`
`
const Drops = styled(LeyLineDisorderContainer)`
`
const DataNotFound = styled(motion.h1)`
    margin: 3rem auto;
    text-align: center;
`

export default DomainInfo;