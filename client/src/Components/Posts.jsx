import {Container, Nav} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../redux/features/post/postSlice";
import Row from "react-bootstrap/Row";
import PostsComponent from "./PostsComponent";


function Posts() {

    const dispatch = useDispatch()
    const{posts} = useSelector((state)=> state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    },[dispatch])

    return (
        <Container>
            <h1>Games</h1>
            <Row xs={1} md={2} className="g-4">
                {posts?.map((post, idx) => (
                    <PostsComponent key={idx} post={post}/>
                ))}
            </Row>
        </Container>
    );
}

export default Posts;