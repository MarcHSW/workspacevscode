/* eslint-disable import/no-anonymous-default-export */
import { AppBar, Box, Button, Toolbar, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BuslinienTable from "../components/BuslinienTable";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import HaltestellenTable from "../components/HaltestellenTable";
import FahrplanTable from "../components/FahrplanTable";
import FahrplanIdTable from "../components/FahrplanIdTable";

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

  const [showBuslinienTable, setShowBuslinienTable] = useState(false);
  const [showHaltestellenTable, setShowHaltestelleTable] = useState(false);
  const [showFahrplanTable, setShowFahrplanTable] = useState(false);

  const [tableData, setTableData] = useState([]);



//Holt Buslinien zu Haltestelle
  const handleBuslinieWhoVisitsHaltestelle = () => {
    setShowHaltestelleTable(false);
    setShowFahrplanTable(false);
    axios
      .get(
        "http://localhost:8080/bussupervisor/getBuslinieWhoVisitsHaltestelle/" +
          buslinieWhoVisitHaltestelleRef
      )
      .then((res) => {
        setTableData(res.data);
        setShowBuslinienTable(true);
      });
  };

  //Holt Haltestelle zu Buslinie
  const handleHaltestellenWhoVisitBuslinie = () => {
    setShowBuslinienTable(false);
    setShowFahrplanTable(false);
    axios
      .get(
        "http://localhost:8080/bussupervisor/getHaltestellenFromBuslinie/" +
          haltestellenWhoVisitBuslinieRef
      )
      .then((res) => {
        setTableData(res.data);
        setShowHaltestelleTable(true);
      });
  };
  
//Holt einen Fahrplan ab einer gewissen Zeit
  const handleShowFahrplan = () => {
    setShowHaltestelleTable(false);
    setShowBuslinienTable(false);
    axios
      .get(
        "http://localhost:8080/bussupervisor/getFahrplanFuerHaltestelle/" +
          FahrplanToShowHaltestelleRef + "/" + FahrplanToShowTimeRef
      )
      .then((res) => {
        setTableData(res.data);
        setShowFahrplanTable(true);
      })
  };

  //Zeigt alle Haltestellen
  const handleShowAllHaltestellen = () =>{
    setShowBuslinienTable(false);
    setShowFahrplanTable(false);
    axios({
      method: "get",
      url: "http://localhost:8080/bussupervisor/getHaltestellen"
    }).then((response) =>{
      setTableData(response.data);
      setShowHaltestelleTable(true);
      if(response.status<300){
      }
    });
  }

  //Zeigt alle Buslinien
  const handleShowAllBuslinien = () =>{
    setShowFahrplanTable(false);
    setShowHaltestelleTable(false);
    axios({
      method: "get",
      url: "http://localhost:8080/bussupervisor/getBuslinien"
    }).then((response) =>{
      
      setTableData(response.data);
      setShowBuslinienTable(true);
      if(response.status<300){
      }
    });
  }


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
          placeholder={"Haltestellenname"}
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
          placeholder={"Buslinienname"}
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
          placeholder={"Haltestellenname"}
        />
        zur Uhrzeit:
         <Input
          onChange={(e) => setFahrplanToShowTimeRef(e.target.value)}
          type="text"
          placeholder={"jjjj-mm-dd hh:mm:ss"}
        />
        
        <Button variant="contained" onClick={handleShowFahrplan}>
          anzeigen
        </Button>

        <h3>Alle Einträge anzeigen lassen</h3>
        <Button variant="contained" onClick={handleShowAllHaltestellen}>
          Haltestellen anzeigen
        </Button>
        <Button variant="contained" onClick={handleShowAllBuslinien}>
          Buslinien anzeigen
        </Button>
        {showBuslinienTable && <BuslinienTable rows={tableData} />}
        {showHaltestellenTable && <HaltestellenTable rows={tableData} />}
        {showFahrplanTable && <FahrplanTable rows={tableData}/>}
      </div>
    </>
  );
};
