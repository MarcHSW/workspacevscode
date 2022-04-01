package de.hsw.bussupervisor.repository;


import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import de.hsw.bussupervisor.model.Busfahrt;

public interface BusfahrtRepository extends JpaRepository<Busfahrt, Long> {
    
    @Modifying
    @Query(value = "DELETE FROM T_BUSFAHRT WHERE BUSLINIE_ID=?2 AND START_HALTESTELLE_ID=?1", nativeQuery = true)
    void deleteHaltestelleFromBuslinie(String haltestelle_id, String buslinie_id);

    
    

}
