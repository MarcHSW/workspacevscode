package de.hsw.bussupervisor.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.cfg.annotations.IdBagBinder;
import org.yaml.snakeyaml.events.Event.ID;

@Entity
@Table(name = "T_HALTESTELLE")
public class Haltestelle {
    
    @Id
    @Column
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="student_sequence")
	private Long id;
    
    @Column
    private String haltestelle_name;

    public String getName() {
        return haltestelle_name;
    }
    public void setName(String haltestelle_name) {
        this.haltestelle_name = haltestelle_name;
    }
    public Long getId() {
        return id;
    }
    public void setName(Long id) {
        this.id = id;
    }
}
