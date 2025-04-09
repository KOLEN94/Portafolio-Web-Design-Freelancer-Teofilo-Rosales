import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import './Estilos-Whatsapp.css'
function Whatsapp() {
  return (
    <>
        <a href="https://api.whatsapp.com/send?phone=+51979827956&text=Hola%20soy%20" rel="noreferrer"className="float" target="_blank">
            <BsWhatsapp/>
        </a>
        
    </>
  )
}

export default Whatsapp