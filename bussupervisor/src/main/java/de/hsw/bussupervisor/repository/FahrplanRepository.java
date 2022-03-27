package de.hsw.bussupervisor.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import de.hsw.bussupervisor.model.Fahrplan;

@Repository
public interface FahrplanRepository extends JpaRepository<Fahrplan, Long> {
    
    @Modifying
    @Query(value = "DELETE FROM T_FAHRPLAN WHERE T_FAHRPLAN.FAHRPLAN_ID=?1", nativeQuery = true)
    void deleteFahrplaeneByID(long fahrplan_id);
}
