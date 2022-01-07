import { Alert, Paper, TextField, Typography, Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useForm } from "react-hook-form";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Authentication.css';

const Login = () => {

    // useAuth custom hook here 
    const { signIn, error, signInWithGoogle, signInWithFacebook } = useAuth();

    // react hook here 
    const history = useHistory();

    // react hook form functions here 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password, history);
        reset()
    };

    // handle signup btn function here 
    const handleSignup = () => {
        history.push('/signup');
    }

    // main function here
    return (
        <Container sx={{ my: 8 }}>
            <Paper variant="outlined" sx={{ width: { md: '80%', sm: '100%', lg: '40%' }, m: 'auto', p: 2, mb: 1 }}>
                <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                    <span className="title">Please Login</span>
                </Typography>
                <Box>

                    {/* form input section start here  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField sx={{ width: '100%', my: 1 }} label="Email" type="email" variant="outlined" {...register("email")} required />
                        <TextField sx={{ width: '100%', my: 1 }} label="Password" type="password" variant="outlined" {...register("password")} required />
                        <Button sx={{ width: '100%', my: 1 }} variant="outlined" type="submit">Login</Button>

                        {/* login with other section here  */}
                        <span className="or">OR</span>
                        <Box>
                            <Button variant="text"><FacebookIcon /> <span className="mt-1">Facebook</span> </Button>
                            <Button variant="text"><GoogleIcon /> <span className="mt-1">Google</span> </Button> <br />
                            <Button variant="text" size="small" sx={{ color: '#000' }}>forgot password?</Button>
                        </Box>
                    </form>

                </Box>
            </Paper>
            <Paper variant="outlined" sx={{ width: { md: '80%', sm: '100%', lg: '40%' }, m: 'auto', p: 2, mb: 1 }}>
                <span>Don't have an account?</span><Button onClick={handleSignup} variant="text" sx={{ px: 0 }}>Sign up</Button>
            </Paper>

            {/* showing the error when neede */}
            {error && <Alert sx={{ width: { md: '80%', sm: '100%', lg: '40%' }, m: 'auto' }} severity="error">{error}</Alert>}
        </Container>);
};

export default Login;