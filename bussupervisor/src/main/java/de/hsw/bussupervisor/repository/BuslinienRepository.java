package de.hsw.bussupervisor.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import de.hsw.bussupervisor.model.Buslinie;
import de.hsw.bussupervisor.model.Haltestelle;

@Repository
public interface BuslinienRepository extends JpaRepository<Buslinie, Long> {

    @Query(value = "SELECT l.BUSLINIE_ID, l.BUSLINIE_NAME FROM t_buslinie as l INNER JOIN t_busfahrt as f ON f.BUSLINIE_ID= l.BUSLINIE_ID INNER JOIN t_haltestelle as h ON h.HALTESTELLE_ID = f.START_HALTESTELLE_ID OR h.HALTESTELLE_ID = f.ZIEL_HALTESTELLE_ID WHERE h.HALTESTELLE_NAME =?1", nativeQuery = true)
    ArrayList<Buslinie> findBuslinieWhichVisitsHaltestelle(String name);

    @Query(value = "SELECT l.buslinie_id, l.BUSLINIE_NAME FROM T_BUSLINIE AS l WHERE BUSLINIE_NAME=?1", nativeQuery = true)
    Optional<Buslinie> findBuslinieByName(String name);

    @Query(value = "SELECT l.BUSLINIE_ID, l.BUSLINIE_NAME FROM T_BUSLINIE as l WHERE l.BUSLINIE_NAME=?1", nativeQuery = true)
    ArrayList<Haltestelle> getHaltestellenFromBuslinie(String buslinieName);

    @Query(value ="SELECT BUSLINIE_ID FROM T_BUSLINIE as l WHERE l.BUSLINIE_NAME=?1", nativeQuery = true)
    String getIdForName(String buslinieName);

    @Query(value ="SELECT * FROM T_BUSLINIE", nativeQuery = true)
    ArrayList<Buslinie> getBuslinien();

}
