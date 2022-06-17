import React from 'react';
import ClientTellLogo from './ClientTellLogo';
import UserThreeDotMenu from './UserThreeDotMenu';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { GetUser } from '../data';

export default function SiteHeader() {
    const styles = {
        root: {
            background: "#3D5C7E",
            width: "100%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }
    };

    return (

        <Box sx={styles.root}>
            <Link to="/home"><ClientTellLogo style={{ color: "white", fontSize: 24, mx: 2 }}/></Link>
            <UserThreeDotMenu name={GetUser().firstName} />
        </Box>
    );
}