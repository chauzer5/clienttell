import React from 'react';
import { Button, FormControlLabel, TextField, Typography, Checkbox, Grid, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SignInForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const styles = {
        header: {
            fontSize: 24
        },

        form: {
            mt: 1
        },

        submit: {
            mt: 3,
            mb: 2,
            backgroundColor: "#3D5C7E"
        },

        link: {
            fontSize: 14,
            color: "#6ea9e3"
        }

    }


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography sx={styles.header}>
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.form}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Link to="/home" style={{textDecoration: "none"}}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={styles.submit}
                        >
                            SIGN IN
                        </Button>
                    </Link>
                    <Grid container>
                        <Grid item xs>
                            <Link to="#" style={styles.link}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup" style={styles.link}>
                                Don't have an account? Sign up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}