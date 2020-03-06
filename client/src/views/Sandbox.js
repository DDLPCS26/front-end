// testing sandbox

// react
import React, { useState, useContext } from 'react';
// styled components
import styled from 'styled-components';
// contexts
import { DefaultTheme } from '../contexts/DefaultTheme';
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
    // contexts
    const colorPalette = useContext(DefaultTheme).colors;
    // state hooks
    const [player, setPlayer] = useState({
        ...dummyPlayer,
        north: false,
        south: false,
        west: false,
        east: true
    });
    const [map, setMap] = useState({
        base: 12
    });
    const [rooms, setRooms] = useState(arrayRig(dummyRooms.rooms));

    // handlers
    const moveHandler = direction => {


        if (direction === 'n' && !(player.grid_y <= 0)) {
            setPlayer({
                ...player,
                grid_x: player.grid_x,
                grid_y: player.grid_y - 1
            })
        } else if (direction === 's' && !(player.grid_y >= 11)) {
            setPlayer({
                ...player,
                grid_x: player.grid_x,
                grid_y: player.grid_y + 1,
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
        <Container>
        <GameWindow colors={colorPalette}>
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
                                colors={colorPalette}
                            > 
                            {/* <p>ID:{room.id.toString()}</p>
                            <p>X:{room.x.toString()}</p> 
                            <p>Y: {room.y.toString()}</p>  */}
                            {console.log('player coordinates:', `x: ${player.grid_x} y: ${player.grid_y}`)}
                            </Room>
                })}
            </GameMap>
        </GameWindow>

        <ControlInterface colors={colorPalette}>
                <Button className='start'>Start Game</Button>
                <DirectionalControls colors={colorPalette}>
                    <Button onClick={() => moveHandler("n")}>Move North</Button>
                    <Button onClick={() => moveHandler("s")}>Move South</Button>
                    <Button onClick={() => moveHandler("w")}>Move West</Button>
                    <Button onClick={() => moveHandler("e")}>Move East</Button>
                </DirectionalControls>
            </ControlInterface>
            </Container>
        </>
    );
};

// styled components

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 5rem auto;
    height: 800px; // temp height
`

const GameWindow = styled.div`
    width: 90%;
    height: 50rem;
    background-color: ${props => props.colors.surface1000};
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
    width: ${props => `${props.base * 5.25 - 5}px`};
    height: ${props => `${props.base * 5}px`};
    border: 1px solid ${props => props.colors.surface300};
    background-color: ${props => props.playerX === props.roomX && props.playerY === props.roomY  ? `${props.colors.highlight}` : `${props.colors.surface200}`};
`

const ControlInterface = styled.div`
    width: 100%;
    height: 10rem;
    background-color: ${props => props.colors.surface100};
    border-radius: 5px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    Button {
        border: 3px solid ${props => props.colors.surface400};
        background-color: transparent;
        color: ${props => props.colors.surface400};
        font-weight: bold;
    }

    .start {
        width: 15rem;
    }

    .start:hover {
        background-color: ${props => props.colors.highlight};
        border: 3px solid ${props => props.colors.surface200};
        color: ${props => props.colors.surface50};
        transition: 0.5s;
    }
`

const DirectionalControls = styled.div`
    
    Button {
        border: 3px solid ${props => props.colors.surface400};
        background-color: transparent;
        color: ${props => props.colors.surface400};
        font-weight: bold;
    }

    Button:hover {
        background-color: ${props => props.colors.highlight};
        border: 3px solid ${props => props.colors.surface200};
        color: ${props => props.colors.surface50};
        transition: 0.5s;
    }
`

const Button = styled.button`
    width: 10rem;
    height: 5rem;
    border: none;
    border-radius: 5px;
    margin: 1rem;
    font-size: 1.15rem;
`

// export
export default Sandbox;