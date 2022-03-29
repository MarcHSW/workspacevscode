package de.hsw.bussupervisor.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "T_FAHRPLAN")
public class Fahrplan {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "FAHRPLAN_ID", nullable = false)
    private long fahrplan_id;
    
    @Column
    @JoinColumn(name = "BUSLINIE_ID", nullable = false)
    private long buslinie_id;

    @Column
    @JoinColumn(name = "ABFAHRTS_ZEIT", nullable = false)
    private java.sql.Timestamp abfahrts_zeit;

    @Column
    @JoinColumn(name = "ZIEL_HALTESTELLE_ID", nullable = false)
    private int ziel_Haltestelle_Id;



    public long getFahrplanId(){
        return fahrplan_id;
    }

    public long getBuslinieId(){
        return buslinie_id;
    }
    public void setBuslinieId (Long buslinie_id ){
        this.buslinie_id = buslinie_id;
    }
    public void setFahrplanId (Long fahrplan_id ){
        this.fahrplan_id = fahrplan_id;
    }
     
}
