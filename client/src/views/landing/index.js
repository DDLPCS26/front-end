// react
import React, { useContext } from 'react';
// router
// todo
// contexts
import { DefaultTheme } from '../../contexts/DefaultTheme';
// styled components
import styled from 'styled-components';
// helpers
import { styletest } from '../../helpers/styletest';
// components
// todo

// component
const Landing = () => {
    // contexts
    const colorPalette = useContext(DefaultTheme).colors;
    
    return (
        <>
        <HeroSection>
            <h1>Hero Section</h1>
        </HeroSection>

        <ContentContainer>
            <InformationalSection>
                <TempInfoImg colors={colorPalette} />
                <InfoCopy colors={colorPalette}>

                </InfoCopy>
            </InformationalSection>

            <InformationalSection>
                <InfoCopy colors={colorPalette}>
                    
                </InfoCopy>
                <TempInfoImg colors={colorPalette} />
            </InformationalSection>

            <InformationalSection>
                <TempInfoImg colors={colorPalette} />
                <InfoCopy colors={colorPalette}>
                    
                </InfoCopy>
            </InformationalSection>
        </ContentContainer>
        </>
    );
};

// styled components
const HeroSection = styled.div`
    width: 100%;
    height: 800px; // temp height
    background-color: black; // temp color
    color: white; // temp color
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const ContentContainer = styled.div`
    max-width: 1400px;
    margin: 10rem auto;
`

const InformationalSection = styled.div`
    width: 100%;
    height: 400px; // temp height
    margin: 5rem 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const TempInfoImg = styled.div`
    width: 30rem;
    height: 25rem;
    border-radius: 5px;
    background-color: ${props => props.colors.surface800};
`

const InfoCopy = styled.div`
    width: 50rem;
    height: 25rem;
    background-color: ${props => props.colors.surface200}
`

// export
export default Landing;