import React, { useState, useRef, useEffect } from "react";
import Table from './Table';
import axios from "axios";

let columns = [
  {
    heading: 'Name',
    property: 'name'
  },
  {
    heading: 'Haltestellen',
    property: 'haltestellen'
  },
]



function Buslinien() {
  const [buslinien, setBuslinien] = useState([
    { name: "370", haltestellen: ["sehnde", "rethmar"]},
    { name: "800", haltestellen: ["sehnde", "rethmar"]}
  ]);

  const buslinienNameRef = useRef();

  function handleAddBuslinie() {
    const name = buslinienNameRef.current.value;

    setBuslinien((prevBuslinien) => {
      return [...prevBuslinien, { name: name, haltestellen: [] }];
    });
    buslinienNameRef.current.value = null;
  }

  
//TODO: implementieren
  const openKundenansicht = () => {

  }

  //TODO: implementieren
  const openMitarbeiteransicht = () =>{

  }

  const fetchBuslinien = () => {
    axios.get("http://localhost:8080/bussupervisor/get/HannoverHBF").then(res => {
      console.log(res);
      setBuslinien(res.data);
    })
  }

  useEffect(() => {
    fetchBuslinien();
  }, [])


  const buslinienTable = buslinien.map((buslinien, index) => {
    return (<div key={index}>
     <Table
     columns={columns}
      data={[buslinien]}
      tableLayout="auto"
    />
  </div>)
  
});

  return <div>
  <button onClick={openMitarbeiteransicht}>Mitarbeiteransicht</button>
  <button onClick={openKundenansicht}>Kundenansicht</button>
  <input ref={buslinienNameRef} type="text" />
  <button onClick={handleAddBuslinie}>Buslinie hinzufügen</button>
  <div>{buslinienTable}</div> 
  </div> 
 
}


export default Buslinien;