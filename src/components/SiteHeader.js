import React from 'react';
import ClientTellLogo from './ClientTellLogo';
import UserThreeDotMenu from './UserThreeDotMenu';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { GetUser } from '../data';

export default function SiteHeader() {
    const styles = {
        root: {
            background: "#3D5C7E",
            width: "100vw",
            height: 50,
            px: 2
        }
    };

    return (
        <Grid container sx={styles.root} direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs>
                <Link to="/home">
                    <ClientTellLogo style={{ color: "white", fontSize: 24 }}/>
                </Link>
            </Grid>
            <Grid item>
                <UserThreeDotMenu name={GetUser().firstName} />
            </Grid>
        </Grid>
    );
}