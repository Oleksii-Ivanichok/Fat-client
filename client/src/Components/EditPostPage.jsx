import React, {useCallback, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from "react-redux";
import {createPost, updatePost} from "../redux/features/post/postSlice";
import {Nav} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";

import axios from '../utils/axios'


function BasicExample() {
    const [name, setName] = useState('')
    const [developer, setDeveloper] = useState('')
    const [genre, setGenre] = useState('')
    const [price, setPrice] = useState('')
    const [oldImage, setOldImage] = useState('')
    const [newImage, setNewImage] = useState('')


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)
        setName(data.name)
        setDeveloper(data.developer)
        setGenre(data.genre)
        setPrice(data.price)
        setOldImage(data.imgUrl)
    }, [params.id])

    const submitHandler = () => {
        try {
            const updatedPost = new FormData()
            updatedPost.append('name', name)
            updatedPost.append('developer', developer)
            updatedPost.append('genre', genre)
            updatedPost.append('price', price)
            updatedPost.append('id', params.id)
            updatedPost.append('image', newImage)
            dispatch(updatePost(updatedPost))
            navigate('/admin/books')
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    return (
        <div>
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/admin/books">Posts</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/admin/add-book">AddPost</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Form
                onSubmit={(e) => e.preventDefault()}
            >
                <Form.Group className="mb-3">
                    <Form.Label>Book name</Form.Label>
                    <Form.Control type="text" placeholder="Text" value={name} onChange={event => setName(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Text" value={developer} onChange={event => setDeveloper(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" placeholder="Text" value={genre} onChange={event => setGenre(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Publication year</Form.Label>
                    <Form.Control type="number" placeholder="Text" value={price} onChange={event => setPrice(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control type="file" onChange={(event) => {setNewImage(event.target.files[0])
                    setOldImage('')}} />
                </Form.Group>
                <Button onClick={submitHandler} variant="primary" type="submit">
                    Edit post
                </Button>
            </Form>
        </div>

    );
}

export default BasicExample;