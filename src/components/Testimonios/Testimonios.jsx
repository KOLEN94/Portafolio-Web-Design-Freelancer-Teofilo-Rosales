import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import testimonios from './Data';
import './Estilos-Testimonios.css';

export default function Testimonios() {
  return (
    <Container fluid id="testimonios" className="seccion-testimonios py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h2 className="tituloh2 text-light mb-4">Testimonios</h2>
        </Col>
      </Row>

      <Marquee speed={40} pauseOnHover={true} gradient={false}>
        <div className="d-flex gap-3">
          {testimonios.map((item) => (
            <Card key={item.id} className="tarjeta-slider testimonio text-center p-4 d-flex flex-column justify-content-between" style={{ width: '300px', minHeight: '250px' }}>
              <Card.Body className="d-flex flex-column">
                <div>
                  <Card.Title className="titulo-h3">{item.name}</Card.Title>
                  <Card.Subtitle className="mb-2">{item.jobTitle}</Card.Subtitle>
                </div>
                <Card.Text className="texto-cuerpo">{item.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Marquee>
    </Container>
  );
}