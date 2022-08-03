import { Button, IconButton, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Add, HdrPlus, PlusOne } from "@mui/icons-material";

export const AllTasks = () => {
    
    return (
        <div style={styles.wrapper}>
            <div style={styles.column}>
                <img src={Logo} style={styles.logo} alt="TaskApp" />
                <div style={styles.buttonWrapper}>
                    
                    <IconButton style={styles.createButton}>
                        <Add/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

const styles = {
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
    },
    column: {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "50vw",
    },
    logo: {
        width: "50%",
    },
    buttonWrapper: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "25vw",
        
    },
    createButton: {
        backgroundColor: "#fc0fc1"
    },
    button: {
        backgroundColor: "#fc0fc1",
        color: "#fff",
        width: "25vw",
        margin: "10px",
    },
}
