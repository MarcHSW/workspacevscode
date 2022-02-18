package de.hsw.bussupervisor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.hsw.bussupervisor.model.Fahrplan;

@Repository
public interface BusSupervisorRepository extends JpaRepository<Fahrplan, Integer> {
    
}
