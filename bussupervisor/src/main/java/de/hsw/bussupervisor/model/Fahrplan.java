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
    @Column(name = "FAHRPLAN_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long fahrplan_id;
    
    @Column(name = "BUSLINIE_ID")
    private long buslinie_id;

    @Column(name = "ABFAHRTS_ZEIT")
    private java.sql.Timestamp abfahrts_zeit;

    @Column(name = "ZIEL_HALTESTELLE_ID")
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
