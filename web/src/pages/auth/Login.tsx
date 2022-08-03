import { Button, IconButton, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div style={styles.wrapper}>
            <div style={styles.column}>
                <IconButton onClick={goBack} style={styles.backButton}>
                    <ArrowBackIcon/>
                </IconButton>
                <img src={Logo} style={styles.logo} alt="TaskApp" />
                <div style={styles.buttonWrapper}>
                    <TextField
                        id="standard-basic"
                        type="email"
                        color="secondary"
                        fullWidth
                        style={styles.textField}
                        label="E-mail"
                        variant="filled"
                        value={email}
                        onChange={email => setEmail(email.target.value)}
                    />
                    <TextField
                        id="standard-basic"
                        type="password"
                        color="secondary"
                        fullWidth
                        style={styles.textField}
                        label="Senha"
                        variant="filled"
                        value={password}
                        onChange={password => setPassword(password.target.value)}
                    />
                </div>
                    <Button onClick={()=> console.log(email)} variant="contained" size="large" style={styles.button}>
                        Entrar
                    </Button>
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
    backButton: {
        marginLeft: "20px",
        marginTop: "20px",
        position: "absolute" as "absolute",
        top: "0",
        left: "0",
        zIndex: "1",
        backgroundColor: "#fc0fc1"
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

    textField:{
        margin: "10px",
    },

    button: {
        backgroundColor: "#fc0fc1",
        color: "#fff",
        width: "25vw",
        margin: "10px",
    },
}
