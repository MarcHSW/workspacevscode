/* eslint-disable import/no-anonymous-default-export */
import { AppBar, Box, Button, Toolbar, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

export default () => {
  const navigate = useNavigate();

  const [buslinien, setBuslinien] = useState([
    { name: "370", haltestellen: ["sehnde", "rethmar"] },
    { name: "800", haltestellen: ["sehnde", "rethmar"] },
  ]);

  const [haltestellen, setHaltestellen] = useState([
    { name: "370", buslinien: ["sehnde", "rethmar"] },
  ]);

  const [buslinienNameRef, setbuslinienNameRef] = useState();
  const [haltestellenNameRef, sethaltestellenNameRef] = useState();
  const [
    haltestelleZuBuslinieHaltestelleRef,
    sethaltestelleZuBuslinieHaltestelleRef,
  ] = useState();
  const [
    haltestelleZuBuslinieBuslinieRef,
    sethaltestelleZuBuslinieBuslinieRef,
  ] = useState();
  const [newNameRefHaltestelle, setnewNameRefHaltestelle] = useState();
  const [oldNameRefBuslinie, setoldNameRefBuslinie] = useState();
  const [newNameRefBuslinie, setnewNameRefBuslinie] = useState();
  const [buslinieIntoFahrplanBuslinie, setbuslinieIntoFahrplanBuslinie] =
    useState();
  const [oldNameRefHaltestelle, setoldNameRefHaltestelle] = useState();
  const [buslinieIntoFahrplanTime, setbuslinieIntoFahrplanTime] = useState();
  const [
    buslinieIntoFahrplanEndhaltestelle,
    setbuslinieIntoFahrplanEndhaltestelle,
  ] = useState();
  const [fahrplanDeleteRef, setfahrplanDeleteRef] = useState();
  const [buslinieDeleteRef, setbuslinieDeleteRef] = useState();
  const [haltestelleDeleteRef, sethaltestelleDeleteRef] = useState();
  const [addHaltestelleBuslinieRef, setaddHaltestelleBuslinieRef] = useState();
  const [
    addHaltestelleStartHaltestelleRef,
    setaddHaltestelleStartHaltestelleRef,
  ] = useState();
  const [addHaltestelleFahrzeitRef, setaddHaltestelleFahrzeitRef] = useState();
  const [
    addHaltestelleNextHaltestelleRef,
    setaddHaltestelleNextHaltestelleRef,
  ] = useState();

  //Buslinien hinzufügen
  function handleAddBuslinie() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
  
    headers.append('GET', 'POST', 'OPTIONS');

    fetch(
      "http://localhost:8080/bussupervisor/addBuslinie/" + buslinienNameRef,
      {
        method: "POST",
        headers: { headers },
      }
    );
    // console.log(buslinienNameRef);

    // axios.post(
    //   "http://localhost:8080/bussupervisor/addBuslinie/" + buslinienNameRef
    // );
  }

  //Haltestellen hinzufügen
  function handleAddHaltestelle() {
    const name = haltestellenNameRef;
    axios.post(
      "http://localhost:8080/bussupervisor/post/addBuslinie/" +
        haltestellenNameRef
    );
    setHaltestellen((prevHaltestellen) => {
      return [...prevHaltestellen, { name: name, haltestellen: [] }];
    });
    haltestellenNameRef.current.value = null;
  }

  const handleAddHaltestelleToBuslinie = () => {
    axios.post(
      "http://localhost:8080/bussupervisor/addHaltestelle" +
        haltestelleZuBuslinieHaltestelleRef
    );
  };

  const handleRenameHaltestelle = () => {
    let oldHaltestelle = haltestellen.pop(
      haltestellen.find(
        (element) => element.name === oldNameRefHaltestelle.current.value
      )
    );
    oldHaltestelle.name = newNameRefHaltestelle.current.value;
    haltestellen.push(oldHaltestelle.current.value);
  };

  const handleRenameBuslinie = () => {
    axios.post(
      "http://localhost:8080/bussupervisor/addHaltestelle/changeBuslinieName/" +
        oldNameRefBuslinie,
      newNameRefBuslinie
    );
    buslinien
      .find((element) => element.name === oldNameRefBuslinie)
      .name.replace(oldNameRefBuslinie, newNameRefBuslinie);
  };

  const handleBuslinieIntoFahrplan = () => {};

  const handleDeleteFahrplan = () => {
    axios.delete(
      "http://localhost:8080/bussupervisor/deleteFahrplan/" + fahrplanDeleteRef
    );
  };

  const handleDeleteBuslinie = () => {
   
  
     axios.delete(
       "http://localhost:8080/bussupervisor/deleteBuslinie/" + buslinieDeleteRef
     );
  };

  const handleDeleteHaltestelle = () => {
    axios.delete(
      "http://localhost:8080/bussupervisor/deleteHaltestelle/" +
        haltestelleDeleteRef
    );
  };

  const handleaddHaltestelleTo = () => {};

  const columns = ["Id", "Buslinienname"];
  const rows = [
    { id: "6", name: "S6" },
    { id: "7", name: "S7" },
    { id: "2", name: "S2" },
  ];

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
                navigate("/");
              }}
            >
              Zur Kundenansicht wechseln
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <div>
          <h3>Dinge anlegen</h3>
          <Input
            onChange={(e) => setbuslinienNameRef(e.target.value)}
            type="text"
          />
          <Button variant="contained" onClick={handleAddBuslinie}>
            Buslinie anlegen
          </Button>
          <Input
            onChange={(e) => sethaltestellenNameRef(e.target.value)}
            type="text"
          />
          <Button variant="contained" onClick={handleAddHaltestelle}>
            Haltestelle anlegen
          </Button>
        </div>
        <h3>Dinge zu Dingen hinzufügen</h3>
        <Input
          onChange={(e) =>
            sethaltestelleZuBuslinieHaltestelleRef(e.target.value)
          }
          type="text"
        />{" "}
        zu
        <Input
          onChange={(e) => sethaltestelleZuBuslinieBuslinieRef(e.target.value)}
          type="text"
        />
        <Button variant="contained" onClick={handleAddHaltestelleToBuslinie}>
          Haltestelle zu Buslinie hinzufügen
        </Button>
        <div>
          <Input
            onChange={(e) => setoldNameRefHaltestelle(e.target.value)}
            type="text"
          />{" "}
          zu
          <Input
            onChange={(e) => setnewNameRefHaltestelle(e.target.value)}
            type="text"
          />
          <Button variant="contained" onClick={handleRenameHaltestelle}>
            Haltestelle umbenennen
          </Button>
        </div>
        <Input
          onChange={(e) => setoldNameRefBuslinie(e.target.value)}
          type="text"
        />{" "}
        zu
        <Input
          onChange={(e) => setnewNameRefBuslinie(e.target.value)}
          type="text"
        />
        <Button variant="contained" onClick={handleRenameBuslinie}>
          Buslinie umbenennen
        </Button>
        <div>
          Buslinie
          <Input
            onChange={(e) => setbuslinieIntoFahrplanBuslinie(e.target.value)}
            type="text"
          />
          startet um
          <Input
            onChange={(e) => setbuslinieIntoFahrplanTime(e.target.value)}
            type="text"
          />
          Uhr in Richtung Endhaltestelle
          <Input
            onChange={(e) =>
              setbuslinieIntoFahrplanEndhaltestelle(e.target.value)
            }
            type="text"
          />
          <Button variant="contained" onClick={handleBuslinieIntoFahrplan}>
            Buslinie zu Fahrplan hinzufügen
          </Button>
        </div>
        <h3>Dinge löschen</h3>
        <Input
          onChange={(e) => setfahrplanDeleteRef(e.target.value)}
          type="text"
        />
        <Button variant="contained" onClick={handleDeleteFahrplan}>
          Fahrplan löschen
        </Button>
        <Input
          onChange={(e) => setbuslinieDeleteRef(e.target.value)}
          type="text"
        />
        <Button variant="contained" onClick={handleDeleteBuslinie}>
          Buslinie löschen
        </Button>
        <Input
          onChange={(e) => sethaltestelleDeleteRef(e.target.value)}
          type="text"
        />
        <Button variant="contained" onClick={handleDeleteHaltestelle}>
          Haltestelle löschen
        </Button>
      </div>
      <div>
        <h3>Haltestelle in eine Buslinie einfügen</h3>
        Haltestelle:
        <Input
          onChange={(e) => setaddHaltestelleStartHaltestelleRef(e.target.value)}
          type="text"
        />
        Buslinie:
        <Input
          onChange={(e) => setaddHaltestelleBuslinieRef(e.target.value)}
          type="text"
        />
        Fahrzeit bis zur nächsten Haltestelle:
        <Input
          onChange={(e) => setaddHaltestelleFahrzeitRef(e.target.value)}
          type="text"
        />
        nächste Haltestelle:
        <Input
          onChange={(e) => setaddHaltestelleNextHaltestelleRef(e.target.value)}
          type="text"
        />
        <Button variant="contained" onClick={handleaddHaltestelleTo}>
          hinzufügen
        </Button>
      </div>
      <BasicTable columns={columns} rows={rows} />
    </>
  );
};
