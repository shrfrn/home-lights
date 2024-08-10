import express from 'express'

import { log } from '../../middlewares/logger.middleware.js'
import { getRoomLights, updateRoomLights } from './light.controller.js'

export const lightRoutes = express.Router()

lightRoutes.get('/:room', log, getRoomLights)
lightRoutes.put('/:room', log, updateRoomLights)