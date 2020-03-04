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
    const colorPallete = useContext(DefaultTheme);
    console.log(colorPallete);

    return (
        <>
        <Container>
            <Logo>CS Build Week 1</Logo>

            <Menu>
                <button>Home</button>
                <button>About</button>
                <button>Register/Login</button>
            </Menu>
        </Container>
        </>
    );
};

// styled components

const Container = styled.div`
    width: 100%;
    height: 80px; // temp height
    ${styletest.greenBg}
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
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
    ${styletest.redBg}
`

const Menu = styled.div`
    height: 100%;

    button {
        width: 7rem;
        height: 100%;
        margin: 0 0.5rem;
        padding: 0.5rem;
    }
`

// export
export default MainNavigation;