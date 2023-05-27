import {useState} from 'react';
/**
 * Definiendo estilos en constantes
 * 
 */

// Usuario logueado
const loggedStyle = {
    color:'blue',
    
    fontWeight:'underline'
};

// ? Estilo para usuario no logueado

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'


}


const GrettingStyled = (props) => {


    const [logged, setLogged] = useState(false);

    // const greetingUser = (props) => (<p>Hola, {props.nombre}</p>)
    // const pleaseLogin = () => (<p>Por favor, logueate</p>)
    
    return (
        <div style={logged ? loggedStyle : unloggedStyle} >
            {logged ? (<p>Hola, {props.nombre}</p>) : (<p>Por favor, logueate</p>) }
            <button onClick={() => {
                console.log('Botón pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'Log out' : 'Login'}
            </button>
        </div>
    );
}

export default GrettingStyled;
