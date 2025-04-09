import React from 'react';
import { Button, Col } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import "./Estilos-Habilidades.css"
const Cajahabilidades = ({ titulo, imagen }) => {
  return (
    <Col lg={3} md={6} sm={12}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="d-grid"
      >
        <Button variant="outline-dark" size="lg" className='caja-habilidades'>
          {imagen} {titulo}
        </Button>
      </motion.div>
    </Col>
  );
};

export default Cajahabilidades;
