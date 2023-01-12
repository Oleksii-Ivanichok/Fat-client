import { Router } from 'express'
import {
    createPost,
    getAll,
    getById,
    removePost,
    updatePost,
} from '../controllers/posts.js'
const router = new Router()

// Create Post
// http://localhost:3002/api/posts
router.post('/', createPost)

// Get All Posts
// http://localhost:3002/api/posts
router.get('/', getAll)

// Get Post By Id
// http://localhost:3002/api/posts/:id
router.get('/:id', getById)

// Update Post
// http://localhost:3002/api/posts/:id
router.put('/:id', updatePost)


// Remove Post
// http://localhost:3002/api/posts/:id
router.delete('/:id', removePost)


export default router
