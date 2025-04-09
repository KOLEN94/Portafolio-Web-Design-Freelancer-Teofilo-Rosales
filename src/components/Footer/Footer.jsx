import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Estilos-Footer.css'

function Footer() {
  return (
    <>
      <Container fluid className='bloque-footer'>
        <Row className='d-flex text-center'>
          <Col>
            <h3 className='fecha-footer'>2025 © Hecho por Teofilo Rosales</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer