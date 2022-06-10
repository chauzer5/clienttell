import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';

export default function ExportModalButton(props){
    const styles= {
        button: {
            height: "60px",
            width: "130px",
            fontSize: "18px",
            backgroundColor: "#60AFFF"
        },

        box: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: "white",
            boxShadow: 24,
            p: 1,
            borderRadius: 1
        },

        header: {
            mb: 4,
            pt: 3,
            pl: 3
        },

        header_and_close: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
        },

        export_options: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
        },
        
        checkbox: {
            pl: 3
        },

        modal_button: {
            m: 3,
            backgroundColor: "#60AFFF"
        },

    }

    // const [open, setOpen] = useState(false);
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    // const [includeCallInfo, setIncludeCallInfo] = useState(false);
    // const [includeQuestionPaths, setIncludeQuestionPaths] = useState(false);


    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const handleClick = () => {
        switch(props.exportOptions.mode){
            case "clipboard":
                handleCopy();
                break;
            case "csv":
                // later
                break;
            default:
                // do nothing
        }
    };

    const handleSnackBarOpen = () => {
        setSnackBarOpen(true);
    };

    const handleSnackBarClose = () => {
        setSnackBarOpen(false);
    }

    const handleCopy = () => {
        let copyString = "";
        if(props.exportOptions.includeCallInfo){
            copyString += `Call Info (${props.callInfo.date})\n`;
            copyString += (props.callInfo.companyName ? `Company Name: ${props.callInfo.companyName}\n` : "");
            copyString += (props.callInfo.contactName ? `Contact Name: ${props.callInfo.contactName}\n` : "");
            copyString += (props.callInfo.notes ? `Additional Notes:\n${props.callInfo.notes}\n` : "");
            copyString += "\n";
        }

        for(let i = 0; i < props.questions.length; i++){
            copyString += props.questions[i].question;
            copyString += ((props.exportOptions.includePaths && props.questions[i].path !== "") ? ` (${props.questions[i].path})\n` : "\n");
            copyString += props.questions[i].note;
            copyString += (i === props.questions.length ? "" : "\n");
        }

        if(props.otherNotes){
            copyString += "\nOther notes:\n"
            copyString += `${props.otherNotes}`;
        }

        navigator.clipboard.writeText(copyString);
        console.log(props.callInfo);
        handleSnackBarOpen();
    };

    return (
        <>
            <Button onClick={handleClick} variant="contained" sx={styles.button}>Export</Button>
            {/* <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Box sx={styles.box}>
                    <Box sx={styles.header_and_close}>
                        <Typography id="modal-modal-title" variant="h5" fontWeight="bold" sx={styles.header}>Export</Typography>
                        <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    </Box>

                    <FormControlLabel
                        sx={styles.checkbox}
                        control={<Checkbox value={includeCallInfo} onChange={(e) => {setIncludeCallInfo(e.target.checked)}} />}
                        label="Include call info (Company/Contact/Date/Notes)"
                    />

                    <FormControlLabel
                        sx={styles.checkbox}
                        control={<Checkbox value={includeQuestionPaths} onChange={(e) => {setIncludeQuestionPaths(e.target.checked)}} />}
                        label="Include question paths"
                    />

                    <Box sx={styles.export_options}>
                        <Button onClick={handleCopy} variant="contained" sx={styles.modal_button}>Copy to Clipboard</Button>
                        <Button variant="contained" sx={styles.modal_button}>Export as CSV</Button>
                    </Box>
                </Box>
            </Modal> */}
            <Snackbar
                open={snackBarOpen}
                autoHideDuration={4000}
                onClose={handleSnackBarClose}
                message="Copied to clipboard!"
            />
        </>
    );
}