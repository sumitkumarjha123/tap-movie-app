import axios from 'axios';
import React from 'react'
import { Card, Button } from "react-bootstrap"
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import Loading from './Loading';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
export default function Body() {
    const [movies, setmovies] = useState([])
    const [viewdetail, setviewdetail] = useState([])
    const [error, setError] = useState(null)
    const [loader, setlodar] = useState(false)
    const [search, setsearch] = useState(movies)
    useEffect(() => {
        setlodar(true);
        axios.get("http://localhost:9000/movies")
            .then(res => {
                console.log(res.data);
                setlodar(false);
                setmovies(res.data.movies)
            }).catch(err => { console.log(err) })
    }, [])
    const arr = [];
    const onClickViewMovie = (m) => {
        return (
            <h1>{m.title}</h1>
        )
    }
    const onClickSearch = () => {
        const searchElement = document.querySelector('[name="searchText"]');
        const searchText = searchElement && searchElement.value;
        if (searchText) {
            const filteredMovies = movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setmovies(filteredMovies);
        } else {
            setmovies([]);
            <div className="alert alert-danger" role="alert">
                This is a danger alert—check it out!
            </div>
        }
    };
    const onClickReset = () => {
        setmovies(movies)
    };
    return (
        <>
            <input type="text" name="searchText" className="form-control mt-5"placeholder="Enter Movie Name" />
            <Button color="success" className="text-white m-2" onClick={onClickSearch}>Search
            </Button>
            <Button color="dark" className="text-white m-2" onClick={() => window.location.reload()
            }>Reset</Button>
            <div className="d-flex flex-wrap justify-content-start">

                {error && <Alert variant='danger'>{error}</Alert>}
                {loader ? <Loading />
                    :
                    movies.map((e) => {
                        const { title, id } = e;
                        return (
                            <>
                                <Card style={{ width: '18rem' }} className="m-3">
                                <Card.Header className="bg-success text-white">{e.title}</Card.Header>
                                    <Card.Img variant="top" src="https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1557241670&w=1600&h=900" />
                                    <Card.Body className="bg-warning">
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>
                                            <h4>year_of_release: {e.year_of_release}</h4>
                                            <p>Rating :{e.rating}</p>
                                            <p>Earning:{e.earning}</p>
                                            <p></p>
                                        </Card.Text>

                                        <Button variant="primary" onClick={() => onClickViewMovie(e)}>View Detail</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )

                    })}

                <div>
                    {arr.map(u => u.title)}
                    <h1>{viewdetail.title}</h1>
                </div>

            </div>
        </>
    )
}
