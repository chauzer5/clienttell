import { Box, Card, Divider, Typography, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import AddedQuestion from './AddedQuestion';
import AddedQuestionEditor from './AddedQuestionEditor';
import ExportModalButton from './ExportModalButton';
import ExitModalButton from './ExitModalButton';

export default function CallOutputSection(props){

    const styles = {
        top_section: {
            width: "100%",
            minHeight: "70%",
            maxHeight: "600px",
            overflow: 'auto',
        },

        divider: {
            borderBottomWidth: 3,
            borderColor: "#A1A1A1",
            my: 1
        },

        bottom_section: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            p: 2
        },

        other_notes_card: {
            flexGrow: 1,
            p: 2
        },

        buttons: {
            width: "25%",
            ml: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center"
        },

        button: {
            height: "60px",
            width: "130px",
            fontSize: "18px"
        }
    }

    const questionsEndRef = useRef(null);
    const scrollToBottom = () => {
        questionsEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const lastItem = (props.questions.length > 0) ? props.questions[props.questions.length - 1].question : "";
    useEffect(() => {
        scrollToBottom();
    }, [lastItem]);

    

    const handleEdit = (num) => {
        props.setCurrentEdit(num);
    };

    const handleDelete = (num) => {
        let newQuestions = props.questions.slice();
        newQuestions.splice(num, 1);

        props.setQuestions(newQuestions);
        if(props.currentEdit > num){
            props.setCurrentEdit(props.currentEdit - 1);
        }
    };

    const handleUpdateNote = (num, note) => {
        let newQuestions = [];
        for(let i = 0; i < props.questions.length; i++){
            if(num !== i){
                newQuestions.push(props.questions[i]);
            }
            else {
                newQuestions.push({...props.questions[i], note: note});
            }
        }
        props.setQuestions(newQuestions);
    };

    const handleSave = (num, note) => {
        handleUpdateNote(num, note);
        props.setCurrentEdit(-1);
    };

    const [otherNotes, setOtherNotes] = useState("");

    return (
        <Box sx={{display: "flex", flexDirection: "column", height: "100%", maxWidth: "100%"}}>
            <Box sx={styles.top_section}>
                {
                    props.questions.map(({question, path, note}, index) => {
                        return (index !== props.currentEdit ? 
                        <AddedQuestion key={index} index={index} question={question} path={path} note={note} handleEdit={handleEdit} handleDelete={handleDelete}/> :
                        <AddedQuestionEditor key={index} index={index} question={question} note={note} handleSave={handleSave} handleUpdateNote={handleUpdateNote}/>);
                    })
                }
                <div ref={questionsEndRef} />
            </Box>

            <Divider variant="middle" sx={styles.divider}/>

            <Box sx={styles.bottom_section}>
                <Card sx={styles.other_notes_card}>
                    <Typography variant="h7" fontWeight="bold" sx={{}}>Other notes</Typography>
                    <TextField value={otherNotes} placeholder="Type here" multiline rows={5} size="small" fullWidth sx={{mt: 2}} onChange={(e) => setOtherNotes(e.target.value)}/>
                </Card>
                <Box sx={styles.buttons}>
                    <ExportModalButton callInfo={props.callInfo} questions={props.questions} otherNotes={otherNotes} exportOptions={props.exportOptions}/>
                    <ExitModalButton />
                </Box>
            </Box>
        </Box>
    );
}

//props
// callInfo
// questions
// currentEdit
// setQuestions
// setCurrentEdit