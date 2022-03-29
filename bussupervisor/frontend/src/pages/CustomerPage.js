/* eslint-disable import/no-anonymous-default-export */
import { AppBar, Box, Button, Toolbar, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

export default () => {
    const navigate = useNavigate();

    const buslinieWhoVisitHaltestelleRef = useRef();
    const haltestellenWhoVisitBuslinieRef = useRef();
    const halteStelletoBuslinieRef = useRef();
    const buslinieToHaltestelleRef = useRef();
    const FahrplanToShowRef = useRef();


    const handleBuslinieWhoVisitsHaltestelle = () =>{
        const columns = ["Name", "Id", "Buslinien"];
          axios
            .get("http://localhost:8080/bussupervisor/getBuslinieWhoVisitsHaltestelle/" + buslinieWhoVisitHaltestelleRef)
            .then((res) => {
              return (
              <div>
                <BasicTable columns={columns} rows={res.data}/>
              </div>
            )
          });
    }

    const handleHaltestellenWhoVisitBuslinie = () =>{
      const columns = ["Name", "Id", "Buslinien"];
        axios
          .get("http://localhost:8080/bussupervisor/getBuslinieWhoVisitsHaltestelle/" + haltestellenWhoVisitBuslinieRef)
          .then((res) => {
            return (
            <div>
              <BasicTable columns={columns} rows={res.data}/>
            </div>
          )
        });
  }

  const handleArrivaltimeToHaltestelleFromBuslinie = () =>{

  }

  const handleShowFahrplan = () => {

  }

  

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
            <div>
          Buslinien an Haltestelle:
          <Input  ref={buslinieWhoVisitHaltestelleRef} type="text" />
          <Button variant="contained" onClick={handleBuslinieWhoVisitsHaltestelle}>anzeigen</Button>
          Haltestellen von Buslinie:
          <Input ref={haltestellenWhoVisitBuslinieRef} type="text" />
          <Button variant="contained" onClick={handleHaltestellenWhoVisitBuslinie}>anzeigen</Button>
          Ankunftszeiten der Buslinie:
          <Input ref={buslinieToHaltestelleRef} type="text" />
          an der Haltestelle:
          <Input ref={halteStelletoBuslinieRef} type="text" />
          <Button variant="contained" onClick={handleArrivaltimeToHaltestelleFromBuslinie}>anzeigen</Button>
          Fahrplan:
          <Input ref={FahrplanToShowRef} type="text" />
          <Button variant="contained" onClick={handleShowFahrplan}>anzeigen</Button>
        </div>
            <BasicTable columns={columns} rows={rows} />
        </>
    )
}