package de.hsw.bussupervisor.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;


@Entity
@Table(name = "T_HALTESTELLE")
public class Haltestelle {
    
    @Id
    @Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "HALTESTELLE_ID", nullable = false)
	private Long haltestelle_id;
    
    @Column
    @JoinColumn(name = "HALTESTELLE_NAME", nullable = false)
    private String haltestelle_name;

    public String getHaltestelleName() {
        return haltestelle_name;
    }
    public void setName(String haltestelle_name) {
        this.haltestelle_name = haltestelle_name;
    }
    public Long getId() {
        return haltestelle_id;
    }
    public void setId(Long haltestelle_id) {
        this.haltestelle_id = haltestelle_id;
    }
}
