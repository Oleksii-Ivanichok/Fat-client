import Post from '../models/Post.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

// Create Post
export const createPost = async (req, res) => {
    try {
        const { name, developer, genre, price } = req.body

        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))

            const newPostWithImage = new Post({
                name,
                developer,
                genre,
                price,
                imgUrl: fileName,
            })

            await newPostWithImage.save()
            await Post.findByIdAndUpdate(req.id, {
                $push: { posts: newPostWithImage },
            })

            return res.json(newPostWithImage)
        }

        const newPostWithoutImage = new Post({
            name,
            developer,
            genre,
            price,
            imgUrl: '',
        })
        await newPostWithoutImage.save()
        await Post.findByIdAndUpdate(req.id, {
            $push: { posts: newPostWithoutImage },
        })
        res.json(newPostWithoutImage)
    } catch (error) {
        console.log(error)
        res.json({ message: 'error' })
    }
}

// Get All Posts
export const getAll = async (req, res) => {
    try {
        const posts = await Post.find()

        if (!posts) {
            return res.json({ message: '0 posts' })
        }

        res.json({ posts })
    } catch (error) {
        res.json({ message: 'error' })
    }
}

// Get Post By Id
export const getById = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 },
        })
        res.json(post)
    } catch (error) {
        res.json({ message: 'error' })
    }
}


// Remove post
export const removePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) return res.json({ message: 'Post doesnt exist' })

        await Post.findByIdAndUpdate(req.body, {
            $pull: { posts: req.params.id },
        })

        res.json({ message: 'Post was deleted' })
    } catch (error) {
        res.json({ message: 'Error' })
    }
}

// Update post
export const updatePost = async (req, res) => {
    try {
        const { name, developer, genre, price, id } = req.body
        const post = await Post.findById(id)

        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))
            post.imgUrl = fileName || ''

            post.name = name
            post.developer = developer
            post.genre = genre
            post.price = price

            await post.save()

            res.json(post)
        }
        post.name = name
        post.developer = developer
        post.genre = genre
        post.price = price

        await post.save()

        res.json(post)


    } catch (error) {
        console.log(error)
        res.json({ message: error })
    }
}

