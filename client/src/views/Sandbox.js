// testing sandbox

// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// dummy data
import {dummyRooms} from '../helpers/rooms';

// helper functions

const connectionCheck = array => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i].north === array[i + 1].south || array[i].east === array[i + 1].west || array[i].south === array[i + 1].north || array[i].west === array[i + 1].east) {

        }
    }
};

// component
const Sandbox = () => {
    // state hooks
    const [map, setMap] = useState({
        base: 12
    });
    const [rooms, setRooms] = useState(dummyRooms.rooms);
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
                                east={room.east}
                                west={room.west} 
                            > 
                            <p>ID:{room.id.toString()}</p>
                            <p>X:{room.x.toString()}</p> 
                            <p>Y: {room.y.toString()}</p> 
                            </Room>
                })}
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
    width: ${props => `${props.base * 5 - 5}px`};
    height: ${props => `${props.base * 5}px`};
    border: 1px solid blue;
    background-color: red;
`

// export
export default Sandbox;