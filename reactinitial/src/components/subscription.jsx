import { TextField, Button} from '@mui/material';
import { useState } from "react";
import LoadingMask from "./loadingMask";

const url = 'https://demoapi.com/api/series/howimetyourmother'

const Subscription = ({ onSubscribed }) => {
    const [email, setEmail] = useState("");
    const [valid, setValid ]= useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const value = e.target;

        if ( value.includes( '@') && value.includes('.')) {
            setValid(true);
        }else {
            setValid(false);
        }

        setEmail(e.target.value);
    }

    const handleSubscribe = async () => {
        setLoading(true);
        
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });

        setLoading(false);
        setSubscribed(true);
        onSubscribed();
    }

    return (
        <div>
            {subscribed ? <h2>Subscribed</h2> : null}
            {loading ? <LoadingMask /> : null}
            {!subscribed && !loading ? (
            <>
            <TextField 
                label='Email adress' 
                variant='outlined' 
                value={email} 
                onChange={handleChange} 
                type="email" />

            <Button variant='contained' disabled={!valid} onClick={handleSubscribe}>
                Subscribe
                </Button>
            </>
            ) : null}
            </div>
    );
};

export default Subscription;