package de.hsw.bussupervisor.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_BUSFAHRT")

public class Busfahrt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JoinColumn(name = "BUSLINIE_ID", nullable = false)
    @ManyToOne
    private Buslinie buslinie;

    @JoinColumn(name = "START_HALTESTELLE_ID", nullable = false)
    @ManyToOne
    private Haltestelle startHaltestelle;

    @JoinColumn(name = "ZIEL_HALTESTELLE_ID", nullable = false)
    @ManyToOne
    private Haltestelle zielHaltestelle;

    @Column
    private java.sql.Timestamp ankuftszeit;

    @Column
    private java.sql.Timestamp abfahrtszeit;
}
    

