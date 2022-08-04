import { Button, IconButton, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const CreateTask= () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
      );
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
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
                        style={styles.textField}
                        label="Título"
                        variant="filled"
                        value={title}
                        onChange={title => setTitle(title.target.value)}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => <TextField fullWidth variant="filled" color="secondary" {...props} />}
                            label="Concluir até..."
                            value={dateTime}
                            onChange={(dateTime) => {
                                setDateTime(dateTime);
                            }}
                        />
                    </LocalizationProvider>
                    <TextField
                        type="text"
                        color="secondary"
                        fullWidth
                        style={styles.textField}
                        label="Descrição"
                        variant="filled"
                        multiline
                        rows={4}
                        inputProps={{ maxLength: 400 }}
                        value={description}
                        onChange={description => setDescription(description.target.value)}
                    />
                </div>
                    <Button variant="contained" size="large" style={styles.button}>
                        Criar
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
