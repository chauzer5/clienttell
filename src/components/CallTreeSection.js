import { Box, Button, Divider } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import QuestionItem from './QuestionItem';
import { GetTemplateByUUID } from '../data';
import { LightenDarkenColor } from '../colormod';

export default function CallTreeSection(props){

    const styles = {
        folders: {
            m: 3
        },

        divider: {
            borderBottomWidth: 3,
            borderColor: "#A1A1A1"
        }, 

        contents: {
            m: 3,
            maxHeight: "600px",
            overflow: 'auto'
        },

        folder_box: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },

        home_button: {
            height: "50px",
            width: "50px",
            borderRadius: "0px",
            m: 0.5,
            mr: 1,
            backgroundColor: "#5B5B5B",
            "&:hover": {
                backgroundColor: "#323232"
            },
            // flexGrow: 1
        },

        folder_button: {
            height: "50px",
            borderRadius: "0px",
            m: 0.5,
            fontWeight: "bold",
            fontSize: "18px",
            textTransform: "unset !important",
            pl: 3,
            flexGrow: 1,
            justifyContent: "flex-start"
        },

        pressed_folder: {
            // DOESN'T WORK, TODO
            boxShadow: "inset 0 2 3px #000000"
        },

    };

    const templateTree = GetTemplateByUUID(props.templateId).tree;

    const handleGoDown = (folder) => {
        props.setFolderPath(props.folderPath.concat(folder));
    };

    const handleGoUp = (folder) => {
        let newPath = [];
        for(let i = 0; i < props.folderPath.length; i++){
            newPath = newPath.concat(props.folderPath[i]);
            if(props.folderPath[i] === folder){ break; }
        }
        props.setFolderPath(newPath);
    };

    const handleGoHome = () => {
        props.setFolderPath([]);
    }

    const getCorrectFolderContents = () => {
        return props.folderPath.length ? props.folderPath[props.folderPath.length - 1].contents : templateTree;
    }

    return (
        <>
            <Box sx={styles.folders}>
                {props.folderPath.length === 0 ? (
                    <Box sx={styles.folder_box}>
                        <Button variant="contained" sx={{...styles.home_button, flexGrow: 1}}><HomeIcon fontSize="large"/></Button>
                    </Box>
                ) : (
                    <>
                        <Box sx={styles.folder_box}>
                            <Button onClick={handleGoHome} variant="contained" sx={styles.home_button}><HomeIcon fontSize="large"/></Button>
                            <Button 
                                onClick={() => {handleGoUp(props.folderPath[0])}} 
                                variant="contained" 
                                sx={{...styles.folder_button, backgroundColor: props.folderPath[0].color, "&:hover": {backgroundColor: LightenDarkenColor(props.folderPath[0].color, -40)}}}
                            >
                                {props.folderPath[0].name}
                            </Button>
                        </Box>
                        {
                        props.folderPath.slice(1).map((folderRef) => {
                            return (
                                <Box key={folderRef.name} sx={styles.folder_box}>
                                    <Button 
                                        onClick={() => {handleGoUp(folderRef)}} 
                                        variant="contained" 
                                        sx={{...styles.folder_button, backgroundColor: folderRef.color, "&:hover": {backgroundColor: LightenDarkenColor(folderRef.color, -40)}}}
                                    >
                                        {folderRef.name}
                                    </Button>
                                </Box>
                            );
                        })
                        }
                    </>
                )}
            </Box>

            <Divider variant="middle" sx={styles.divider}/>

            <Box>
                <Box sx={styles.contents}>
                    {
                        getCorrectFolderContents().map((itemRef) => {
                            if(itemRef.type === "folder"){
                                return (
                                    <Box key={itemRef.name} sx={styles.folder_box}>
                                        <Button 
                                            onClick={() => {handleGoDown(itemRef)}} 
                                            variant="contained" 
                                            sx={{...styles.folder_button, backgroundColor: itemRef.color, "&:hover": {backgroundColor: LightenDarkenColor(itemRef.color, -40)}}}
                                        >
                                            {itemRef.name}
                                        </Button>
                                    </Box>
                                );
                            }
                            else if(itemRef.type === "question"){
                                return <QuestionItem key={itemRef.text} text={itemRef.text} handleAdd={props.handleAddQuestion} folderPath={props.folderPath}/>;
                            }
                            
                            return "";
                        })
                    }
                </Box>
            </Box>
        </>
    );
}