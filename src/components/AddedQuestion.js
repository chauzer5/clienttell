import { Card, Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AddedQuestion(props){
    const styles = {
        card: {
            height: "90px",
            m: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
        },
        
        content_box: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch"
        },

        button_box: {
            width: "125px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        
        icon: {
            fontSize: "25px"
        },

        question_and_path: {
            height: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%"
        },

        question: {
            mx: 3,
            fontWeight: "bold",
            width: "630px",
            // direction: "rtl"
        },

        path: {
            fontWeight: "bold",
            color: "#ABABAB"
        },

        note_box: {
            height: "50%",
            display: "flex",
            alignItems: "flex-start"
        },

        note: {
            width: "630px",
            fontSize: "14px",
            px: 3
        }
    };

    return (
        <Card sx={styles.card}>
            <Box sx={styles.content_box}>
                <Box sx={styles.question_and_path}>
                    <Typography noWrap sx={styles.question}>{`${props.question} `}<span style={{color: "#ABABAB"}}>{props.path}</span></Typography>
                    {/* <Typography sx={styles.path}>{props.path}</Typography> */}
                </Box>
                <Box sx={styles.note_box}>
                    <Typography noWrap sx={styles.note}>{props.note}</Typography>
                </Box>
            </Box>

            <Box sx={styles.button_box}>
                <IconButton onClick={() => props.handleEdit(props.index)}><EditIcon sx={styles.icon}/></IconButton>
                <IconButton onClick={() => props.handleDelete(props.index)}><DeleteIcon sx={styles.icon}/></IconButton>
            </Box>
        </Card>
    );
}

//props
// question
// path
// note
// handleEdit
// handleDelete