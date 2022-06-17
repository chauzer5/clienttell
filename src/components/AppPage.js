import React from 'react';
import { Box } from '@mui/material';
import SiteHeader from './SiteHeader';
import CallHeader from './CallHeader';

export default function AppPage(props){
    const styles = {
        root: {
            background: "whitesmoke",
            width: "100vw",
            height: "100vh",
        },
    }

    const header = (props.call ? <CallHeader templateId={props.templateId} callInfo={props.callInfo} setCallInfo={props.setCallInfo}/> : <SiteHeader />);

    return (

        <Box sx={styles.root}>
            {header}
            {props.children}
        </Box>
    );
}