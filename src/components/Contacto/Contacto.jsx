import React from "react";
import { Container, Row } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Estilos-contacto.css";
import { Cajacontacto } from "./Cajacontacto";
import { contactos } from "./Data"; 

function Contacto() {
  return (
    <Container id="contacto" className="bloque-contacto">
      <Row className="text-center">
        <motion.h2
          className="titulo-h2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contacto
        </motion.h2>
      </Row>
      <Row>
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {contactos.map((contacto) => (
            <Cajacontacto key={contacto.id} {...contacto} />
          ))}
        </motion.div>
      </Row>
    </Container>
  );
}

export default Contacto;
