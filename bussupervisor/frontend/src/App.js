import React, { useState, useRef } from "react";
import Table from './Table';

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



function App() {
  const [buslinien, setBuslinien] = useState([
    { name: "370", haltestellen: ["sehnde", "rethmar"] },
  ]);
  const buslinienNameRef = useRef();

  function handleAddBuslinie(e) {
    const name = buslinienNameRef.current.value;

    setBuslinien((prevBuslinien) => {
      return [...prevBuslinien, { name: name, haltestellen: [] }];
    });
    buslinienNameRef.current.value = null;
  }

  return (
    <>
      <button>Mitarbeitersicht</button>
      <button>Kundensicht</button>
      <input ref={buslinienNameRef} type="text" />
      <button onClick={handleAddBuslinie}>Buslinie hinzufügen</button>
      <Table
          columns={columns}
          data={buslinien}
          propertyAsKey='name' //The data property to be used as a key
        />
    </>
  );
}

export default App;
