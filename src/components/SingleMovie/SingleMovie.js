import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMovie = (props) => {
    const { title, overview, id, poster_path } = props.movie;
    console.log(poster_path);
    return (
        <div className="col-md-4 col-lg-3 mb-3">

            <Card >
                <Link to={`/movie/${id}`}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
                </Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{overview}</Card.Text>
                    {/* <Button variant="primary">Details</Button> */}
                    <Link style={{ fontSize: '20px' }} to={`/movie/${id}`}>Show Detail</Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SingleMovie;