import { Card, Box, Typography, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function AddedQuestionEditor(props){
    const styles = {
        card: {
            maxWidth: "100%",
            m: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
        },

        question_box: {
            // backgroundColor: "red",
            height: "25%",
            display: "flex",
            alignItems: "center",
            py: 2
        },

        input_box: {
            // backgroundColor: "green",
            flexGrow: 1,
            px: 3
        },

        buttons_box: {
            // backgroundColor: "blue",
            height: "25%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            px: 3,
            py: 1
        },

        question: {
            fontWeight: "bold",
            px: 3
        },
    };

    const [note, setNote] = useState(props.note);

    useEffect(() => {
        props.handleUpdateNote(props.index, note);
    });

    return (
        <Card sx={styles.card}>
            <Box sx={styles.question_box}>
                <Typography sx={styles.question}>{props.question}</Typography>
            </Box>
            <Box sx={styles.input_box}>
                <TextField autoFocus value={note} placeholder="Type here" multiline rows={3} size="small" fullWidth onChange={(e) => setNote(e.target.value)}/>
            </Box>
            <Box sx={styles.buttons_box}>
                <Button onClick={() => props.handleSave(props.index, note)}>Save</Button>
            </Box>
        </Card>
    );
}