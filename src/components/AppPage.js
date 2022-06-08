import React from 'react';
import { Grid } from '@mui/material';
import SiteHeader from './SiteHeader';
import CallHeader from './CallHeader';

export default function AppPage(props){
    const styles = {
        root: {
            background: "whitesmoke",
            width: "100vw",
            height: "100vh",
        },

        content: {
            height: "100%"
        }
    }

    const header = (props.call ? <CallHeader templateId={props.templateId} callInfo={props.callInfo} setCallInfo={props.setCallInfo}/> : <SiteHeader />);

    return (
        <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" sx={styles.root}>
            <Grid item>
                {header}
            </Grid>
            <Grid item flexGrow={1}>
                {props.children}
            </Grid>
        </Grid>
    );
}