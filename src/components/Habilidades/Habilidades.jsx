import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Cajahabilidades from './Cajahabilidades';
import './Estilos-Habilidades.css';
import * as habilidadesData from './Data'; // Importa todas las habilidades como un objeto

const Habilidades = () => {
  // Convierte el objeto en un array
  const habilidadesArray = Object.values(habilidadesData);

  return (
    <div id="habilidades">
      <Container>
        <Row>
          <Col>
            <h2 className="tituloh2 text-center titulo-habilidades">Habilidades</h2>
          </Col>
        </Row>
      </Container>
      
      <Container>
        <Row>
          {habilidadesArray.map((habilidad, index) => (
            <Cajahabilidades key={index} {...habilidad} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Habilidades;
