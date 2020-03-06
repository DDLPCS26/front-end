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
    let row3 = array.slice(24,36);
    let row4 = array.slice(36,48).reverse();
    let row5 = array.slice(48,60);
    let row6 = array.slice(60,72).reverse();
    let row7 = array.slice(72,84);
    let row8 = array.slice(84,96).reverse();
    let row9 = array.slice(96,108);
    let row10 = array.slice(108,120).reverse();
    let row11 = array.slice(120,132);
    let row12 = array.slice(132,144).reverse();

    newArray = row1.concat(row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12);

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
        if (direction === 'n' && !(player.grid_x <= 0)) {
            setPlayer({
                ...player,
                grid_x: player.grid_x,
                grid_y: player.grid_y - 1
            })
        } else if (direction === 's' && !(player.grid_y >= 11)) {
            setPlayer({
                ...player,
                grid_x: player.grid_x,
                grid_y: player.grid_y + 1
            })
        } else if (direction === 'w' && !(player.grid_x <= 0)) {
            setPlayer({
                ...player,
                grid_x: player.grid_x - 1,
                grid_y: player.grid_y
            })
        } else if (direction === 'e' && !(player.grid_x >= 11)) {
            setPlayer({
                ...player,
                grid_x: player.grid_x + 1,
                grid_y: player.grid_y
            })
        } else {
            console.log('illegal movement');
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
                                roomX={room.x}
                                roomY={room.y}
                                playerLocation={player.room_id}
                                playerX={player.grid_x}
                                playerY={player.grid_y}
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

            <Button onClick={() => moveHandler('n')}>Move North</Button>
            <Button onClick={() => moveHandler('s')}>Move South</Button>
            <Button onClick={() => moveHandler('w')}>Move West</Button>
            <Button onClick={() => moveHandler('e')}>Move East</Button>
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
    background-color: ${props => props.playerX === props.roomX && props.playerY === props.roomY  ? 'black' : 'red'};
`

const PlayerControls = styled.div`

`

const Button = styled.button`

`

// export
export default Sandbox;