import { Modal, Button, Box, Typography, FormLabel, TextField, Select, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import { GetTemplateByUUID, GetUser } from "../data";
import { useNavigate } from "react-router";

export default function NewCallModalButton({templateUUID}){
    const navigate = useNavigate();

    const styles = {
        button: {
            width: "150px",
            mr: 2,
            backgroundColor: "#60AFFF",
        },

        box: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 1
        },

        header: {
            mb: 5
        },

        field: {
            mt: 1,
            mb: 4,
        },

        label: {
            fontSize: "12px"
        },

        half_size_field: {
            width: "45%",
            display: "flex",
            flexDirection: "column"
        }

    }

    const today = new Date();
    const todayString = `${ String(today.getDate()).padStart(2, "0") }/${ String(today.getMonth()+1).padStart(2, "0") }/${ today.getFullYear() }`

    // USED FOR MANAGING THE STATE OF THE FORM INPUTS
    const [template, setTemplate] = useState(templateUUID);
    const [companyName, setCompanyName] = useState("");
    const [contactName, setContactName] = useState("");
    const [notes, setNotes] = useState("");
    
    // USED FOR OPENING AND CLOSING THE MODAL ITSELF
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setTemplate(templateUUID);
    };
    const handleClose = () => {
        setCompanyName("");
        setContactName("");
        setNotes("");
        setOpen(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/call/${template}`,
        {state: {
            date: todayString,
            companyName: companyName,
            contactName: contactName,
            notes: notes
        }}
        );
    };

    const templates = GetUser().templates;

    return (
        <>
            <Button onClick={handleOpen} variant="contained" sx={styles.button}>use</Button>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Box sx={styles.box}>
                
                    <Typography id="modal-modal-title" variant="h5" fontWeight="bold" sx={styles.header}>
                        Start a new call
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Box sx={styles.half_size_field}>
                                <FormLabel sx={styles.label}>Template</FormLabel>
                                <Select defaultValue={templateUUID} value={template} onChange={(e) => setTemplate(e.target.value)} size="small" sx={{...styles.field}}>
                                    {
                                        templates.map((uuid) => {
                                            return <MenuItem key={uuid} value={uuid}>{GetTemplateByUUID(uuid).name}</MenuItem>;
                                        })
                                    }
                                </Select>
                            </Box>
                            <Box sx={styles.half_size_field}>
                                <FormLabel sx={styles.label}>Date</FormLabel>
                                <TextField defaultValue={todayString} disabled={true} size="small" sx={{...styles.field}}/>
                            </Box>
                        </Box>
                        <FormLabel sx={styles.label}>Company Name</FormLabel>
                        <TextField value={companyName} onChange={(e) => setCompanyName(e.target.value)} size="small" fullWidth sx={{...styles.field}}/>
                        <FormLabel sx={styles.label}>{"Contact Name"}</FormLabel>
                        <TextField value={contactName} onChange={(e) => setContactName(e.target.value)} size="small" fullWidth sx={{...styles.field}}/>
                        <FormLabel sx={styles.label}>{"Additional Notes"}</FormLabel>
                        <TextField value={notes} onChange={(e) => setNotes(e.target.value)} multiline rows={5} size="small" fullWidth sx={{...styles.field}}/>
                        <Box sx={{display: "flex", flexDirection:"row", justifyContent:"flex-end"}}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained" sx={{backgroundColor: "#60AFFF", ml: 3}}>Start</Button>
                        </Box>
                    </form>
                </Box>

            </Modal>
        </>
    );
}