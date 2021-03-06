package de.hsw.bussupervisor.model;

import java.sql.Time;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;



@Entity
@Table(name = "T_BUSFAHRT")
public class Busfahrt {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "BUSFAHRT_ID", nullable = false)
    private long busfahrt_id;

    @Column
    @JoinColumn(name = "BUSLINIE_ID", nullable = false)
    private int buslinie_id;

    @Column
    @JoinColumn(name = "START_HALTESTELLE_ID", nullable = false)
    private int start_Haltestelle_Id;

    @Column
    @JoinColumn(name = "ZIEL_HALTESTELLE_ID", nullable = false)
    private int ziel_Haltestelle_Id;

    @Column
    @JoinColumn(name = "ANKUNFTS_ZEIT", nullable = false)
    private Timestamp ANKUNFTS_ZEIT;

    @Column
    @JoinColumn(name = "ABFAHRTS_ZEIT", nullable = false)
    private Timestamp ABFAHRTS_ZEIT;

    public Timestamp getAbfahrtsZeit(){
        return ABFAHRTS_ZEIT;
    }
    public long getBusfahrtId(){
        return busfahrt_id;
    }
    public int getBuslinieId(){
        return buslinie_id;
    }
    
    public Timestamp getAnkunftsZeit(){
        return ANKUNFTS_ZEIT;
    }
    public void setBuslinieId(int buslinie_id) {
        this.buslinie_id = buslinie_id;
    }
    public void setAbfahrtsZeit(Timestamp abfahrtsZeit) {
        this.ABFAHRTS_ZEIT = abfahrtsZeit;
    }
    public void setStartHaltestelle (int start_Haltestelle_Id){
        this.start_Haltestelle_Id = start_Haltestelle_Id;
    }
    public void setZielHaltestelle (int ziel_Haltestelle_Id){
        this.ziel_Haltestelle_Id = ziel_Haltestelle_Id;
    }
    public void setAnkunftsZeit(Timestamp ankunftsZeit) {
        this.ANKUNFTS_ZEIT = ankunftsZeit;
    }

}
