import { lightService } from './light.service.js'
import { logger } from '../../services/logger.service.js'

export async function getRoomLights(req, res) {
    const { room } = req.params
    
    try {
        const lights = await lightService.getRoomLights(room)
        res.json(lights)
    } catch (err) {
        logger.error(`Couldn't get lights for room ${room}}`)
        res.status(400).send('Error getting lights')
    }
}

export async function updateRoomLights(req, res) {
    const { room } = req.params
    const lights = req.body

    console.log('room: ', room)
    console.log('lights: ', lights)

    try {
        const updatedLight = await lightService.setRoomLights(room, lights)
        res.json(updatedLight)
    } catch (err) {
        logger.error(`Couldn't set lights for room ${room}}`)
    }
}