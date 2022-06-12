import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const UserList = () => {
  const [heroes, setHero] = useState([]);
  const [heroesByClass, setHeroByClass] = useState([]);

  useEffect(() => {
    getHeroes();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/hero/${id}`);
      getHeroes();
    } catch (error) {
      console.log(error);
    }
  };

  const getHeroes = async () => {
    const response = await axios.get("http://localhost:5000/hero");
    console.log(response.data);
    setHero(response.data);
  };

  const getHeroesByClass = async (heroclass) => {
    const response = await axios.get(`http://localhost:5000/hero/${heroclass}`);
    console.log(response.data);
    setHeroByClass(response.data);
  };

  return (
    <Container className="mt-5">
      <Link to={`add`} className="button is-success mb-3">
        Add New Hero
      </Link>
      <br></br>
      <ButtonGroup className="mb-2">
        <Button  onClick={() => getHeroesByClass("marskman")}>Marskman</Button>
        <Button>Fighter</Button>
        <Button>Tank</Button>
        <Button>Assasin</Button>
      </ButtonGroup>
        <Row xs={1} md={2} className="p-4 justify-content-center">
        {heroes.map((hero, index) => (
          <Col className="p-2">
            <Card border="warning" style={{ width: '400px' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{hero.name}</Card.Title>
                <Card.Text>
                  <p>
                    <b class="mr-3">Herro Class:</b> {hero.heroclass}
                  </p>
                  <p>
                    <b class="mr-3">Herro Role:</b>
                    {hero.role}
                  </p>
                  <p>
                    <b class="mr-3">Herro Region:</b>
                    {hero.region}
                  </p>
                </Card.Text>
                <div class="mt-2">
                <Link
                  to={`edit/${hero.id}`}
                  className="button is-small is-info mr-2"
                >
                  Edit
                </Link>
                <Button
                  className="button is-small is-danger mr-2"
                  onClick={() => deleteUser(hero.id)}
                >
                  Delete
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
    </Container>
  );
};

export default UserList;
