import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
// import {Container, Nav} from "react-bootstrap";
import React, {} from "react";


function Posts(post) {
    return (
        <Col>
            <Card>
                <div
                    className={
                        post.post.imgUrl ? '' : ''
                    }
                >
                    {post.post.imgUrl && (
                        <Card.Img
                            src={`http://localhost:3002/${post.post.imgUrl}`}
                            variant="top"
                            width="100" height="400"
                        />
                    )}
                </div>
                <Card.Body>

                    <Card.Title>{post.post.name}</Card.Title>
                    <Card.Text>
                        <label htmlFor="">Genre:&nbsp;</label>
                        {post.post.genre}
                    </Card.Text>
                    <Card.Text>
                        <label htmlFor="">Author:&nbsp;</label>
                        {post.post.developer}
                    </Card.Text>
                    <Card.Text>
                        <label htmlFor="">Publication year:&nbsp;</label>
                        {post.post.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Posts;