import { Button, Modal, Box, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { LightenDarkenColor } from "../colormod";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router";

export default function ExitModalButton(props){
    const styles= {
        button: {
            height: "60px",
            width: "130px",
            fontSize: "18px",
            backgroundColor: "#FF7474",
            "&:hover": {
                backgroundColor: LightenDarkenColor("#FF7474", -40)
            }
        },

        box: {
            position: 'absolute',
            top: "50%",
            left: "50%",
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: "white",
            boxShadow: 24,
            p: 1,
            borderRadius: 1
        },

        header_and_close: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start"
        },

        header: {
            mb: 2,
            pt: 3,
            pl: 3
        },

        description: {
            pl: 3,
            pr: 6
        },

        modal_button: {
            mb: 2,
            mt: 5,
            backgroundColor: "#FF7474",
            "&:hover": {
                backgroundColor: LightenDarkenColor("#FF7474", -40)
            },
            width: "200px"
        },

        button_box: {
            display: "flex",
            justifyContent: "center"
        }
    }

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    }

    const handleExit = () => {
        navigate("/home");
    }

    return (
        <>
            <Button onClick={handleOpen} variant="contained" sx={styles.button}>Exit</Button>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Box sx={styles.box}>
                    <Box sx={styles.header_and_close}>
                        <Typography id="modal-modal-title" variant="h5" fontWeight="bold" sx={styles.header}>Are you sure?</Typography>
                        <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    </Box>

                    <Typography sx={styles.description}>Make sure that you've exported the results of the call, as it will not be saved anywhere.</Typography>

                    <Box sx={styles.button_box}>
                        <Button sx={styles.modal_button} onClick={handleExit} variant="contained">Exit</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}