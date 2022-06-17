import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
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
            justifyContent: "center",
            alignItems: "center"
        },

        card: {
            width: "500px",
            height: "600px",
            px: 2
        }
    }

    return (
        <Box sx={styles.root}>
            <Card sx={styles.card}>
                <CardContent>
                    <ClientTellLogo />
                    <SignUpForm />
                </CardContent>
            </Card>
        </Box>
    );
}