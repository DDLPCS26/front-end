// react
import React, { useState, useContext } from 'react';
// router
import { Route, useHistory } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// helpers
import { styletest } from '../helpers/styletest';
// contexts
import { DefaultTheme } from '../contexts/DefaultTheme';

// component
const MainNavigation = props => {
    // router
    const history = useHistory();
    
    // contexts
    const colorPalette = useContext(DefaultTheme).colors;

    // state
    // todo

    // handlers
    const buttonHandler = pathname => {
        history.push(`/${pathname}`)
    };

    return (
        <>
        <Container colors={colorPalette}>
            <Logo>CS Build Week 1</Logo>

            <Menu>
                <Button onClick={() => buttonHandler('home')} colors={colorPalette}>Home</Button>
                <Button onClick={() => buttonHandler('about')} colors={colorPalette}>About</Button>
                <Button onClick={() => buttonHandler('login')} colors={colorPalette}>Register/Login</Button>
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
    background-color: ${props => props.colors.surface800};
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
        background-color: ${props => props.colors.surface800};
        color: ${props => props.colors.surface100};
        letter-spacing: 0.015rem;
        font-weight: bold;
        font-size: 1rem;

            &:hover {
                background-color: ${props => props.colors.highlight};
            }

            &:last-child {
                width: 8rem;
                margin-right: 1rem;
            }
`

// export
export default MainNavigation;