import {Link} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../redux/features/post/postSlice";
import AdminPostsComponent from "../Components/AdminPostsComponent";
import Row from "react-bootstrap/Row";


function Posts() {

    const dispatch = useDispatch()
    const{posts} = useSelector((state)=> state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    },[dispatch])

    return (
        <Container>
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
            <Row xs={1} md={2} className="g-4">
            {posts?.map((post, idx) => (
                <AdminPostsComponent key={idx} post={post}/>
                ))}
            </Row>
        </Container>
    );
}

export default Posts;