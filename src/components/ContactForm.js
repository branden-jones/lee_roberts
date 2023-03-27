import React, { useState } from "react";
// Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


export const Contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [ nameError, setNameError ] = useState(false)
    const [ emailError, setEmailError ] = useState(false)
    const [ messageError, setMessageError ] = useState(false)
    
    const changehandler = (event) => {
        // event.target.
    };
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(`Console`, name, email, message)
            console.log(event.target)

        setNameError(false)
        setEmailError(false)
        setMessageError(false)

        if (name.trim() === '') {
            setNameError(true)
        }
        if (email.trim() === '') {
            setEmailError(true)
        }
        if (message.trim() === '') {
            setMessageError(true)
        }

        if (name && email && message) {
            setDisabled(false)
            // and send something..
            
        }
    }

    return (
        <div>
            <h1>HELLO WORLD</h1>
            <form noValidate autoComplete="off" onSubmit={(e) => submitHandler(e)}>
                <Stack container direction={"column"} spacing={2}>
                    <TextField
                        onChange={(event) => setName(event.target.value)}
                        label="Name"
                        variant="outlined"
                        color="secondary"
                        required
                        error={nameError}
                    >
                    </TextField>
                    <TextField
                        onChange={(event) => setEmail(event.target.value)}
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        required
                        error={emailError}
                    >
                    </TextField>
                    <TextField
                        onChange={(event) => setMessage(event.target.value)}
                        label="Message to Lee"
                        placeholder="You're the Best Lee!!"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={6}
                        required
                        error={messageError}
                    >
                    </TextField>
                    
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={(e) => submitHandler(e)}
                        // disabled={disabled}
                    >
                        Send Message
                    </Button>
                </Stack>
            </form>
        </div>
    )
}

export default Contact;