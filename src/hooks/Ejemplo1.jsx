/**
 * Ejemplo de uso del useState
 */

import React, {useState} from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial Persona
    const personaInicial = {
        nombre: 'Martin',
        email: "mpiccato@me.com" 
    };

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado del contador
     */
    function incrementarContador(){
        setContador(contador + 1)
    }

    function actualizarPersona(){
        setPersona({
            nombre: 'Lautaro',
            email: "lautypic@gmail.com"
        })
    }

    return (
        <div>
            <h1>***Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h1>***Persona***</h1>
            <h2>{persona.nombre}</h2>
            <h2>{persona.email}</h2>
            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
            
        </div>
    );
}

export default Ejemplo1;
