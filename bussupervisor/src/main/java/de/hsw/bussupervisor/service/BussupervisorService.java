package de.hsw.bussupervisor.service;
import de.hsw.bussupervisor.model.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import de.hsw.bussupervisor.repository.BussupervisorRepository;

public class BussupervisorService {
    private final BussupervisorRepository bussupervisorRepository;

    @Autowired
	public BussupervisorService(BussupervisorRepository bussupervisorRepository) {
		this.bussupervisorRepository = bussupervisorRepository;
	}

	// public List<Buslinie> getBuslinie() {
	// 	return bussupervisorRepository.findAll();
	// }
  }
