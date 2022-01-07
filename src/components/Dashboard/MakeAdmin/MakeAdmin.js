import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState();

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleMaking = () => {
        const user = { email }
        fetch('https://lit-lake-52047.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    <Alert>
                        Admin Make Successfull !
                    </Alert>
                }
            })
    }

    return (
        <Container className="parent" sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '70%',
            }, mx: 'auto'
        }}>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Make Admin</Typography>

            <TextField
                sx={{ width: '95%', my: 1 }}
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                onBlur={handleEmail}
            />

            <Button
                onClick={handleMaking}
                sx={{ width: '95%', my: 2, bgcolor: 'text.primary' }}
                type="submit"
                size="large"
                variant="contained">
                Make Admin
            </Button>

        </Container>
    );
};

export default MakeAdmin;