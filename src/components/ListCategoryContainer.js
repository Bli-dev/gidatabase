import React from 'react';

{Object.keys(selectedItemData).map(key => (
    typeof selectedItemData[key] == 'object' &&
    <BasicInfoSection>
        <InfoKey>{`${stringToDisplay(key)}:`}</InfoKey>
        <InfoValue>{rarityConversion(key, selectedItemData[key]) }</InfoValue>
    </BasicInfoSection>
))
}

{Object.keys(selectedItemData).map(key => (
    typeof selectedItemData[key] == 'object' &&
    <ListCategoryContainer id={key}>
        <h2>{key === 'constellations' ?  'Constellations' : key === 'passiveTalents' ? 'Passive Talents' : 'Active Skills'}</h2>
                {selectedItemData[key].map((item, i)=> 
                <ListedCategory key={i}>
                    <CategoryName>{`${item.unlock}: ${item.name}`}</CategoryName>
                    <CategoryDescription>{item.description}</CategoryDescription>
                    <CategoryData>{item.upgrades && item.upgrades.map(value => <SkillInfo>
                        <h4>{`${value.name}:`}</h4>
                        <p>{`${value.value};`}</p>
                    </SkillInfo>)}</CategoryData>
                </ListedCategory>
                )}
        </ListCategoryContainer>
))
}

                <ListCategoryContainer id='constellations'>
                            <h2>Constellations</h2>
                    {selectedItemData.constellations.map((constellation, i)=> 
                        <ListedCategory key={i}>
                            <CategoryName>{`${constellation.unlock}: ${constellation.name}`}</CategoryName>
                            <CategoryDescription>{constellation.description}</CategoryDescription>
                        </ListedCategory>
                    )}
                </ListCategoryContainer>

{/*<ListCategoryContainer id='constellations'>
                            <h2>Constellations</h2>
                    {selectedItemData.constellations.map((constellation, i)=> 
                        <ListedCategory key={i}>
                            <CategoryName>{`${constellation.unlock}: ${constellation.name}`}</CategoryName>
                            <CategoryDescription>{constellation.description}</CategoryDescription>
                        </ListedCategory>
                    )}
                </ListCategoryContainer>
                <ListCategoryContainer id='talents'>
                            <h2>Active Skills</h2>
                    {selectedItemData.skillTalents.map((talent, i)=> 
                        <ListedCategory key={i}>
                            <CategoryName>{`${talent.unlock}: ${talent.name}`}</CategoryName>
                            <CategoryDescription>{talent.description}</CategoryDescription>
                            <CategoryData>{talent.upgrades && talent.upgrades.map(value => <SkillInfo>
                                <h4>{`${value.name}:`}</h4>
                                <p>{`${value.value};`}</p>
                            </SkillInfo>)}</CategoryData>
                        </ListedCategory>
                    )}
                </ListCategoryContainer>
                <ListCategoryContainer id='passives'>
                            <h2>Passive Skills</h2>
                    {selectedItemData.passiveTalents.map((passive, i)=> 
                        <ListedCategory key={i}>
                            <CategoryName>{`${passive.unlock}: ${passive.name}`}</CategoryName>
                            <CategoryDescription>{passive.description}</CategoryDescription>
                        </ListedCategory>
                    )}
                    </ListCategoryContainer> */}