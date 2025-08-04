'use client'

import { Button, Col, Container, Row } from "react-bootstrap";
import { patch } from "./teste";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={patch} />
        </Col>
      </Row>
    </Container>
  );
}
