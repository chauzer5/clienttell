import React from "react";
import { Card, Divider, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import NewCallModalButton from "./NewCallModalButton";

export default function TemplateSelector(props){
    const templateUUID = props.template.uuid;

    const navigate = useNavigate();
    const handleClick = () => {
        // navigate(`/${props.action === "use" ? "call" : "edit"}/${templateUUID}`);
        navigate(`/edit/${templateUUID}`);
    }

    const styles = {
        card: {
            width: "800px",
            height: "125px",
            m: 2,

            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-around",
            alignItems: "center",
            p:3,
            gap: "35px",

            ...props.style
        },

        button: {
            width: "150px",
            mr: 2,
            backgroundColor: props.color,
            "&:hover": {
                backgroundColor: props.hoverColor
            }
        }
    }

    const buttonComponent = (props.action === "use" 
    ? <NewCallModalButton templateUUID={templateUUID} /> 
    : <Button onClick={handleClick} variant="contained" sx={styles.button}>edit</Button>);

    return (
        <Card sx={styles.card}>
            <Typography variant="h4" fontWeight="bold" width="400px" textAlign="center">{props.template.name}</Typography>
            <Divider orientation="vertical" variant="middle" />
            <Typography width="700px">{props.template.description}</Typography>
            <Divider orientation="vertical" variant="middle" />
            {buttonComponent}
        </Card>
    );
}