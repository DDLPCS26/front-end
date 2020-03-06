// room generator for front end testing

// commenting out the old room generated code to work on a new version based on the new payload coming from backend, but dont want to lose this old code quite yet - JC

// export const generateBool = () => {
//     let pick = Math.random();

//     if (pick < 0.5) {
//         return false
//     } else {
//         return true
//     }
// };

// export const generateRooms = base => {
//     let rooms = [];
//     let count = 0;

//     for (let i = 1; i < (base * base + 1); i++) {
//         count += 1;
        
//         if (i % base === 0) {
//             rooms.push({
//                 room_id: i,
//                 north: generateBool(),
//                 south: generateBool(),
//                 east: false,
//                 west: generateBool(),
//                 title: `room number ${i}`,
//                 description: `${i} number of rooms into the maze`
//             })
//         } else if (i > 0 && i <= base) {
//             rooms.push({
//                 room_id: i,
//                 north: false,
//                 south: generateBool(),
//                 east: generateBool(),
//                 west: generateBool(),
//                 title: `room number ${i}`,
//                 description: `${i} number of rooms into the maze`
//             })
//         } else if (count % base === 1) {
//             rooms.push({
//                 room_id: i,
//                 north: generateBool(),
//                 south: generateBool(),
//                 east: generateBool(),
//                 west: false,
//                 title: `room number ${i}`,
//                 description: `${i} number of rooms into the maze`
//             })
//         } else {
//             rooms.push({
//                 room_id: i,
//                 north: generateBool(),
//                 south: generateBool(),
//                 east: generateBool(),
//                 west: generateBool(),
//                 title: `room number ${i}`,
//                 description: `${i} number of rooms into the maze`
//             })
//         }
//     }

//     return rooms;
// };

// const newRooms = generateRooms(10);

// export default newRooms;

// new generator code

export const generateRooms = base => {
    let rooms = [];
    let rows = base;
    
    console.log('rooms:', rooms)
};