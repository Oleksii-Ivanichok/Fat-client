import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from "react-redux";
import {createPost} from "../redux/features/post/postSlice";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


function BasicExample() {
    const [name, setName] = useState('')
    const [developer, setDeveloper] = useState('')
    const [genre, setGenre] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const dispatch = useDispatch()

    const submitHandler = () => {
        try {
            const data = new FormData()
            data.append('name', name)
            data.append('developer', developer)
            data.append('genre', genre)
            data.append('price', price)
            data.append('image', image)
            dispatch(createPost(data))
            window.location.reload();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/admin/books">Books</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/admin/add-book">AddBook</Link>
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
                <Form.Control type="file" onChange={event => setImage(event.target.files[0])} />
            </Form.Group>
            <Button onClick={submitHandler} variant="primary" type="submit">
                Add post
            </Button>
        </Form>
        </div>

    );
}

export default BasicExample;