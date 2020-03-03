// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { styletest } from '../helpers/styletest';

// component
const MainNavigation = () => {
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