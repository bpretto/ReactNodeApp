import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";

export const Home = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    }

    const navigateToSignup = () => {
        navigate("/signup");
    }

    return (
        <div style={styles.wrapper}>
            <div style={styles.column}>
                <img src={Logo} style={styles.logo} alt="TaskApp" />
                <div style={styles.buttonWrapper}>
                <Button onClick={navigateToSignup} variant="contained" size="large" style={styles.button}>
                    Cadastrar
                </Button>
                <Button onClick={navigateToLogin} variant="contained" size="large" style={styles.button}>
                    Entrar
                </Button>
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
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "center",
        width: "30vw",
    },
    button: {
        backgroundColor: "#fc0fc1",
        color: "#fff",
        width: "40%",
        margin: "10px",
    },
}
