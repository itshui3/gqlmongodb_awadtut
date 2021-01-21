import mongoose from 'mongoose'

const { model, Schema } = mongoose

const catSchema = new Schema({
    name: { type: String },

})

const Cat = model('Cat', catSchema)

export {
    Cat
}