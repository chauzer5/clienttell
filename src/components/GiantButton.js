import { Button, Typography, Grid } from "@mui/material";
import React from "react";

export default function GiantButton(props){
    const styles = {
        button: {
            width: 450,
            height: 200,
            ...props.style
        },

        small_text: {
            fontSize: 36
        },

        large_text: {
            fontSize: 64
        },

        
    };

    return (
        <Button onClick={props.handleClick} variant="contained" sx={styles.button}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography sx={styles.small_text}>{props.smallText}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={styles.large_text}>{props.largeText}</Typography>
                </Grid>
            </Grid>
        </Button>
    );
}