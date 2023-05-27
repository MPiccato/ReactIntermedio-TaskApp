/**
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)

    
    return (
        <div>
            <h2>El token es: {state.token}</h2>
        </div>

    );
}



const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>La sesión es: {state.sesion}</h2>
        </div>
    );
}



export default function MiComponenteConContexto(){

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creamos el estado del componente

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token:'JWL123456789',
                sesion: sessionData.sesion + 1
            }
        )
    }
    return (
       <miContexto.Provider value={sessionData}>
        {/* todo lo que está aquí dentro puede ser leido por los otros componente
        y si se actualiza, se actualizan los demas componentes */}
            <Componente1/>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
       </miContexto.Provider>
    );
}





