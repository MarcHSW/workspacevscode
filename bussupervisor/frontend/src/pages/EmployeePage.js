import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    return (
        <>
            <Box className="header-box" sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <div style={{ flexGrow: 1 }} />
                        <Button variant="contained" color="secondary" onClick={() => {
                            navigate("/");
                        }}>Zur Kundenansicht wechseln</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}