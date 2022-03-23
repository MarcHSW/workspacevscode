package de.hsw.bussupervisor.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "T_BUSLINIE")
public class Buslinie {

    @Id
    @Column
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="student_sequence")
	private Long id;

    @Column
    private String buslinie_name;

    public String getName() {
        return buslinie_name;
    }
    public void setName(String buslinie_name) {
        this.buslinie_name = buslinie_name;
    }
    
    public Long getId() {
        return id;
    }
    public void setName(Long id) {
        this.id = id;
    }
}
