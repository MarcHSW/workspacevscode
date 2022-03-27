package de.hsw.bussupervisor.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "T_BUSLINIE")
public class Buslinie {

    @Id
    @Column(name = "BUSLINIE_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long BUSLINIE_ID;

    
    @Column(name = "BUSLINIE_NAME")
    private String buslinie_name;

    public String getName() {
        return buslinie_name;
    }
    public void setName(String buslinie_name) {
        this.buslinie_name = buslinie_name;
    }
    
    public Long getBuslinieId() {
        return BUSLINIE_ID;
    }
    public void setBuslinieId(Long BUSLINIE_ID) {
        this.BUSLINIE_ID = BUSLINIE_ID;
    }
}
