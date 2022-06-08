import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import ClientTellLogo from '../components/ClientTellLogo';
import SignUpForm from '../components/SignUpForm';

export default function SignUp(){

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
            height: "650px",
            px: 2
        }
    }

    return (
        <Grid sx={styles.root} alignItems="center" justify="center">
            <Card sx={styles.card}>
                <CardContent>
                    <ClientTellLogo />
                    <SignUpForm />
                </CardContent>
            </Card>
        </Grid>
    );
}