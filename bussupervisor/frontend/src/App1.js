import React, { useState, useRef, useEffect } from "react";
import Table from "./Table";
import axios from "axios";
import "./App.css";

function Buslinien() {
  //States initialisieren
  const [openBuslinieTable, setOpenBuslinieTable] = useState(true);
  const [openHaltestellenTable, setOpenHaltestellenTable] = useState(false);
  const [openMitarbeiteransicht, setOpenMitarbeiteransicht] = useState(false);
  const [openKundenansicht, setOpenKundenansicht] = useState(true);

  const [buslinien, setBuslinien] = useState([
    { name: "370", haltestellen: ["sehnde", "rethmar"] },
    { name: "800", haltestellen: ["sehnde", "rethmar"] },
  ]);

  const [haltestellen, setHaltestellen] = useState([
    { name: "370", buslinien: ["sehnde", "rethmar"] },
  ]);

  //Refs initialisieren
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
  const FahrplanDeleteRef = useRef();
  const BuslinieDeleteRef = useRef();
  const buslinieWhoVisitHaltestelleRef = useRef();


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

  const handleAddHaltestelleToBuslinie = () => {};

  const handleRenameHaltestelle = () => {
    let oldHaltestelle = haltestellen.pop(
      haltestellen.find((element) => element.name === oldNameRefHaltestelle)
    );
    oldHaltestelle.name = newNameRefHaltestelle;
    haltestellen.push(oldHaltestelle);
  };

  const handleRenameBuslinie = () => {
    //let oldBuslinie = buslinien.find(element => element.name ==  oldNameRefBuslinie).name.replace(newNameRefBuslinie);
    //oldBuslinie.name.replace(newNameRefBuslinie);

    oldNameRefBuslinie.current.value = buslinien.find(
      (element) => element.name === oldNameRefBuslinie
    );
    newNameRefBuslinie.current.value = null;
  };

  const handleBuslinieIntoFahrplan = () => {

  }

  const handleDeleteFahrplan = () => {

  }

  const handleDeleteBuslinie = () => {

  }

  const handleBuslinieWhoVisitsHaltestelle = (haltestlle) =>{
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
    axios
      .get("http://localhost:8080/bussupervisor/getBuslinieWhoVisitsHaltestelle/" + haltestlle)
      .then((res) => {
        return (
        <div>
          <Table columns={columns} data={[res.data]} tableLayout="auto"/>
        </div>
      )
    });
  }

  const changeToKundenansicht = () => {
    setOpenKundenansicht(true);
    setOpenMitarbeiteransicht(false);
  };
  const changeToMitarbeiteransicht = () => {
    setOpenKundenansicht(false);
    setOpenMitarbeiteransicht(true);
  };

  const changeToHaltestellenTable = () => {
    setOpenHaltestellenTable(true);
    setOpenBuslinieTable(false);
  };

  const changeToBuslinienTable = () => {
    setOpenHaltestellenTable(false);
    setOpenBuslinieTable(true);
  };

  return (
    <div>
      {/*Mitarbeiter- und Kundenansichtbutton*/}
      <header className="App-header">
        <button onClick={changeToMitarbeiteransicht}>Mitarbeiteransicht</button>
        <button onClick={changeToKundenansicht}>Kundenansicht</button>
        <div>
          <button onClick={changeToBuslinienTable}>
            Alle Buslinien anzeigen
          </button>
          <button onClick={changeToHaltestellenTable}>
            Alle Haltestellen anzeigen
          </button>
        </div>
      </header>
      {/*Die Mitarbeiteransicht*/}
      {openMitarbeiteransicht && (
        <div>
          <div>
            <h3>Dinge anlegen</h3>
            <input ref={buslinienNameRef} type="text" />
            <button onClick={handleAddBuslinie}>Buslinie anlegen</button>
            <input ref={haltestellenNameRef} type="text" />
            <button onClick={handleAddHaltestelle}>Haltestelle anlegen</button>
          </div>
          <h3>Dinge zu Dingen hinzufügen</h3>
          <input ref={haltestelleZuBuslinieHaltestelleRef} type="text" /> zu
          <input ref={haltestelleZuBuslinieBuslinieRef} type="text" />
          <button onClick={handleAddHaltestelleToBuslinie}>
            Haltestelle zu Buslinie hinzufügen
          </button>
          <div>
            <input ref={oldNameRefHaltestelle} type="text" /> zu
            <input ref={newNameRefHaltestelle} type="text" />
            <button onClick={handleRenameHaltestelle}>
              Haltestelle umbenennen
            </button>
          </div>
          <input ref={oldNameRefBuslinie} type="text" /> zu
          <input ref={newNameRefBuslinie} type="text" />
          <button onClick={handleRenameBuslinie}>Buslinie umbenennen</button>
          <div>
            Buslinie
          <input ref={buslinieIntoFahrplanBuslinie} type="text" /> 
          startet um 
          <input ref={buslinieIntoFahrplanTime} type="text" />
          Uhr in Richtung Endhaltestelle
          <input ref={buslinieIntoFahrplanEndhaltestelle} type="text" />
          <button onClick={handleBuslinieIntoFahrplan}>Buslinie zu Fahrplan hinzufügen</button>
          </div>
          <h3>Dinge löschen</h3>
          <input ref={FahrplanDeleteRef} type="text" />
          <button onClick={handleDeleteFahrplan}>Fahrplan löschen</button>
          <input ref={BuslinieDeleteRef} type="text" />
          <button onClick={handleDeleteBuslinie}>Buslinie löschen</button>
        </div>
      )}

      {/* Die Kundenansicht*/}
      {openKundenansicht && (
        <div>
          <input ref={buslinieWhoVisitHaltestelleRef} type="text" />
          <button onClick={handleBuslinieWhoVisitsHaltestelle}>Buslinie anzeigen</button>
          <input ref={haltestellenNameRef} type="text" />
          <button onClick={changeToHaltestellenTable}>
            Haltestelle anzeigen
          </button>
        </div>
      )}
      <h2>Tabelle</h2>
      {openBuslinieTable && <div>{buslinienTable}</div>}
      {openHaltestellenTable && <div>{HaltestellenTable}</div>}
    </div>
  );
}

export default Buslinien;
