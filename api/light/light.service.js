import { utilService } from '../../services/util.service.js'

export const lightService = {
    getRoomLights,
    setRoomLights,
}

var roomLights = utilService.readJsonFile('./data/lights.json')

async function getRoomLights(room) {
    console.log('room: ', room)
    console.log('roomLights[room]: ', roomLights[room])
    return roomLights[room]
}

async function setRoomLights(room, lights) {
    roomLights[room] = { ...roomLights[room], ...lights }
    _saveLightsToFile()

    return roomLights[room]
}

function _saveLightsToFile() {
    return utilService.writeJsonFile('./data/lights.json', roomLights)
}