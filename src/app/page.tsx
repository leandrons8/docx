'use client'

import Image from "next/image";
import * as fs from "fs";
import {
  ExternalHyperlink,
  ImageRun,
  Paragraph,
  patchDocument,
  PatchType,
  TextRun,
} from "docx";
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

