/* eslint-disable import/no-anonymous-default-export */
import { AppBar, Box, Button, Toolbar, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import Table from "C:/HSW/Workspaces/Bussupervisor2/workspacevscode/bussupervisor/frontend/src/Table";


export default () => {
    const navigate = useNavigate();


    const [buslinien, setBuslinien] = useState([
        { name: "370", haltestellen: ["sehnde", "rethmar"] },
        { name: "800", haltestellen: ["sehnde", "rethmar"] },
      ]);
    
      const [haltestellen, setHaltestellen] = useState([
        { name: "370", buslinien: ["sehnde", "rethmar"] },
      ]);

    const buslinienNameRef = useRef();
    const haltestellenNameRef = useRef();
    const haltestelleZuBuslinieHaltestelleRef = useRef();
    const haltestelleZuBuslinieBuslinieRef = useRef();
    const oldNameRefHaltestelle = useRef();
    const newNameRefHaltestelle = useRef();
    const oldNameRefBuslinie = useRef();
    const newNameRefBuslinie = useRef();
    const buslinieIntoFahrplanBuslinie = useRef();
    const buslinieIntoFahrplanTime = useRef();
    const buslinieIntoFahrplanEndhaltestelle = useRef();
    const fahrplanDeleteRef = useRef();
    const buslinieDeleteRef = useRef();
    const haltestelleDeleteRef = useRef();


    //Buslinien hinzufügen
  function handleAddBuslinie() {
    const name = buslinienNameRef.current.value;

    setBuslinien((prevBuslinien) => {
      return [...prevBuslinien, { name: name, haltestellen: [] }];
    });
    buslinienNameRef.current.value = null;
  }

  //Haltestellen hinzufügen
  function handleAddHaltestelle() {
    const name = haltestellenNameRef.current.value;

    setHaltestellen((prevHaltestellen) => {
      return [...prevHaltestellen, { name: name, haltestellen: [] }];
    });
    haltestellenNameRef.current.value = null;
    axios.post("http://localhost:8080/bussupervisor/post/addBuslinie/" + haltestelleDeleteRef.current.value)
  }

  //Buslinien aus Datenbank lesen
  const fetchBuslinien = () => {
    axios
      .get("http://localhost:8080/bussupervisor/get/HannoverHBF")
      .then((res) => {
        console.log(res);
        setBuslinien(res.data);
      });
  };

  useEffect(() => {
    fetchBuslinien();
  }, []);

  //Haltestellen aus Datenbank lesen
  const fetchHaltestellen = () => {
    axios
      .get("http://localhost:8080/bussupervisor/get/HannoverHBF")
      .then((res) => {
        console.log(res);
        setBuslinien(res.data);
      });
  };

  useEffect(() => {
    fetchHaltestellen();
  }, []);

  const buslinienTable = buslinien.map((buslinien, index) => {
    const columns = [
      {
        heading: "Name",
        property: "name",
      },
      {
        heading: "Haltestellen",
        property: "haltestellen",
      },
    ];
    return (
      <div key={index}>
        <Table columns={columns} data={[buslinien]} tableLayout="auto" />
      </div>
    );
  });

  const HaltestellenTable = haltestellen.map((haltestellen, index) => {
    const columns = [
      {
        heading: "Name",
        property: "name",
      },
      {
        heading: "Buslinien",
        property: "buslinien",
      },
    ];
    return (
      <div key={index}>
        <Table columns={columns} data={[haltestellen]} tableLayout="auto" />
      </div>
    );
  });

  const handleAddHaltestelleToBuslinie = () => {
    axios
    .post("http://localhost:8080/bussupervisor/addHaltestelle", );
  };

  const handleRenameHaltestelle = () => {
    let oldHaltestelle = haltestellen.pop(
      haltestellen.find((element) => element.name === oldNameRefHaltestelle)
    );
    oldHaltestelle.name = newNameRefHaltestelle;
    haltestellen.push(oldHaltestelle);
  };

  const handleRenameBuslinie = () => {
    axios
    .post("http://localhost:8080/bussupervisor/addHaltestelle/changeBuslinieName/" + oldNameRefBuslinie.current.value, newNameRefBuslinie.current.value);
    buslinien.find(element => element.name ===  oldNameRefBuslinie.current.value).name.replace(oldNameRefBuslinie.current.value, newNameRefBuslinie.current.value);

    
    
  };

  const handleBuslinieIntoFahrplan = () => {

  }

  const handleDeleteFahrplan = () => {
    axios
    .delete("http://localhost:8080/bussupervisor/deleteFahrplan/"+ fahrplanDeleteRef.current.value);
  }

  const handleDeleteBuslinie = () => {
    axios
    .delete("http://localhost:8080/bussupervisor/deleteBuslinie/"+ buslinieDeleteRef.current.value);
  }

  const handleDeleteHaltestelle = () =>{
    axios
    .delete("http://localhost:8080/bussupervisor/deleteHaltestelle/"+ haltestelleDeleteRef.current.value);
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
                            navigate("/");
                        }}>Zur Kundenansicht wechseln</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
          <div>
            <h3>Dinge anlegen</h3>
            <Input ref={buslinienNameRef} type="text" />
            <Button variant="contained" onClick={handleAddBuslinie}>Buslinie anlegen</Button>
            <Input ref={haltestellenNameRef} type="text" />
            <Button variant="contained" onClick={handleAddHaltestelle}>Haltestelle anlegen</Button>
          </div>
          <h3>Dinge zu Dingen hinzufügen</h3>
          <Input ref={haltestelleZuBuslinieHaltestelleRef} type="text" /> zu
          <Input ref={haltestelleZuBuslinieBuslinieRef} type="text" />
          <Button variant="contained" onClick={handleAddHaltestelleToBuslinie}>
            Haltestelle zu Buslinie hinzufügen
          </Button>
          <div>
            <Input ref={oldNameRefHaltestelle} type="text" /> zu
            <Input ref={newNameRefHaltestelle} type="text" />
            <Button variant="contained" onClick={handleRenameHaltestelle}>
              Haltestelle umbenennen
            </Button>
          </div>
          <Input ref={oldNameRefBuslinie} type="text" /> zu
          <Input ref={newNameRefBuslinie} type="text" />
          <Button variant="contained" onClick={handleRenameBuslinie}>Buslinie umbenennen</Button>
          <div>
            Buslinie
          <Input ref={buslinieIntoFahrplanBuslinie} type="text" /> 
          startet um 
          <Input ref={buslinieIntoFahrplanTime} type="text" />
          Uhr in Richtung Endhaltestelle
          <Input ref={buslinieIntoFahrplanEndhaltestelle} type="text" />
          <Button variant="contained" onClick={handleBuslinieIntoFahrplan}>Buslinie zu Fahrplan hinzufügen</Button>
          </div>
          <h3>Dinge löschen</h3>
          <Input ref={fahrplanDeleteRef} type="text" />
          <Button variant="contained" onClick={handleDeleteFahrplan}>Fahrplan löschen</Button>
          <Input ref={buslinieDeleteRef} type="text" />
          <Button variant="contained" onClick={handleDeleteBuslinie}>Buslinie löschen</Button>
          <Input ref={haltestelleDeleteRef} type="text" />
          <Button variant="contained" onClick={handleDeleteHaltestelle}>Haltestelle löschen</Button>
        </div>
        <BasicTable columns={columns} rows={rows} />
        </>
    )
}