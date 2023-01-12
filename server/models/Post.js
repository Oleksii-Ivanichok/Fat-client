import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        name: {type: String},
        developer: {type: String},
        genre: {type: String},
        price: {type: Number},
        imgUrl: { type: String, default: '' },
    }
)
export default mongoose.model('Post', PostSchema)
