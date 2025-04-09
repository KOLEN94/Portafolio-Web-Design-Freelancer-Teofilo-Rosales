import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hero-stilos.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineFilePdf } from "react-icons/ai";
import Button from 'react-bootstrap/Button';


export default function Hero() {
  return (
    <>
      <Container fluid className="Inicio " id="hero" >
        <Row className="d-flex align-items-center contenido-hero">
          <Col>
            <div className="text-lg-start text-md-start text-center flex-column h-100 justify-content-center bloque-titulos">

              <h2 className=" color-primary text-center titulo-h2 fade-teo fadeInDownteo">
                Hola y Bienvenid@
              </h2>

              <h1 className="color-primary text-center titulo-h1 titulohero fadeInDownteo">
                Soy Teofilo Rosales
              </h1>
              <h3 className="color-primary text-center titulo-h3 fade-teo fadeInDownteo">
              Creo sitios web con WordPress y Elementor que no solo se ven bien, sino que también funcionan para tu negocio. 
              Ya sea que estés empezando o quieras renovar tu imagen online, estoy acá para ayudarte a 
              conectar con más clientes y crecer con estilo.
              </h3>
            </div>
            <div className="d-flex align-items-center justify-content-center bloque-social fade-teo fadeInDownteo">
              <Button variant="outline-light"
                className="icono-social"
                rel="noreferrer"
                href="https://web.facebook.com/teofilo.rosales.1"
                target="_blank">
                <FaFacebook />
              </Button>

              <Button variant="outline-light"
                className="icono-social"
                rel="noreferrer"
                href="https://www.linkedin.com/in/teofilo-rosales-gama"
                target="_blank">
                <AiFillLinkedin />
              </Button>

            </div>
            <div className="d-flex align-items-center justify-content-center bloque-CV fadeInDownteo">
              <Button variant="outline-light"
                className="titulo-nav-menu boton-cv"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1BzbLrSteaABnCfxvtRSuI-KXCyJ4xUwo/view?usp=sharing"
                target="_blank">
                <AiOutlineFilePdf /> Descargar cv
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
