package de.hsw.bussupervisor.controller;
import org.springframework.beans.factory.annotation.Autowired;

import de.hsw.bussupervisor.service.BussupervisorService;

public class BussupervisorController {

    private final BussupervisorService bussupervisorService;

    @Autowired // Dependency injection
    public BussupervisorController(BussupervisorService bussupervisorService) {
        this.bussupervisorService = bussupervisorService;
    }

    // @GetMapping
    // public List<Fahrplan> getStudents() {
    //     return bussupervisorService.getFahrplaene();
    // }

    // @PostMapping
    // public void registerNewStudent(@RequestBody Student student) {
    // studentService.addNewStudent(student);
    // }

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