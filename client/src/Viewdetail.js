import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import Loading from './Loading';

function Viewdetail(props) {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState({});
const arr=[]
    useEffect(() => {
            setLoading(true);
            fetchMovieDetails();
        }, [])


    const fetchMovieDetails = async () => {
        try {
            setLoading(true);
            const response = await axios({
                method: 'get',
                url: `http://localhost:9000/movies/${movieId}`
            });
            setLoading(false);
            setDetails(response.data.movie);
            console.log(response.data.movie);
            //console.log(details.data.movies)
        }
        catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <h1>MOVIE ID :--> {movieId}</h1>
        {details.map(e=><h1>MOVIE TITLE:-{e.title}</h1>)}
        </>
    )
}

export default Viewdetail;
