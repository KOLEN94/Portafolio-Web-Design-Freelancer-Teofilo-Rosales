import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Servicios-estilos.css';
import Cajaservicios from "./Cajaservicios";
import { Servicio01, Servicio02, Servicio03, Servicio04, Servicio05, Servicio06, Servicio07, Servicio08 } from './Data';

const Servicios = () => {
  // Lista de servicios en un array
  const serviciosData = [
    Servicio01, Servicio02, Servicio03, Servicio04, 
    Servicio05, Servicio06, Servicio07, Servicio08
  ];

  return (
    <div className='bloque-servicios' id='servicios'>
      <Container>
        <Row>
          <Col>
            <motion.h2 
              className='tituloh2 text-center'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Servicios
            </motion.h2>
          </Col>
        </Row>
      </Container>
      
      <Container className='bloque-servicios'>
        <Row>
          {serviciosData.map((servicio, index) => (
            <Cajaservicios key={index} {...servicio} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Servicios;
