// react
import React, { useContext } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { styletest } from '../helpers/styletest';
// contexts
import { DefaultTheme } from '../contexts/DefaultTheme';

// component
const MainNavigation = props => {
    // contexts
    const colorPalette = useContext(DefaultTheme).colors;
    console.log(colorPalette);

    return (
        <>
        <Container colors={colorPalette}>
            <Logo>CS Build Week 1</Logo>

            <Menu>
                <Button colors={colorPalette}>Home</Button>
                <Button colors={colorPalette}>About</Button>
                <Button colors={colorPalette}>Register/Login</Button>
                {console.log(colorPalette.surface900)}
            </Menu>
        </Container>
        </>
    );
};

// styled components

const Container = styled.div`
    width: 100%;
    height: 80px; // temp height
    background-color: ${props => props.colors.surface600};
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.colors.surface100};
`

const Logo = styled.div`
    height: 100%;
    width: 15rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
`

const Menu = styled.div`
    height: 100%;
`

const Button = styled.button`
        width: 7rem;
        height: 100%;
        margin: 0 0.5rem;
        padding: 0.5rem;
        border: none;
        background-color: ${props => props.colors.surface600};
        color: ${props => props.colors.surface100};

            &:hover {
                background-color: ${props => props.colors.highlight};
            }
`

// export
export default MainNavigation;