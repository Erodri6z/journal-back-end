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

function create(req, res){
  req.body.author = req.user.profile
  Note.create(req.body)
  .then(n => {
    Note.findById(note._id)
    .populate('author')
    .then(populatedNote=>{
      res.json(populatedNote)
    })
  })
  .catch(err => {
    console.log(err)
      res.status(500).json(err)
  })
}

function show(req, res){
  Note.findById(req.params.id)
  .then(note => 
    res.json(note))
  .catch(err => {
    console.log(err)
      res.status(500).json(err)
  })
}

function deleteNote(req, res) {
  Note.findByIdAndDelete(req.params.id)
  .then(deletedNote => 
    res.json(deletedNote))
  .catch(err => {
    console.log(err)
      res.status(500).json(err)
  })
}

export {
  index,
  create,
  show,
  deleteNote as delete
}