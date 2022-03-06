package de.hsw.bussupervisor.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import de.hsw.bussupervisor.model.Buslinie;

@Repository
public interface BuslinienRepository extends JpaRepository<Buslinie, Integer> {

    @Query(value ="SELECT * from T_BUSFAHRT AS b WHERE b.ZIEL_HALTESTELLE =?1 OR b.START_HALTESTELLE =?1",  nativeQuery = true)
    ArrayList<Buslinie> findBuslinieWhichVisitsHaltestelle(String name);

}
