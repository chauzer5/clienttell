import { Box, Card, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

export default function QuestionItem(props){
    const styles = {
        question_box: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },

        question_card: {
            flexGrow: 1,
            m: 1,
            display: "flex",
            alignItems: "center",
            px: 3,
            py: 2
        },

        add_button: {
            height: "50px",
            width: "50px",
            backgroundColor: "#60AFFF",
            m: 1
        }
    };

    const handleClick = () => {
        props.handleAdd(props.text, props.folderPath);
    };

    return (
        <Box sx={styles.question_box}>
            <Card sx={styles.question_card}><Typography>{props.text}</Typography></Card>
            <Button onClick={handleClick} variant="contained" sx={styles.add_button}><AddIcon fontSize="large"/></Button>
        </Box>
    );
}

// props
// text
// handleAdd
// folderPath