// room generator for front end testing

const generateBool = () => {
    let pick = Math.random();

    if (pick < 0.5) {
        return false
    } else {
        return true
    }
};

const generateRooms = base => {
    let rooms = [];

    for (let i = 0; i < (base * base); i++) {
        rooms.push({
            room_id: i,
            north: generateBool(),
            south: generateBool(),
            east: generateBool(),
            west: generateBool(),
            title: `room number ${i}`,
            description: `${i} number of rooms into the maze`
        })
    }

    return rooms;
};

const newRooms = generateRooms(10);

export default newRooms;