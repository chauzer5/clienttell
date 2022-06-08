import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import ClientTellLogo from '../components/ClientTellLogo';
import SignInForm from '../components/SignInForm';

export default function SignIn(){

    const styles = {
        root: {
            background: "whitesmoke",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },

        card: {
            width: "500px",
            height: "550px",
            px: 2
        }
    }

    return (
        <Grid sx={styles.root} alignItems="center" justify="center">
            <Card sx={styles.card}>
                <CardContent>
                    <ClientTellLogo />
                    <SignInForm />
                </CardContent>
            </Card>
        </Grid>
    );
}