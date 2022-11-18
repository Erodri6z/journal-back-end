import { Router } from 'express'
import * as notesCtrl from '../controllers/notes.js'
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', notesCtrl.index)
router.get('/:id', notesCtrl.show)



/*---------- Protected Routes ----------*/
router.post('/',checkAuth, notesCtrl.create)
router.use(decodeUserFromToken)

export { router }