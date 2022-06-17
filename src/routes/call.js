import React from 'react';
import AppPage from '../components/AppPage';
import TemplateSelector from '../components/TemplateSelector';
import { Box, IconButton, Typography } from '@mui/material';
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

            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch"}}>
                <Box sx={{height: "90px", p: 1.5}}>
                    <IconButton onClick={handleBack}><ArrowBackIcon fontSize="large" sx={{fill: "grey"}}/></IconButton>
                </Box>
                <Typography variant="h3" fontWeight="bold" textAlign="center" height="100px">Choose a template to use</Typography>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                    {
                        GetUser().templates.map((uuid) => {
                            let template = GetTemplateByUUID(uuid);
                            return <TemplateSelector key={template.uuid} template={template} action="use" color='#60AFFF'/>
                        })
                    }
                </Box>
            </Box>

        </AppPage>
    );
}