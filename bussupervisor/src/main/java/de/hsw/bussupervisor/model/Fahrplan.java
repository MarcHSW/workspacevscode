package de.hsw.bussupervisor.model;


import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.springframework.data.annotation.Transient;

@Entity
@Table(name = "T_FAHRPLAN")
public class Fahrplan {

    @Id
    @Column(name = "FAHRPLAN_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long fahrplan_id;
    
    @Column(name = "BUSLINIE_ID")
    private int buslinie_id;

    @Column(name = "ABFAHRTS_ZEIT")
    private java.sql.Timestamp abfahrts_zeit;

    @Column(name = "ZIEL_HALTESTELLE_ID")
    private int ziel_Haltestelle_Id;
   
   @Transient
   private String buslinie_Name;

   public String getBuslinieName (){
       return buslinie_Name;
   }
   public void setBuslinieName(String buslinie_name){
       this.buslinie_Name = buslinie_name;
   }

    public void setZielHaltestelle (int ziel_Haltestelle_Id){
        this.ziel_Haltestelle_Id = ziel_Haltestelle_Id;
    }



    public long getFahrplanId(){
        return fahrplan_id;
    }

    public long getBuslinieId(){
        return buslinie_id;
    }
    public void setBuslinieId (int buslinie_id ){
        this.buslinie_id = buslinie_id;
    }
    public void setFahrplanId (long fahrplan_id ){
        this.fahrplan_id = fahrplan_id;
    }
    public void setAbfahrtsZeit(java.sql.Timestamp abfahrts_zeit){
        this.abfahrts_zeit = abfahrts_zeit;
    }
    public Timestamp getAbfahrtsZeit(){
        return abfahrts_zeit;
    }
    

     
}
