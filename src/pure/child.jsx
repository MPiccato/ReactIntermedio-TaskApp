import React, {useRef} from 'react';

const Child = ({ name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef()

    function pressButton(){
        const text = messageRef.current.value
        alert(`Text in input: ${text}`)

    };

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    };

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{background:'cyan', padding:'30px'}}>
            <p onMouseOver={()=>console.log('On Mouse Over')}>Hello, {name}</p>
            <button onClick={()=>console.log('Press Button 1')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={()=>pressButtonParams('Hello')}>
                Button 3
            </button>
            <input 
                type="text" 
                placeholder='Send a text to your father'
                onFocus={()=> console.log('Onfocused')}
                onChange={(e) => console.log('evento,', e.target.value)}
                onCopy={()=>console.log('text Copied')}
                
                ref={messageRef}
            />
            <button onClick={()=>send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={submitName}>
                    <input ref = {nameRef} type="text" placeholder='New name' />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
