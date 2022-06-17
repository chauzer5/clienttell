import { Box, Typography } from '@mui/material';
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

        content: {
            height: "90%",
            display: "flex",
            flexDirection: "column"
        },

        button_box: {
            flexGrow: 1,
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
        }
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
            <Box sx={styles.content}>
                <Typography variant="h3" sx={styles.header}>Welcome, {GetUser().firstName}</Typography>
                <Box sx={styles.button_box}>
                    <GiantButton handleClick={handleClickCall} smallText="MAKE A" largeText="CALL" style={{backgroundColor: "#60AFFF", mx: 4}} />
                    <GiantButton handleClick={handleClickTemplates} smallText="EDIT" largeText="TEMPLATES" style={{backgroundColor: "#D09E14", mx: 4, "&:hover": {backgroundColor: "#947D3F"}}} />
                </Box>
            </Box>
        </AppPage>
    );
}