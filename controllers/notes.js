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
  .then(note => {
    Note.findById(note._id)
    .populate('author')
    .then(populatedNote => {
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
  Note.findById(req.params.id)
  .then(note => {
    if(note.author._id.equals(req.user.profile)){
      Note.findByIdAndDelete(req.params.id)
      .then(deletedNote => 
        res.json(deletedNote)
      )
    }else{
      res.status(401).json({err : "Not Your Post Not Your Problem"})
    }
  })
  .catch(err => {
    console.log(err)
      res.status(500).json(err)
  })
}

function update(req, res) {
  Note.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(updatedNote => {
    res.json(updatedNote)
  })
  .catch(err => {
    console.log(err)
      res.status(500).json(err)
  })
}

export {
  index,
  create,
  show,
  deleteNote as delete,
  update
}