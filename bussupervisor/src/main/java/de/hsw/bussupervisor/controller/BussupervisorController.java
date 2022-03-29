package de.hsw.bussupervisor.controller;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import de.hsw.bussupervisor.model.Buslinie;
import de.hsw.bussupervisor.model.Haltestelle;
import de.hsw.bussupervisor.service.BussupervisorService;

@RestController
@RequestMapping(path = "bussupervisor")
public class BussupervisorController {

    private final BussupervisorService bussupervisorService;

    @Autowired // Dependency injection
    public BussupervisorController(BussupervisorService bussupervisorService) {
        this.bussupervisorService = bussupervisorService;
    }

    @GetMapping(value = "/getBuslinieWhoVisitsHaltestelle/{haltestelleName}")
    public ArrayList<Buslinie> getBuslinieWhoVisitsHaltestelle(@PathVariable("haltestelleName") String haltestelleName) {
        System.out.println(haltestelleName);
        return bussupervisorService.getBuslinieFromHaltestelle(haltestelleName);
    }

    // @PostMapping
    // public void registerNewStudent(@RequestBody Haltestelle haltestelle) {
    // bussupervisorService.addNewHaltestelle(haltestelle);
    // }

    @PostMapping(path ="/addHaltestelle")
    public void addHaltestelle(@RequestBody Haltestelle haltestelle) {
    bussupervisorService.addNewHaltestelle(haltestelle);
   
    }

    @PostMapping(path ="/addBuslinie")
    public void addHaltestelle(@RequestBody Buslinie buslinie) {
    bussupervisorService.addNewBuslinie(buslinie);
   
    }

    @DeleteMapping(path = "deleteHaltestelle/{haltestelleName}")
    public void deleteHaltestelle(@PathVariable("haltestelleName") String haltestelleName) {
        bussupervisorService.deleteBuslinie(haltestelleName);
    }

    @DeleteMapping(path = "deleteBuslinie{buslinieName}")
    public void deleteBuslinie(@PathVariable("buslinieName") String buslinieName) {
        bussupervisorService.deleteHaltestelle(buslinieName);
    }

    @DeleteMapping(path = "deleteFahrplan/{fahrplanID}")
    public void deleteFahrplan(@PathVariable("fahrplanID") Long fahrplanID) {
        bussupervisorService.deleteFahrplan(fahrplanID);
    }

    @PutMapping(path = "/changeBuslinieName/{buslinieName}")
    public void updateBuslinieName(@PathVariable("buslinieName") String buslinieName,
    @RequestParam(required = true) String updatedName) {
        bussupervisorService.updateBuslinie(buslinieName, updatedName);
    }

    @PutMapping(path = "/changeHaltestelleName/{haltestelleName}")
    public void updateHaltestelleName(@PathVariable("haltestelleName") String haltestelleName,
    @RequestParam(required = true) String updatedName) {
        bussupervisorService.updateHaltestelle(haltestelleName, updatedName);
    }

    @GetMapping(value = "/getHaltestellenFromBuslinie/{buslinieName}")
    public ArrayList<Buslinie> getHaltestellenFromBuslinie(@PathVariable("buslinieName") String buslinieName) {
        System.out.println(buslinieName);
        return bussupervisorService.getHaltestellenFromBuslinie(buslinieName);
    }
}