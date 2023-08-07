import { useState } from "react";

const Character = ({ name, details }) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }

    return (
        <div>
            <h2>{name}</h2>
            {show ? <p>{details}</p> : null}
            <button onClick={toggle}>
                {show ? 'hide' : 'show'}
            </button>
        </div>
        )
    }

    export default Character;