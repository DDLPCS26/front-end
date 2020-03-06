// testing sandbox

// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// generate rooms
import { generateBool, generateRooms } from '../helpers/room-generator';

// component
const Sandbox = () => {
    // state hooks
    const [map, setMap] = useState({
        base: 10
    });
    const [rooms, setRooms] = useState(generateRooms(map.base));
    console.log(rooms);

    return (
        <>
        <GameWindow>
            <GameMap base={map.base}>
                {rooms.map(room => {
                    return <Room 
                    base={map.base}
                    north={room.north}
                    south={room.south}
                    west={room.west}
                    east={room.east} 
                    />
                })}
            </GameMap>
        </GameWindow>
        </>
    );
};

// styled components
const GameWindow = styled.div`
    width: 90%;
    height: 70rem;
    background-color: black;
    margin: 5rem auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const GameMap = styled.div`
    width: ${props => `${props.base * 100}px`};
    height ${props => `${props.base * 100}px`};
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const Room = styled.div`
    width: ${props => `${props.base * 10 - 5}px`};
    height: ${props => `${props.base * 10}px`};
    border: 1px solid blue;
    background-color: red;
`

// export
export default Sandbox;