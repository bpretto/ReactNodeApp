import { Alert, Button, IconButton, Snackbar, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from "../../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { SyntheticEvent, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useTask } from "../../hooks/useTask";
import { ITask } from "../../interfaces";

export const UpdateTask= () => {
    const { state } = useLocation();
    const { task } = state as { task: ITask };
    const { updateTask } = useTask();
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [deadline, setDeadline] = useState<Date | null>(task.deadline);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "info" as "info" | "success" | "warning" | "error"
    });
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }  
        setAlert({ ...alert, open: false });
      };

    const handleSubmit = () => {
        if (
            title.length === 0
            || description.length === 0
            || deadline === null
        ) {
            setAlert({
                open: true,
                message: "Preencha corretamente todos os campos!",
                severity: "error",
            });
            return;
        }

        try {
            const updatedTask = {
                ...task,
                title,
                description,
                deadline,
            };
            updateTask(updatedTask);
            navigate("/all-tasks");
        }
        catch(err: any) {
            setAlert({
                open: true,
                message: `Erro ao criar usu??rio! HTTP ERROR ${err.response.status} - ${err.response.data.message}`,
                severity: "error"
            });
            return;
        }
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
                        type="text"
                        color="secondary"
                        fullWidth
                        required
                        style={styles.textField}
                        label="T??tulo"
                        variant="filled"
                        value={title}
                        onChange={title => setTitle(title.target.value)}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => <TextField required fullWidth variant="filled" color="secondary" {...props} />}
                            label="Concluir at??..."
                            inputFormat="DD/MM/YYYY HH:mm"
                            value={deadline}
                            onChange={(deadline) => {
                                setDeadline(deadline);
                            }}
                        />
                    </LocalizationProvider>
                    <TextField
                        required
                        type="text"
                        color="secondary"
                        fullWidth
                        style={styles.textField}
                        label="Descri????o"
                        variant="filled"
                        multiline
                        rows={4}
                        inputProps={{ maxLength: 400 }}
                        value={description}
                        onChange={description => setDescription(description.target.value)}
                    />
                </div>
                <Button onClick={handleSubmit} variant="contained" size="large" style={styles.button}>
                    Criar
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
