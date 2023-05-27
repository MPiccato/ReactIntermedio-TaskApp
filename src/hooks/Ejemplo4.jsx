/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de Children.props</h1>
            <h2>Nombre: {props.nombre}</h2>

            <h3>{props.children}</h3>

        </div>
    );
}

export default Ejemplo4;
