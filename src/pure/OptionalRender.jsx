import React, {useState} from 'react';

// Login and Logout buttons

const LoginButton = ({loginAction}) => {
    return (
        <button onClick={loginAction}>LogIn</button>
    );
};

const LogoutButton = ({loginAction}) => {
    return (
        <button onClick={loginAction}>LogOut</button>
    )
}

const OptionalRender = () => {

    const [access, setAccess] = useState(true);

    // function updateAccess(){
    //     setAccess(!access)
    // };

    function loginAction(){
        setAccess(true)
    }

    function logoutAction(){
        setAccess(false)
    }

    let optionalButton;

    // if (access) {
    //     optionalButton = <button onClick={updateAccess}>LogOut</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>LogIn</button>

    // };

    if (access) {
        optionalButton = <LogoutButton loginAction={logoutAction} />
    } else {
        optionalButton = <LoginButton loginAction={loginAction} />

    };


    return (
        <div>
            {optionalButton}
        </div>
    );
}

export default OptionalRender;
