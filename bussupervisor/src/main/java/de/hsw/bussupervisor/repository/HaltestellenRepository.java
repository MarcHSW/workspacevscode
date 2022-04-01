package de.hsw.bussupervisor.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import de.hsw.bussupervisor.model.Buslinie;
import de.hsw.bussupervisor.model.Haltestelle;


@Repository
public interface HaltestellenRepository extends JpaRepository<Haltestelle, Long> {

    @Query(value ="SELECT HALTESTELLE_ID, HALTESTELLE_NAME FROM T_Haltestelle WHERE HALTESTELLE_NAME=?1", nativeQuery = true)
    Optional<Haltestelle> findHaltestelleByName(String name);

    @Query(value ="SELECT HALTESTELLE_ID FROM t_HALTESTELLE as h WHERE h.HALTESTELLE_NAME=?1", nativeQuery = true)
    String getIdForName(String haltestelleName);

    @Query(value ="SELECT l.BUSLINIE_ID, l.BUSLINIE_NAME, h.HALTESTELLE_ID, h.HALTESTELLE_NAME FROM t_buslinie as l  INNER JOIN T_busfahrt as f  ON f.BUSLINIE_ID = l.BUSLINIE_ID INNER JOIN t_haltestelle as h ON h.HALTESTELLE_ID = f.START_HALTESTELLE_ID WHERE l.BUSLINIE_NAME=?1", nativeQuery = true)
    ArrayList<Haltestelle> getHaltestellenFromBuslinie(String buslinieName);

    @Query (value = "SELECT * FROM T_HALTESTELLE", nativeQuery = true)
    ArrayList<Haltestelle> getHaltestellen();

}
