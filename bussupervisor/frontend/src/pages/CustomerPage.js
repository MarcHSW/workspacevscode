/* eslint-disable import/no-anonymous-default-export */
import { AppBar, Box, Button, Toolbar, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

export default () => {
  const navigate = useNavigate();

  const [buslinieWhoVisitHaltestelleRef, setbuslinieWhoVisitHaltestelleRef] =
    useState();
  const [haltestellenWhoVisitBuslinieRef, sethaltestellenWhoVisitBuslinieRef] =
    useState();
  const [halteStelletoBuslinieRef, sethalteStelletoBuslinieRef] = useState();
  const [buslinieToHaltestelleRef, setbuslinieToHaltestelleRef] = useState();
  const [FahrplanToShowHaltestelleRef, setFahrplanToShowHaltestelleRef] = useState();
  const [FahrplanToShowTimeRef, setFahrplanToShowTimeRef] = useState();

  let columns = ["Name", "Id", "Buslinien"];
  let rows = [
    { id: "6", name: "S6" },
    { id: "7", name: "S7" },
    { id: "2", name: "S2" },
  ];


  const handleBuslinieWhoVisitsHaltestelle = () => {
    axios
      .get(
        "http://localhost:8080/bussupervisor/getBuslinieWhoVisitsHaltestelle/" +
          buslinieWhoVisitHaltestelleRef
      )
      .then((res) => {
        console.log(res)
        columns = ["Name", "Id", "Buslinien"];
        rows = res.data
      });
  };

  const handleHaltestellenWhoVisitBuslinie = () => {
    axios
      .get(
        "http://localhost:8080/bussupervisor/getHaltestellenFromBuslinie/" +
          haltestellenWhoVisitBuslinieRef
      )
      .then((res) => {
        console.log(res)
        columns = ["Name", "Id", "Haltestelle"];
        rows = res.data
      });
  };
  

  const handleShowFahrplan = () => {
    axios
      .get(
        "http://localhost:8080/bussupervisor/getFahrplanFuerHaltestelle/}" +
          FahrplanToShowHaltestelleRef + "/" + FahrplanToShowTimeRef
      )
      .then((res) => {
        console.log(res)
       columns = ["Name", "Abfahrtszeit", "Haltestelle"];
       rows = res.data
      })
  };


  return (
    <>
      <Box className="header-box" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div style={{ flexGrow: 1 }} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate("/employee");
              }}
            >
              Zur Mitarbeiteransicht wechseln
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        Buslinien an Haltestelle:
        <Input
          onChange={(e) => setbuslinieWhoVisitHaltestelleRef(e.target.value)}
          type="text"
        />
        <Button
          variant="contained"
          onClick={handleBuslinieWhoVisitsHaltestelle}
        >
          anzeigen
        </Button>
        Haltestellen von Buslinie:
        <Input
          onChange={(e) => sethaltestellenWhoVisitBuslinieRef(e.target.value)}
          type="text"
        />
        <Button
          variant="contained"
          onClick={handleHaltestellenWhoVisitBuslinie}
        >
          anzeigen
        </Button>
        Fahrplan der Haltestelle:
        <Input
          onChange={(e) => setFahrplanToShowHaltestelleRef(e.target.value)}
          type="text"
        />
        zur Uhrzeit:
         <Input
          onChange={(e) => setFahrplanToShowTimeRef(e.target.value)}
          type="text"
        />
        
        <Button variant="contained" onClick={handleShowFahrplan}>
          anzeigen
        </Button>
        <BasicTable columns={columns} rows={rows} />
      </div>
    </>
  );
};
