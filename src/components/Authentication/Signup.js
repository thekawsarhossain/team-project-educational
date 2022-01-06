import { Alert, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';
import { useForm } from "react-hook-form";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import './Authentication.css';
import useAuth from '../../hooks/useAuth';

const Signup = () => {

    // useAuth custom hook here 
    const { createUser, error, signInWithGoogle, signInWithFacebook } = useAuth();
    // react hook here 
    const history = useHistory();

    // react hook form functions here 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert("Password isn't matched ");
            return;
        } else {
            createUser(data.email, data.password, data.name, history)
        }
        reset()
    };

    // handle signup btn function here 
    const handleLogin = () => {
        history('/login');
    }

    // main function here
    return (
        <Container sx={{ my: 8 }}>
            <Paper variant="outlined" sx={{ width: { md: '80%', sm: '100%', lg: '40%' }, m: 'auto', p: 2, mb: 1 }}>
                <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                    <span className="title">Amateur Photographers</span>
                </Typography>
                <Box>

                    {/* form input section start here  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField sx={{ width: '100%', my: 1 }} label="Name" type="text" variant="outlined" {...register("name")} required />
                        <TextField sx={{ width: '100%', my: 1 }} label="Email" type="email" variant="outlined" {...register("email")} required />
                        <TextField sx={{ width: '100%', my: 1 }} label="Password" type="password" variant="outlined" {...register("password")} required />
                        <TextField sx={{ width: '100%', my: 1 }} label="Confirm Password" type="password" variant="outlined" {...register("password2")} required />
                        <Button sx={{ width: '100%', my: 1 }} variant="outlined" type="submit">Signup</Button>

                        {/* login with other section here  */}
                        <span className="or">OR</span>
                        <Box>
                            <Button onClick={() => signInWithFacebook(history)} variant="text"><FacebookIcon /> <span className="mt-1"> Facebook</span> </Button>
                            <Button onClick={() => signInWithGoogle(history)} variant="text"><GoogleIcon /> <span className="mt-1"> Google</span> </Button>
                        </Box>
                    </form>

                </Box>
            </Paper>
            <Paper variant="outlined" sx={{ width: { md: '80%', sm: '100%', lg: '40%' }, m: 'auto', p: 2, mb: 1 }}>
                <span>Already have an account?</span><Button onClick={handleLogin} variant="text" sx={{ px: 0 }}>Login</Button>
            </Paper>

            {/* showing the error when neede */}
            {error && <Alert sx={{ width: { md: '80%', sm: '100%', lg: '40%' }, m: 'auto' }} severity="error">{error}</Alert>}

        </Container>
    );
};

export default Signup;