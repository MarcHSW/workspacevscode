package de.hsw.bussupervisor.service;

import de.hsw.bussupervisor.model.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.hsw.bussupervisor.repository.BuslinienRepository;
import de.hsw.bussupervisor.repository.HaltestellenRepository;

@Service
public class BussupervisorService {
	private final HaltestellenRepository haltestellenRepository;
	private final BuslinienRepository buslinienRepository;

	@Autowired
	public BussupervisorService(HaltestellenRepository bussupervisorRepository,
			BuslinienRepository buslinienRepository) {
		this.haltestellenRepository = bussupervisorRepository;
		this.buslinienRepository = buslinienRepository;
	}

	public void addNewHaltestelle(Haltestelle haltestelle) {
		Optional<Haltestelle> optionalHaltestelle = haltestellenRepository.findHaltestelleByName(haltestelle.getName());
		if (optionalHaltestelle.isPresent()) {
			throw new IllegalArgumentException("Haltestelle ist schon vergeben");
		}
		haltestellenRepository.save(haltestelle);
		System.out.println(haltestelle.getName());

	}

	public ArrayList<Buslinie> getBuslinieFromHaltestelle(String haltestelleName) {
		ArrayList<Buslinie> buslinien = buslinienRepository
				.findBuslinieWhichVisitsHaltestelle(haltestelleName);
		System.out.println(buslinien.toString());
		return buslinien;

	}

	// public List<Buslinie> getBuslinie() {
	// return bussupervisorRepository.findAll();
	// }
}
