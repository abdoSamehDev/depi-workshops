import React, { useState } from "react";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult("");
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
      setInput("");
    } catch {
      setResult("Error");
    }
  };

  return (
    <Container
      className="mt-5 d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Card bg="dark" text="white" style={{ width: "30rem", height: "30rem" }}>
        <Card.Body>
          <Form>
            <Form.Group className="mb-4">
              <Form.Control type="Text" value={input} readOnly />
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Control type="Text" value={result} readOnly />
            </Form.Group>
            <Row>
              {["1", "2", "3", "+"].map((val) => (
                <Col key={val} xs={3} className="mb-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleClick(val)}
                  >
                    {val}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {["4", "5", "6", "-"].map((val) => (
                <Col key={val} xs={3} className="mb-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleClick(val)}
                  >
                    {val}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {["7", "8", "9", "*"].map((val) => (
                <Col key={val} xs={3} className="mb-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleClick(val)}
                  >
                    {val}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {["0", "C", "=", "/"].map((val) => (
                <Col key={val} xs={3} className="mb-4">
                  <Button
                    variant={
                      val === "C"
                        ? "danger"
                        : val === "="
                        ? "success"
                        : "primary"
                    }
                    size="lg"
                    onClick={() =>
                      val === "C"
                        ? handleClear()
                        : val === "="
                        ? handleCalculate()
                        : handleClick(val)
                    }
                  >
                    {val}
                  </Button>
                </Col>
              ))}
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Calculator;
