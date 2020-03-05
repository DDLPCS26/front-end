// react
import React, { useState, useContext } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { styletest } from '../../helpers/styletest';
// contexts
import { DefaultTheme } from '../../contexts/DefaultTheme';
// dummy data
import { dummyRooms, dummyRooms2 } from '../../helpers/rooms';
import { dummyPlayer } from '../../helpers/player';

// component
const GameDashboard = props => {
    // contexts
    const colorPalette = useContext(DefaultTheme).colors;

    // state hooks
    const [rooms, setRooms] = useState(dummyRooms);
    const [player, setPlayer] = useState({
        ...dummyPlayer,
        north: rooms[0].north,
        south: rooms[0].south,
        east: rooms[0].east,
        west: rooms[0].south,
        playerMoveChoice: "none"
    });
    console.log(player);

    // handlers
    const moveHandler = direction => {
        setPlayer({ ...player, playerMoveChoice: direction });
    };

    return (
        <>
        <Container>
            <GameWindow colors={colorPalette}>

                <Map>
                    {rooms.map(room => {
                        return <TempRoom 
                                    room={room.room_id}
                                    playerRoom={player.room_id}
                                    north={room.north} 
                                    south={room.south} 
                                    east={room.east} 
                                    west={room.west} 
                                    colors={colorPalette}/>
                    })}
                </Map>

            </GameWindow>

            <PlayerHud colors={colorPalette}>
                <p>Player Location: {player.title}</p>
                <p>Room ID: {player.room_id}</p>
                <p>Can move North: {player.north.toString()}</p>
                <p>Can move South: {player.south.toString()}</p>
                <p>Can move East: {player.east.toString()}</p>
                <p>Can move West: {player.west.toString()}</p>
                <p>Player move choice: {player.playerMoveChoice}</p>

                <form>
                    <input
                        type="text"
                        value={player.playerMoveChoice}
                        placeholder="choose movement" 
                    />
                </form>
            </PlayerHud>

            <ControlInterface colors={colorPalette}>
                <Button className='start'>Start Game</Button>
                <DirectionalControls colors={colorPalette}>
                    <Button onClick={() => moveHandler("north")}>Move North</Button>
                    <Button onClick={() => moveHandler("east")}>Move East</Button>
                    <Button onClick={() => moveHandler("south")}>Move South</Button>
                    <Button onClick={() => moveHandler("west")}>Move West</Button>
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
    width: 100%;
    height: 50rem;
    margin: 5rem 0;
    background-color: ${props => props.colors.surface1000};
    border-radius: 5px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const PlayerHud = styled.div`
    width: 100%;
    height: 15rem;
    background-color: ${props => props.colors.surface1000};
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

const Map = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: green;
`

const TempRoom = styled.div`
    width: 96px;
    height: 96px;
    background-color: ${props => props.room === props.playerRoom ? 'red' : props.colors.surface800};
    border-top: ${props => props.north ? `2px solid ${props.colors.surface800}` : '2px solid white'};
    border-bottom: ${props => props.south ? `2px solid ${props.colors.surface800}` : '2px solid white'};
    border-left: ${props => props.west ? `2px solid ${props.colors.surface800}` : '2px solid white'};
    border-right: ${props => props.east ? `2px solid ${props.colors.surface800}` : '2px solid white'};
`

export default GameDashboard;