import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Addmovies = () => {
    const [formValues, setFormValues] = useState([{}]);
    const history = useHistory();

    const onChangeFormField = (event) => {
        const { value, name, type } = event.target;

        setFormValues({
            ...formValues,
            [name]: type === "number" ? Number(value) : value
        });
    }

    const onClickSubmit = async () => {
        try {
            await axios({
                url: 'http://localhost:9000/movies/add',
                method: 'POST',
                data: formValues
            });
            history.push('/');
        }
        catch (e) {
            alert("Add Movie Failed!")
        }
    }

    return (
        <Card>
            <Card.Header className="bg-primary">
                <h4>Add Movie</h4>
            </Card.Header>
            <Card.Body className="bg-warning">
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={onChangeFormField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Movie Rating</Form.Label>
                    <Form.Control type="number" name="rating" onChange={onChangeFormField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="poster">
                    <Form.Label>Movie Earning</Form.Label>
                    <Form.Control type="number" name="earning" onChange={onChangeFormField} />
                </Form.Group>
                <Button variant="success" type="button" onClick={onClickSubmit}>
                    Submit
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Addmovies;