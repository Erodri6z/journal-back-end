import { Note } from '../models/notes.js'

function index(req, res) {
  Note.find({})
  .populate('author')
  .then(notes => res.json(notes))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index
}