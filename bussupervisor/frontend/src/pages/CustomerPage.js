import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicTable from "../components/BasicTable";

export default () => {
    const navigate = useNavigate();

    const columns = ["Id", "Buslinienname"];
    const rows = [{ id: "6", name: "S6" }, { id: "7", name: "S7" }, { id: "2", name: "S2" }];

    return (
        <>
            <Box className="header-box" sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <div style={{ flexGrow: 1 }} />
                        <Button variant="contained" color="secondary" onClick={() => {
                            navigate("/employee");
                        }}>Zur Mitarbeiteransicht wechseln</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <BasicTable columns={columns} rows={rows} />
        </>
    )
}