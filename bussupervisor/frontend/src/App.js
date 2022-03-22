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
    { name: "370", haltestellen: ["sehnde", "rethmar"] }
  ]);

  const buslinienNameRef = useRef();

  function handleAddBuslinie(e) {
    const name = buslinienNameRef.current.value;

    setBuslinien((prevBuslinien) => {
      return [...prevBuslinien, { name: name, haltestellen: [] }];
    });
    buslinienNameRef.current.value = null;
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

  return buslinien.map((buslinien, index) => {
    return (<div key={index}>
      <h1>{buslinien.name}</h1>
      <p>{buslinien.haltestellen}</p>
    </div>)
  }) 
 
}


export default Buslinien;
