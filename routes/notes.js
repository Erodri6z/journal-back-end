import { Router } from 'express'
import * as notesCtrl from '../controllers/notes.js'
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', notesCtrl.index)



/*---------- Protected Routes ----------*/
router.post('/',checkAuth, notesCtrl.create)
router.get('/:id',checkAuth, notesCtrl.show)
router.put('/:id',checkAuth, notesCtrl.update)
router.delete('/:id',checkAuth, notesCtrl.delete)
router.use(decodeUserFromToken)

export { router }