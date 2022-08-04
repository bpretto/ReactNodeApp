import { Alert, Button, IconButton, Snackbar, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useState } from "react";
import auth from "../../auth";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "info" as "info" | "success" | "warning" | "error"
    });
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    async function handleSubmit() {
        if (
            email.length === 0
            || password.length === 0
            || !email.includes("@")
            || !email.includes(".")
            || password.length < 6
        ) {
            setAlert({
                open: true,
                message: "Preencha corretamente todos os campos!",
                severity: "error",
            });
            return;
        }

        const user ={
            email,
            password
        }
        try {
            await auth.login(user);
        }
        catch(err: any) {
            setAlert({
                open: true,
                message: `Erro ao criar usuário! HTTP ERROR ${err.response.status} - ${err.response.data.message}`,
                severity: "error"
            });
            return;
        }

        navigate("/all-tasks");
    };

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert({ ...alert, open: false });
      };

    return (
        <div style={styles.wrapper}>
            <div style={styles.column}>
                <IconButton onClick={goBack} style={styles.backButton}>
                    <ArrowBackIcon/>
                </IconButton>
                <img src={Logo} style={styles.logo} alt="TaskApp" />
                <div style={styles.buttonWrapper}>
                    <TextField
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
                    <Button onClick={handleSubmit} variant="contained" size="large" style={styles.button}>
                        Entrar
                    </Button>
                    <Snackbar  open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} variant="filled" severity={alert.severity} sx={{ width: '100%' }}>
                            {alert.message}
                        </Alert>
                    </Snackbar>
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
