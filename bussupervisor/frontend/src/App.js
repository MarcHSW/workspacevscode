import React, { useState, useRef} from "react";
import BuslinienList from "./BuslinienList";

function App() {
  const [buslinien, setBuslinien] = useState([{name: '370', haltestellen:['sehnde', 'rethmar']}])
  const buslinienNameRef = useRef()

function handleAddBuslinie(e){
  const name = buslinienNameRef.current.value

  setBuslinien(prevBuslinien =>{
    return [...prevBuslinien,{name: name, haltestellen: []}]
  })
  buslinienNameRef.current.value = null
  
}

  return (
    <>
    <button>Mitarbeitersicht</button>
    <button>Kundensicht</button>
    <input ref={buslinienNameRef} type= "text"/>
    <button onClick={handleAddBuslinie}>Buslinie hinzufügen</button>
    <BuslinienList buslinien={buslinien} />
    
    </>
  );
}

export default App;
