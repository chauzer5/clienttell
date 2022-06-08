import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppPage from '../components/AppPage';
import GiantButton from '../components/GiantButton';
import { GetUser } from '../data';

export default function Home(){
    const styles = {
        header: {
            fontWeight: 'bold',
            textAlign: 'center',
            pt: 10
        },
    };

    const navigate = useNavigate();

    const handleClickCall = () => {
        navigate("/call");
    };

    const handleClickTemplates = () => {
        navigate("/edit");
    }

    return (
        <AppPage>
            <Grid container height="100%">
                <Grid item xs={12}>
                    <Typography variant="h3" sx={styles.header}>Welcome, {GetUser().firstName}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" height="600px">
                        <GiantButton handleClick={handleClickCall} smallText="MAKE A" largeText="CALL" style={{backgroundColor: "#60AFFF", m: 4}} />
                        <GiantButton handleClick={handleClickTemplates} smallText="EDIT" largeText="TEMPLATES" style={{backgroundColor: "#D09E14", m: 4, "&:hover": {backgroundColor: "#947D3F"}}} />
                    </Grid>
                </Grid>
            </Grid>
        </AppPage>
    );
}