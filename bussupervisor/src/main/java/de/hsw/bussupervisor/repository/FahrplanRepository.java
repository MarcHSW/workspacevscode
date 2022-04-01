package de.hsw.bussupervisor.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import de.hsw.bussupervisor.model.Busfahrt;
import de.hsw.bussupervisor.model.Fahrplan;

@Repository
public interface FahrplanRepository extends JpaRepository<Fahrplan, Long> {

    @Modifying
    @Query(value = "DELETE FROM T_FAHRPLAN WHERE T_FAHRPLAN.FAHRPLAN_ID=?1", nativeQuery = true)
    void deleteFahrplaeneByID(long fahrplan_id);

    @Query(value = "SELECT p.fahrplan_id, p.buslinie_id, f.start_haltestelle_id, f.ziel_haltestelle_id , l.BUSLINIE_NAME, f.ANKUNFTS_ZEIT, p.Abfahrts_zeit, h.HALTESTELLE_NAME FROM t_busfahrt as f inner JOIN t_buslinie as l ON l.BUSLINIE_ID = f.BUSLINIE_ID INNER JOIN t_Fahrplan as p ON p.buslinie_id = f.buslinie_id INNER JOIN t_haltestelle as h ON h.HALTESTELLE_ID = f.Start_HALTESTELLE_ID WHERE f.ANKUNFTS_ZEIT BETWEEN ?2 AND ?3 AND h.HALTESTELLE_NAME =?1", nativeQuery = true)
    ArrayList<Fahrplan> getFahrplanFuerHaltestelle(String haltestelleName, java.sql.Timestamp ts,
            java.sql.Timestamp tsWith24Hours);

    @Query(value = "SELECT * FROM T_FAHRPLAN", nativeQuery = true)
    ArrayList<Fahrplan> getFahrplaene();
}
