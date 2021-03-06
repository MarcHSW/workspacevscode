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

  const [success, setSuccess] = useState(true);

  const [buslinienNameRef, setbuslinienNameRef] = useState();
  const [haltestellenNameRef, sethaltestellenNameRef] = useState();
  const [
    deleteHaltestelleFromBuslinieHaltestelleRef,
    setDeleteHaltestelleFromBuslinieHaltestelleRef,
  ] = useState();
  const [
    deleteHaltestelleFromBuslinieBuslinieRef,
    setDeleteHaltestelleFromBuslinieBuslinieRef,
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
  const [buslinieIntoFahrplanFahrplan, setbuslinieIntoFahrplanFahrplan] =
    useState();
  const [tableData, setTableData] = useState([]);
  const [fahrplanDeleteRef, setfahrplanDeleteRef] = useState();
  const [buslinieDeleteRef, setbuslinieDeleteRef] = useState();
  const [haltestelleDeleteRef, sethaltestelleDeleteRef] = useState();
  const [addHaltestelleBuslinieRef, setaddHaltestelleBuslinieRef] = useState();
  const [
    addHaltestelleStartHaltestelleRef,
    setaddHaltestelleStartHaltestelleRef,
  ] = useState();
  const [addHaltestelleAnkunftszeitRef, setaddHaltestelleAnkunftszeitRef] =
    useState();
  const [addHaltestelleAbfahrtszeitRef, setaddHaltestelleAbfahrtszeitRef] =
    useState();
  const [
    addHaltestelleNextHaltestelleRef,
    setaddHaltestelleNextHaltestelleRef,
  ] = useState();

  const [showBuslinienTable, setShowBuslinienTable] = useState(false);
  const [showHaltestellenTable, setShowHaltestelleTable] = useState(false);
  const [showFahrplanTable, setShowFahrplanTable] = useState(false);

  //Buslinien hinzuf??gen
  function handleAddBuslinie() {
    setSuccess(false);
    axios({
      method: "post",
      url: "http://localhost:8080/bussupervisor/addBuslinie",
      data: {
        name: buslinienNameRef,
      },
    }).then((response) => {
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  }

  //Haltestellen hinzuf??gen
  function handleAddHaltestelle() {
    setSuccess(false);
    axios({
      method: "post",
      url: "http://localhost:8080/bussupervisor/addHaltestelle",
      data: {
        name: haltestellenNameRef,
      },
    }).then((response) => {
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  }

  //Haltestelle von Buslinie l??schen
  const handleDeleteHaltestelleFromBuslinie = () => {
    setSuccess(false);
    axios({
      method: "delete",
      url:
        "http://localhost:8080/bussupervisor/deleteHaltestelleFromBuslinie/" +
        deleteHaltestelleFromBuslinieHaltestelleRef +
        "/" +
        deleteHaltestelleFromBuslinieBuslinieRef,
    }).then((response) => {
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  };

  //??ndert einen Haltestellen Namen
  const handleChangeHaltestelleName = () => {
    setSuccess(false);
    axios({
      method: "put",
      url:
        "http://localhost:8080/bussupervisor/changeHaltestelleName/" +
        oldNameRefHaltestelle +
        "?updatedName=" +
        newNameRefHaltestelle,
    }).then((response) => {
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  };

  //??ndert einen Buslinien Namen
  const handleChangeBuslinieName = () => {
    setSuccess(false);
    axios({
      method: "put",
      url:
        "http://localhost:8080/bussupervisor/changeBuslinieName/" +
        oldNameRefBuslinie +
        "?updatedName=" +
        newNameRefBuslinie,
    }).then((response) => {
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  };

  //F??gt Fahrplan zu Buslinie hinzu
  const handleAddBuslinieIntoFahrplan = () => {
    setSuccess(false);
    axios({
      method: "post",
      url:
        "http://localhost:8080/bussupervisor/addFahrplan/" +
        buslinieIntoFahrplanEndhaltestelle +
        "/" +
        buslinieIntoFahrplanBuslinie +
        "/" +
        buslinieIntoFahrplanTime 
    }).then((response) => {
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  };

  //L??scht einen Fahrplan
  const handleDeleteFahrplan = () => {
    setSuccess(false);
    axios
      .delete(
        "http://localhost:8080/bussupervisor/deleteFahrplan/" +
          fahrplanDeleteRef
      )
      .then((response) => {
        if (response.status < 300) {
          setSuccess(true);
        }
      });
  };

  //L??scht eine Buslinie
  const handleDeleteBuslinie = () => {
    setSuccess(false);
    axios
      .delete(
        "http://localhost:8080/bussupervisor/deleteBuslinie/" +
          buslinieDeleteRef
      )
      .then((response) => {
        if (response.status < 300) {
          setSuccess(true);
        }
      });
  };

  //L??scht eine Haltestelle
  const handleDeleteHaltestelle = () => {
    setSuccess(false);
    axios
      .delete(
        "http://localhost:8080/bussupervisor/deleteHaltestelle/" +
          haltestelleDeleteRef
      )
      .then((response) => {
        if (response.status < 300) {
          setSuccess(true);
        }
      });
  };

  //F??gt eine Haltestelle zu einer Buslinie hinzu
  const handleaddHaltestelleToBuslinie = () => {
    setSuccess(false);
    axios({
      method: "post",
      url:
        "http://localhost:8080/bussupervisor/addHaltestelleZuBuslinie/" +
        addHaltestelleStartHaltestelleRef +
        "/" +
        addHaltestelleNextHaltestelleRef +
        "/" +
        addHaltestelleBuslinieRef +
        "/" +
        addHaltestelleAbfahrtszeitRef +
        "/" +
        addHaltestelleAnkunftszeitRef,
    }).then((response) => {
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  };

  //Zeigt alle Haltestellen
  const handleShowAllHaltestellen = () => {
    setShowBuslinienTable(false);
    setShowFahrplanTable(false);
    setSuccess(false);
    axios({
      method: "get",
      url: "http://localhost:8080/bussupervisor/getHaltestellen",
    }).then((response) => {
      setTableData(response.data);
      setShowHaltestelleTable(true);
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  };
  //Zeigt alle Fahrpl??ne
  const handleShowAllFahrplaene = () => {
    setShowBuslinienTable(false);
    setShowHaltestelleTable(false);
    setSuccess(false);
    axios({
      method: "get",
      url: "http://localhost:8080/bussupervisor/getFahrplaene",
    }).then((response) => {
      setTableData(response.data);
      setShowFahrplanTable(true);
      if (response.status < 300) {
        setSuccess(true);
      }
    });
  };

  //Zeigt alle Buslinien
  const handleShowAllBuslinien = () => {
    setShowFahrplanTable(false);
    setShowHaltestelleTable(false);
    setSuccess(false);
    axios({
      method: "get",
      url: "http://localhost:8080/bussupervisor/getBuslinien",
    }).then((response) => {
      setTableData(response.data);
      setShowBuslinienTable(true);
      if (response.status < 300) {
        setSuccess(true);
      }
    });
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
          <h3>
            Die letzte Aktion war: {success && "Erfolgreich"}
            {!success &&
              "Nicht Erfolgreich, bitte ??berpr??fen Sie Ihre Eingaben"}
          </h3>
        </div>
        <div>
          <h3>Dinge anlegen</h3>
          <Input
            onChange={(e) => setbuslinienNameRef(e.target.value)}
            type="text"
            placeholder={"Buslinienname"}
          />
          <Button variant="contained" onClick={handleAddBuslinie}>
            Buslinie anlegen
          </Button>
          <Input
            onChange={(e) => sethaltestellenNameRef(e.target.value)}
            type="text"
            placeholder={"Haltestellenname"}
          />
          <Button variant="contained" onClick={handleAddHaltestelle}>
            Haltestelle anlegen
          </Button>
        </div>
        <h3>Dinge zu Dingen hinzuf??gen</h3>
        <div>
          <Input
            onChange={(e) => setoldNameRefHaltestelle(e.target.value)}
            type="text"
            placeholder={"Alter Haltestellenname"}
          />{" "}
          zu
          <Input
            onChange={(e) => setnewNameRefHaltestelle(e.target.value)}
            type="text"
            placeholder={"Neuer Haltestellenname"}
          />
          <Button variant="contained" onClick={handleChangeHaltestelleName}>
            Haltestelle umbenennen
          </Button>
        </div>
        <Input
          onChange={(e) => setoldNameRefBuslinie(e.target.value)}
          type="text"
          placeholder={"Alter Buslinienname"}
        />{" "}
        zu
        <Input
          onChange={(e) => setnewNameRefBuslinie(e.target.value)}
          type="text"
          placeholder={"Neuer Buslinienname"}
        />
        <Button variant="contained" onClick={handleChangeBuslinieName}>
          Buslinie umbenennen
        </Button>
        <div>
          Buslinie
          <Input
            onChange={(e) => setbuslinieIntoFahrplanBuslinie(e.target.value)}
            type="text"
            placeholder={"Buslinienname"}
          />
          startet um
          <Input
            onChange={(e) => setbuslinieIntoFahrplanTime(e.target.value)}
            type="text"
            placeholder={"jjjj-mm-dd hh:mm:ss"}
          />
          Uhr in Richtung Endhaltestelle
          <Input
            onChange={(e) =>
              setbuslinieIntoFahrplanEndhaltestelle(e.target.value)
            }
            type="text"
            placeholder={"Haltestellenname"}
          />
          <Button variant="contained" onClick={handleAddBuslinieIntoFahrplan}>
            Buslinie zu Fahrplan hinzuf??gen
          </Button>
          <h3>Haltestelle in eine Buslinie einf??gen</h3>
        Haltestelle:
        <Input
          onChange={(e) => setaddHaltestelleStartHaltestelleRef(e.target.value)}
          type="text"
          placeholder={"Haltestellenname"}
        />
        Buslinie:
        <Input
          onChange={(e) => setaddHaltestelleBuslinieRef(e.target.value)}
          type="text"
          placeholder={"Buslinienname"}
        />
        Abfahrtszeit:
        <Input
          onChange={(e) => setaddHaltestelleAbfahrtszeitRef(e.target.value)}
          type="text"
          placeholder={"jjjj-mm-dd hh:mm:ss"}
        />
        n??chste Haltestelle:
        <Input
          onChange={(e) => setaddHaltestelleNextHaltestelleRef(e.target.value)}
          type="text"
          placeholder={"Haltestellenname"}
        />
        Ankunftszeit:
        <Input
          onChange={(e) => setaddHaltestelleAnkunftszeitRef(e.target.value)}
          type="text"
          placeholder={"jjjj-mm-dd hh:mm:ss"}
        />
        </div>
        <h3>Dinge l??schen</h3>
        <Input
          onChange={(e) =>
            setDeleteHaltestelleFromBuslinieHaltestelleRef(e.target.value)
          }
          type="text"
          placeholder={"Haltestellenname"}
        />{" "}
        aus
        <Input
          onChange={(e) =>
            setDeleteHaltestelleFromBuslinieBuslinieRef(e.target.value)
          }
          type="text"
          placeholder={"Buslinienname"}
        />
        <Button
          variant="contained"
          onClick={handleDeleteHaltestelleFromBuslinie}
        >
          Haltestelle aus Buslinie l??schen
        </Button>
        <Input
          onChange={(e) => setfahrplanDeleteRef(e.target.value)}
          type="text"
          placeholder={"Fahrplanname"}
        />
        <Button variant="contained" onClick={handleDeleteFahrplan}>
          Fahrplan l??schen
        </Button>
        <Input
          onChange={(e) => setbuslinieDeleteRef(e.target.value)}
          type="text"
          placeholder={"Buslinienname"}
        />
        <Button variant="contained" onClick={handleDeleteBuslinie}>
          Buslinie l??schen
        </Button>
        <Input
          onChange={(e) => sethaltestelleDeleteRef(e.target.value)}
          type="text"
          placeholder={"Haltestellenname"}
        />
        <Button variant="contained" onClick={handleDeleteHaltestelle}>
          Haltestelle l??schen
        </Button>
      </div>
      <div>
        <div>
          <Button variant="contained" onClick={handleaddHaltestelleToBuslinie}>
            hinzuf??gen
          </Button>
          <h3>Daten anzeigen lassen</h3>
          <Button variant="contained" onClick={handleShowAllHaltestellen}>
            Haltestellen anzeigen
          </Button>
          <Button variant="contained" onClick={handleShowAllBuslinien}>
            Buslinien anzeigen
          </Button>
          <Button variant="contained" onClick={handleShowAllFahrplaene}>
            Fahrpl??ne anzeigen
          </Button>
        </div>
      </div>
      <div>
        {showBuslinienTable && <BuslinienTable rows={tableData} />}
        {showHaltestellenTable && <HaltestellenTable rows={tableData} />}
        {showFahrplanTable && <FahrplanIdTable rows={tableData} />}
      </div>
    </>
  );
};
