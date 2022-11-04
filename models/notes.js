import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  title: {type: String},
  text: {type: String},
  mood: {type: String},
  author :{type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
}, {
  timestamps: true,
})

const Note = mongoose.model('Note', noteSchema)

export { Note }