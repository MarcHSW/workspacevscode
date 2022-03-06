package de.hsw.bussupervisor.controller;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @GetMapping(value = "/get/{haltestelleName}")
    public ArrayList<Buslinie> getBuslinieWhoVisitsHaltestelle(@PathVariable("haltestelleName") String haltestelleName) {
        System.out.println(haltestelleName);
        return bussupervisorService.getBuslinieFromHaltestelle(haltestelleName);
    }

    @PostMapping
    public void registerNewStudent(@RequestBody Haltestelle haltestelle) {
    bussupervisorService.addNewHaltestelle(haltestelle);
    }

    // @DeleteMapping(path = "{studentID}")
    // public void deleteStudent(@PathVariable("studentID") Long id) {
    // studentService.deleteStudent(id);
    // }

    // @PutMapping(path = "{studentId}")
    // public void updateStudent(@PathVariable("studentId") Long studentId,
    // @RequestParam(required = false) String name,
    // @RequestParam(required = false) String email) {
    // studentService.updateStudent(studentId, name, email);
    // }
}