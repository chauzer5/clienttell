
import { Box } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import AppPage from '../components/AppPage';
import CallOutputSection from '../components/CallOutputSection';
import CallTreeSection from '../components/CallTreeSection';
import { GetTemplateByUUID } from '../data';

export default function Application(){
    const location = useLocation();
    const params = useParams();

    // which template is being used
    const templateUUID = params.templateId;

    // state contains companyName, contactName, date, and notes
    const [state, setState] = useState(location.state);
    // questions contains all of the questions and answers and paths
    // an individual question looks like: {question, path, note}
    const [questions, setQuestions] = useState([]);
    // currentEdit contains and integer representing which question is opened up, if any
    const [currentEdit, setCurrentEdit] = useState(-1);

    // takes a question to add, and folderPath from lowest to highest
    const addQuestionToOutput = (questionText, folderPath) => {
        const folderPathAsString = folderPath.map(folder => folder.name).reverse().join(" - ");
        let numQuestions = questions.length;
        setQuestions(questions.concat({question: questionText, path: folderPathAsString, note: ""}))
        setCurrentEdit(numQuestions);

        console.log(`Added: ${questionText}`);
        console.log(`Path: ${folderPathAsString}`);
    };



    return (
        <AppPage call={true} callInfo={{...state}} setCallInfo={setState} templateId={templateUUID}>
            <Box sx={{height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"stretch"}}>
                <Box sx={{width: "50%", backgroundColor: "#E1E1E1", overflow: "auto", maxHeight: "100%"}}>
                    <CallTreeSection templateId={templateUUID} handleAddQuestion={addQuestionToOutput}/>
                </Box>
                <Box sx={{width: "50%", backgroundColor: "whitesmoke"}}>
                    <CallOutputSection callInfo={state} questions={questions} currentEdit={currentEdit} setQuestions={setQuestions} setCurrentEdit={setCurrentEdit} exportOptions={GetTemplateByUUID(templateUUID).export}/>
                </Box>
            </Box>
        </AppPage>
    );
}