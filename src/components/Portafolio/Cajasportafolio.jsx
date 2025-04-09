// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Portafolio-estilos.css";

const Cajasportafolio = ({ titulo, description, imagen, alt }) => {
  return (
    <Col lg={3} md={6} sm={12} >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="p-4 mt-3 tarjeta-servicio">
          <div>
            <img src={imagen} alt={alt} className="img-servicio" />
          </div>
          <Card.Body>
            <Card.Title className="text-center titulo-h3">{titulo}</Card.Title>
            <Card.Text className="texto-cuerpo">{description}</Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

export default Cajasportafolio;
