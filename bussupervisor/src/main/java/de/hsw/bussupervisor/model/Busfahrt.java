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
    private long id;

    @Column
    @JoinColumn(name = "BUSLINIE_NAME", nullable = false)
    private String buslinieName;

    @Column
    @JoinColumn(name = "START_HALTESTELLE_NAME", nullable = false)
    private String startHaltestelle;

    @Column
    @JoinColumn(name = "ZIEL_HALTESTELLE_NAME", nullable = false)
    private String zielHaltestelle;

    @Column
    @JoinColumn(name = "ANKUNFTS_ZEIT", nullable = false)
    private java.sql.Timestamp ANKUNFTS_ZEIT;

    @Column
    @JoinColumn(name = "ABFAHRTS_ZEIT", nullable = false)
    private java.sql.Timestamp ABFAHRTS_ZEIT;
}
