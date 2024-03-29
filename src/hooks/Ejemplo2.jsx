import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // creamos dos contadores distintos
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef()

    function incrementar1(){
        setContador1(contador1 + 1)

    };

    function incrementar2(){
        setContador2(contador2 + 1)
    };

    // useEffect(() => {
    //     console.log(miRef)
    // });

    useEffect(() => {
        console.log('Cambio en el componente 2')
        console.log(miRef)
        
    }, [contador1]);
    



    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Muestra por consola el elemento referenciado
            </h4>
            {/* Botones para cambiar contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar Contador 1</button>
                <button onClick={incrementar2}>Incrementar Contador 2</button>
            </div>
            
        </div>
    );
}

export default Ejemplo2;
