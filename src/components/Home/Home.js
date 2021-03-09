import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';
import Search from '../Search/Search';

const Home = () => {
    const [movies, setMovies] = useState([]);


    const apiKey = '870967436c1517d581daf3b245495790';
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])

    return (
        <>
            <h2 className="text-center py-4 text-primary">Total Movies: {movies.length}</h2>

            <div className="container">
                <div className="row">
                    {
                        movies.map(movie => <SingleMovie movie={movie}></SingleMovie>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;