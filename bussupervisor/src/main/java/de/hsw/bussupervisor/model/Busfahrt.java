package de.hsw.bussupervisor.model;

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
    private String buslinie_id;

    @Column
    @JoinColumn(name = "START_HALTESTELLE_ID", nullable = false)
    private int start_Haltestelle_Id;

    @Column
    @JoinColumn(name = "ZIEL_HALTESTELLE_ID", nullable = false)
    private int ziel_Haltestelle_Id;

    @Column
    @JoinColumn(name = "ANKUNFTS_ZEIT", nullable = false)
    private java.sql.Timestamp ANKUNFTS_ZEIT;

    @Column
    @JoinColumn(name = "ABFAHRTS_ZEIT", nullable = false)
    private java.sql.Timestamp ABFAHRTS_ZEIT;
}
