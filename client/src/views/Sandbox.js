// testing sandbox

// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// dummy data
import {dummyRooms} from '../helpers/rooms';
// generate rooms
import { generateBool, generateRooms } from '../helpers/room-generator';

// component
const Sandbox = () => {
    // state hooks
    const [map, setMap] = useState({
        base: 12
    });
    const [rooms, setRooms] = useState(dummyRooms);
    console.log(rooms);

    return (
        <>
        <GameWindow>
            <GameMap base={map.base}>
                
            </GameMap>
        </GameWindow>
        </>
    );
};

// styled components
const GameWindow = styled.div`
    width: 90%;
    height: 50rem;
    background-color: black;
    margin: 5rem auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const GameMap = styled.div`
    width: ${props => `${props.base * 60}px`};
    height ${props => `${props.base * 60}px`};
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const Room = styled.div`
    width: ${props => `${props.base * 10 - 5}`};
    height: ${props => `${props.base * 10}px`};
    // border: 1px solid blue;
    background-color: red;
`

// export
export default Sandbox;