import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import genres from "../data/genres.json";

class LatestRelease extends Component {
  state = {
    selectedBook: null,
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <Row>
              {genres.map((book) => (
                <Col md={3} className="mb-3">
                  <Card
                    style={{
                      width: "15rem",
                      height: "33rem",
                      background: "none",
                    }}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={book.img}
                        style={{ height: "18rem" }}
                      />
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.category}</Card.Text>
                      <Card.Text>{book.price}</Card.Text>
                      <Button variant="warning">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
