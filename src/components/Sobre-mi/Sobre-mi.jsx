import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from '../../image/Foto-Teofilo.webp';
import './stilos-sobre-mi.css';

function Sobremi() {
  const Item = [{
    id: 1,
    contenido01: "Hola, soy un diseñador web con más de 8 años de experiencia creando sitios web profesionales, funcionales y visualmente atractivos. Me especializo en WordPress con Elementor, lo que me permite construir sitios 100% personalizados, fáciles de administrar y optimizados para cualquier dispositivo.",
    contenido02: "Mi enfoque va más allá del diseño. También tengo sólidos conocimientos técnicos: manejo CPanel, configuración de correos SMTP y la creación de city pages estratégicas para mejorar la presencia local de tu negocio. Cada proyecto que realizo es responsive, asegurando una experiencia fluida tanto en computadoras como en móviles.",
    contenido03: "Me apasiona ayudarte a llevar tu marca al siguiente nivel con un sitio web que no solo se vea bien, sino que también funcione perfectamente."
  }];

  return (
    <Container id='sobre-mi' className='bloque-sobre-mi'>
      <Row className='modo-escritorio'>
        <Col className='d-flex justify-content-center align-items-center'>
          <img src={imagen} alt='teofilo' className='center-block imagen-teo img-fluid fadeInLeftfoto' />
        </Col>
        <Col className='align-items-center'>
          <h2 className='titulo-h2 text-center fadeInDownteo-sobremi'>Sobre Mi</h2>
          {Item.map((item) => (
            <div key={item.id}>
              <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido01}</p>
              <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido02}</p>
              <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido03}</p>
            </div>
          ))}
        </Col>
      </Row>

      <Row className='modo-mobil'>
        <Col className='align-items-center'>
          <h2 className='titulo-h2 text-center fadeInDownteo-sobremi'>Sobre Mi</h2>
          {Item.map((item) => (
            <div key={item.id}>
              <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido01}</p>
              <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido02}</p>
              <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido03}</p>
            </div>
          ))}
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          <img src={imagen} alt='teofilo' className='center-block fadeInUpimagen imagen-teo-mobil' />
        </Col>
      </Row>
    </Container>
  );
}

export default Sobremi;
