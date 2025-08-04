'use client'

import { Button, ButtonGroup, Col, Container, Form, Row } from "react-bootstrap";
import { patch } from "./teste";
import { useState } from "react";

export default function Home() {
  const [dados, setDados] = useState({
    projeto: '',
    cliente: '',
    sufixo: '',
    descricao: ''
  })
  return (
    <Container>
      <Form>
        <Form.Label>Projeto</Form.Label>
        <Form.Control
          type="text"
          defaultValue={dados.projeto}
          onChange={e => setDados({...dados, projeto: e.target.value})}
        />
        <Row>
          <Col>
            <Form.Label>Cliente</Form.Label>
            <Form.Control
              type="text"
              defaultValue={dados.cliente}
              onChange={e => setDados({...dados, cliente: e.target.value})}
            />
          </Col>
          <Col>
            <Form.Label>Sufixo</Form.Label>
            <Form.Control
              type="text"
              defaultValue={dados.sufixo}
              onChange={e => setDados({...dados, sufixo: e.target.value})}
            />
          </Col>
        </Row>
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          defaultValue={dados.descricao}
          onChange={e => setDados({...dados, descricao: e.target.value})}
        />
        <ButtonGroup>
          <Button>Modelo</Button>
          <Button
            onClick={() => patch(dados)}
          >Download</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}
