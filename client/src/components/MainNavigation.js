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

        </Container>
        </>
    );
};

// styled components

const Container = styled.div`
    width: 100%;
    height: 80px; // temp height
    ${styletest.greenBg}
`

// export
export default MainNavigation;