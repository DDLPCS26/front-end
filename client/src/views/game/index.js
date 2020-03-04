// react
import React, { useContext } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { styletest } from '../../helpers/styletest';
// contexts
import { DefaultTheme } from '../../contexts/DefaultTheme';
// dummy data
import { rooms } from '../../helpers/rooms';
console.log(rooms);

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
                <Button className='start'>Start Game</Button>
                <DirectionalControls colors={colorPalette}>
                    <Button>North</Button>
                    <Button>East</Button>
                    <Button>South</Button>
                    <Button>West</Button>
                </DirectionalControls>
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
    background-color: ${props => props.colors.surface100};
    border-radius: 5px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    Button {
        border: 3px solid ${props => props.colors.surface400};
        background-color: transparent;
        color: ${props => props.colors.surface400};
        font-weight: bold;
    }

    .start {
        width: 15rem;
    }
`

const DirectionalControls = styled.div`
    
    Button {
        border: 3px solid ${props => props.colors.surface400};
        background-color: transparent;
        color: ${props => props.colors.surface400};
        font-weight: bold;
    }
`

const Button = styled.button`
    width: 10rem;
    height: 5rem;
    border: none;
    border-radius: 5px;
    margin: 1rem;
    background-color: ${props => console.log(props)};
    font-size: 1.15rem;
`

export default GameDashboard;