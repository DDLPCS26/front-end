// testing sandbox

// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// dummy data
import {dummyRooms} from '../helpers/rooms';
import {dummyPlayer} from '../helpers/player';

// helper functions
const arrayRig = array => {
    let newArray = [];
    let row1 = array.slice(0,12);
    let row2 = array.slice(12,24).reverse();
    let row3 = array.slice(24,48);
    let row4 = array.slice(48, 60).reverse();
    let row5 = array.slice(60, 72);
    let row6 = array.slice(72, 84).reverse();
    let row7 = array.slice(84, 96);
    let row8 = array.slice(96, 108).reverse();
    let row9 = array.slice(108, 120);
    let row10 = array.slice(120, 132);
    let row11 = array.slice(132, 144).reverse();
    let row12 = array.slice();

    newArray = row1.concat(row2, row3, row4, row5, row6, row7, row8, row9, row10, row11);

    return newArray;

};


// component
const Sandbox = () => {
    // state hooks
    const [player, setPlayer] = useState(dummyPlayer);
    const [map, setMap] = useState({
        base: 12
    });
    const [rooms, setRooms] = useState(arrayRig(dummyRooms.rooms));
    console.log(dummyPlayer);

    // handlers
    const moveHandler = direction => {
        if (direction === 'n') {

        } else if (direction === 's') {
            setPlayer({
                ...player,
                room_id: player.room_id + 12
            })
        } else if (direction === 'w') {

        } else if (direction === 'e') {

        } else {

        }
    };

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
                                room={room.id} 
                                playerLocation={player.room_id}
                            > 
                            <p>ID:{room.id.toString()}</p>
                            <p>X:{room.x.toString()}</p> 
                            <p>Y: {room.y.toString()}</p> 
                            </Room>
                })}
            </GameMap>
        </GameWindow>

        <PlayerControls>
            <Button>Start Game</Button>

            <Button>Move North</Button>
            <Button onClick={() => moveHandler('s')}>Move South</Button>
            <Button>Move West</Button>
            <Button>Move East</Button>
        </PlayerControls>
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
    background-color: ${props => props.playerLocation === props.room ? 'black' : 'red'};
`

const PlayerControls = styled.div`

`

const Button = styled.button`

`

// export
export default Sandbox;