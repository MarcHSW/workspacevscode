package de.hsw.bussupervisor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import de.hsw.bussupervisor.model.Buslinie;


@Repository
public interface BussupervisorRepository extends JpaRepository<Buslinie, Integer> {
    
}
