package de.hsw.bussupervisor.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import de.hsw.bussupervisor.model.Haltestelle;


@Repository
public interface HaltestellenRepository extends JpaRepository<Haltestelle, Integer> {

    @Query(value ="SELECT NAME FROM Haltestelle WHERE NAME=?1", nativeQuery = true)
    Optional<Haltestelle> findHaltestelleByName(String name);

}
