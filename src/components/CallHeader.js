import React, { useState } from 'react';
import ClientTellLogo from './ClientTellLogo';
import UserThreeDotMenu from './UserThreeDotMenu';
import { Box, Typography, IconButton, Modal, FormLabel, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { GetUser } from '../data';
import EditIcon from '@mui/icons-material/Edit';
import { GetTemplateByUUID } from '../data';

export default function CallHeader(props) {
    const styles = {
        root: {
            background: "#3D5C7E",
            width: "100%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },

        call_info: {
            color: "white",
            fontSize: "20px"
        },

        middle_section: {
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center"
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

        label: {
            fontSize: "12px"
        },

        half_size_field: {
            width: "45%",
            display: "flex",
            flexDirection: "column"
        },

        field: {
            mt: 1,
            mb: 4
        }
    };

    const [companyName, setCompanyName] = useState(props.callInfo.companyName);
    const [contactName, setContactName] = useState(props.callInfo.contactName);
    const [notes, setNotes] = useState(props.callInfo.notes);

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setCompanyName(props.callInfo.companyName);
        setContactName(props.callInfo.contactName);
        setNotes(props.callInfo.notes);
        setOpen(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.setCallInfo({
            companyName: companyName,
            contactName: contactName,
            notes: notes,
            date: props.callInfo.date
        });
        setOpen(false);
    };

    return (

        <Box sx={styles.root}>
            <Link to="/home"><ClientTellLogo style={{ color: "white", fontSize: 24 }}/></Link>

            <Box sx={styles.middle_section}>
                <Typography sx={styles.call_info}>{(props.callInfo.companyName ? 
                    `Call with ${props.callInfo.companyName} (${props.callInfo.date})` : 
                    `Call on ${props.callInfo.date}`)}</Typography>
                <IconButton onClick={handleOpen} size="small" sx={{ ml: 2 }} >
                    <EditIcon sx={{fill: "white"}}/>
                </IconButton>
                <Modal
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={styles.box}>
                        <Typography id="modal-modal-title" variant="h5" fontWeight="bold" sx={styles.header}>
                            Edit call info
                        </Typography>


                        <form onSubmit={handleSubmit}>
                            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <Box sx={styles.half_size_field}>
                                    <FormLabel sx={styles.label}>Template</FormLabel>
                                    <TextField disabled={true} defaultValue={GetTemplateByUUID(props.templateId).name} size="small" sx={{...styles.field}}/>
                                </Box>
                                <Box sx={styles.half_size_field}>
                                    <FormLabel sx={styles.label}>Date</FormLabel>
                                    <TextField defaultValue={props.callInfo.date} disabled={true} size="small" sx={{...styles.field}}/>
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
                                <Button type="submit" variant="contained" sx={{backgroundColor: "#60AFFF", ml: 3}}>Save</Button>
                            </Box>
                        </form>


                    </Box>
                </Modal>
            </Box>

            <UserThreeDotMenu name={GetUser().firstName} />
        </Box>
    );
}