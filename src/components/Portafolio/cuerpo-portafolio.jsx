import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';

import './Portafolio-estilos.css';

const CuerpoPortafolio = ({ titulo, img, desc, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="d-flex justify-content-center"
    >
      <Card className="tarjeta-portafolio menu-item text-center">
        <Card.Img variant="top" src={img} alt={titulo} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text className="texto-testimonio">{desc}</Card.Text>
          <a
            className="link-pagina btn btn-outline-dark"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Proyecto
          </a>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default CuerpoPortafolio;
