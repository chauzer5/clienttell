import { Button, Typography, Box } from "@mui/material";
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

        box: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
    };

    return (
        <Button onClick={props.handleClick} variant="contained" sx={styles.button}>
            <Box sx={styles.box}>
                <Typography sx={styles.small_text}>{props.smallText}</Typography>
                <Typography sx={styles.large_text}>{props.largeText}</Typography>
            </Box>
        </Button>
    );
}