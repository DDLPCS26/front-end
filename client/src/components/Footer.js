// react
import React, { useContext } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { styletest } from '../helpers/styletest';
// contexts
import { DefaultTheme } from '../contexts/DefaultTheme';

// component
const Footer = props => {
    // contexts
    const colorPalette = useContext(DefaultTheme).colors;
    
    return (
        <>
        <Container colors={colorPalette}>

        </Container>
        </>
    );
};

// styled components
const Container = styled.div`
    width: 100%;
    height: 400px; // temp height
    margin-top: 5rem;
    background-color: ${props => props.colors.surface800};
`

export default Footer;