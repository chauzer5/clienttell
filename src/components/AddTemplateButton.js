import React from "react";
import { Card, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import { useNavigate } from "react-router";

export default function AddTemplateButton(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/add");
    }


    const styles = {
        card: {
            width: "800px",
            height: "125px",
            m: 2,
            p: 3,

            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }

    return (
        <Button onClick={handleClick}>
            <Card sx={styles.card}>
                <AddIcon sx={{fontSize: "60px", fill: "grey"}}/>
            </Card>
        </Button>
    );
}