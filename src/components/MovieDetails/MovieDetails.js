import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const apiKey = '870967436c1517d581daf3b245495790';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-6 col-lg-4">
                    <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt="" />
                </div>
                <div className="col-md-6">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Popularity: {movie.popularity}</p>
                    <p><strong>Release_Date:</strong> {movie.release_date}</p>
                    <Link style={{ fontSize: '20px' }} to="/home">Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;