import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import item from './Data'; // Importamos el array de proyectos
import CuerpoPortafolio from './cuerpo-portafolio'; // Importamos el nuevo componente
import './Portafolio.css';

const Portafolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(8);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 8);
  };

  return (
    <div className="bloque-portafolio" id="portafolio">
      <Container>
        {/* Título con animación */}
        <Row>
          <Col>
            <motion.h2 
              className="tituloh2 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Portafolio
            </motion.h2>
          </Col>
        </Row>

        {/* Grilla de Proyectos */}
        <Row>
          {item.slice(0, visibleProjects).map((proyecto) => (
            <Col key={proyecto.id} lg={3} md={6} sm={12} className="mb-4">
              <CuerpoPortafolio {...proyecto} />
            </Col>
          ))}
        </Row>

        {/* Botón Ver Más */}
        {visibleProjects < item.length && (
          <Row className="text-center mt-4">
            <Col>
              <Button className='btn-outline-dark ver-mas' onClick={handleLoadMore}>
                Ver más
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Portafolio;
