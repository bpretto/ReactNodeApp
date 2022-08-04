import { Card, CardContent, IconButton, List, Typography } from "@mui/material";
import Logo from "../../images/logo.png";
import { Add, Delete, Edit, Logout } from "@mui/icons-material";
import auth from "../../auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTask } from "../../hooks/useTask";


export const AllTasks = () => {
    const { tasks, getAllTasks, deleteTask } = useTask();
    const navigate = useNavigate()

    const logout = () => {
        auth.logout();
        navigate("/")
    }

    const navigateToCreateTask = () => {
        navigate("/create-task")
    }

    useEffect(() => {
        getAllTasks();
    }, [getAllTasks]);

    return (
        <div style={styles.wrapper}>
            <IconButton onClick={logout} style={styles.logoutButton}>
                <Logout/>
            </IconButton>
            <div style={styles.column}>
                <List style={styles.list}>
                <img src={Logo} style={styles.logo} alt="TaskApp" />
                <div style={styles.buttonWrapper}>
                    <Typography style={styles.heading} variant="h5" gutterBottom component="div">
                        Minhas Tasks:
                    </Typography>
                    <IconButton onClick={navigateToCreateTask} style={styles.createButton}>
                        <Add />
                    </IconButton>
                </div>
                    {tasks.map((task) => (
                        <Card key={task.id} style={styles.card}>
                            <CardContent>
                                <div style={styles.cardHeader}>
                                    <Typography variant="h5" gutterBottom component="div">
                                        {task.title}
                                    </Typography>
                                    <div>
                                        <IconButton >
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => deleteTask(task.id)}>
                                            <Delete />
                                        </IconButton>
                                    </div>
                                </div>
                                <Typography variant="subtitle2" gutterBottom component="div">
                                    Até {task.deadline}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {task.description}
                                </Typography>
                            </CardContent>
                        </Card>      
                    ))}
                </List>
            </div>
        </div>
    )
}

const styles = {
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: '100%',
        overflow: 'auto'
    },
    column: {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50vw",
        marginTop: "2vh",
        marginBottom: "2vh"
    },
    logoutButton: {
        marginRight: "20px",
        marginTop: "20px",
        position: "absolute" as "absolute",
        top: "0",
        right: "0",
        zIndex: "1",
        backgroundColor: "#fc0fc1"
    },
    list: {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        justifyContent: "center",
        width: "25vw",
    },
    logo: {
        width: "25vw",
    },
    heading: {
        fontWeight: "bold",
        color: "#fff",
    },
    buttonWrapper: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "25vw",
    },
    createButton: {
        backgroundColor: "#fc0fc1"
    },
    card: {
        marginTop: "20px",
        width: "100%",
        backgroundColor: "#fc0fc1",

    },
    cardHeader: {
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "top",
        justifyContent: "space-between",
    },
}
