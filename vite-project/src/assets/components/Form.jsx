import React from "react"
import { useState } from "react"
import { Input } from './Input'


    export const Form = ( {onChange}) => {
        
        const [apellido, setApellido] = useState( '' );
        const [nombre, setNombre] = useState( '' );


        const handlerChangeApellido = (e) => {

        console.log("handlerChange: ", e.target.value);
        setApellido(e.target.value);
        
        }

        const handlerChangeNombre = (e) => {
    
        console.log("handlerChange: ", e.target.value);
        setNombre(e.target.value);

        }


        return (

            <form>
           
                <h1>Formulario Preparcial</h1>
           
                {/* <Input/> */}

                <br />
           
                <input 
                id="apellido"
                name="apellido"
                value = {apellido}
                onChange={handlerChangeApellido}
                placeholder="Ingresar tu apellido" />

                <br />

                <input 
                id="nombre"
                name="nombre"
                value = {nombre}
                onChange={handlerChangeNombre}
                placeholder="Ingresar tu nombre" />

                <br />
                <br />

                <button>Guardar</button>

        </form>

    )
    


}