import React from 'react';
import AppPage from '../components/AppPage';
import TemplateSelector from '../components/TemplateSelector';
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import { GetUser, GetTemplateByUUID } from '../data';

export default function Call(){
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/home');
    }

    return (
        <AppPage>
            <Grid 
                container 
                direction="column" 
                justifyContent="flex-start"
                alignItems="stretch"
            >
                <Grid item height="90px" padding={1.5}>
                    <IconButton onClick={handleBack}>
                        <ArrowBackIcon fontSize="large" sx={{fill: "grey"}}/>
                    </IconButton>
                </Grid>
                <Grid item height="100px">
                    <Typography variant="h3" fontWeight="bold" textAlign={"center"}>Choose a template to use</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
                    {
                        GetUser().templates.map((uuid) => {
                            let template = GetTemplateByUUID(uuid);
                            return <TemplateSelector key={template.uuid} template={template} action="use" color='#60AFFF'/>
                        })
                    }
                    </Grid>
                </Grid>
            </Grid>
        </AppPage>
    );
}