// react
import React, { useContext } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { styletest } from '../../helpers/styletest';
// contexts
import { DefaultTheme } from '../../contexts/DefaultTheme';

// component
const GameDashboard = props => {
    // contexts
    const colorPalette = useContext(DefaultTheme).colors;
    
    return (
        <>
        <Container>
            <GameWindow colors={colorPalette}>

            </GameWindow>

            <ControlInterface colors={colorPalette}>
                <Button>Start Game</Button>
                <Button>North</Button>
                <Button>East</Button>
                <Button>South</Button>
                <Button>West</Button>
            </ControlInterface>
        </Container>
        </>
    );
};

// styled components
const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 5rem auto;
    height: 800px; // temp height
`

const GameWindow = styled.div`
    width: 100%;
    height: 50rem;
    margin: 5rem 0;
    background-color: ${props => props.colors.surface1000};
    border-radius: 5px;
`

const ControlInterface = styled.div`
    width: 100%;
    height: 10rem;
    background-color: ${props => props.colors.surface200};
    border-radius: 5px;
`

const Button = styled.button`

`

export default GameDashboard;