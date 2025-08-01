'use client'

import { Button, Col, Container, Row } from "react-bootstrap";
import { patch } from "./teste";

export default function Home() {
  function DownloadTemplate(){
    let prefix
    if (process.env.PAGES_BASE_PATH){
      prefix = process.env.PAGES_BASE_PATH
    } else {
      prefix = ""
    }
    return <a href={`${prefix}/model.docx`} download>Download Document</a>
  }
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
