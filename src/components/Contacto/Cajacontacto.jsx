import React from "react";
import { Card, Col } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Cajacontacto = ({ id, infocontacto, icono }) => {
  return (
    <Col lg={3} md={4} sm={12}>
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: id * 0.1 }}
      >
        <Card className="p-4 mt-3 d-flex text-center caja-contacto">
          <div className="icono">{icono}</div>
          <Card.Body>
            <Card.Title className="text-center titulo-h3 informacion-contacto">
              {infocontacto}
            </Card.Title>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};
