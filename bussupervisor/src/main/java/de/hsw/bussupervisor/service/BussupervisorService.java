package de.hsw.bussupervisor.service;

import de.hsw.bussupervisor.model.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
		System.out.println(haltestelle.getName());
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

	public void addNewBuslinie(Buslinie buslinie) {
		Optional<Buslinie> optionalBuslinie = buslinienRepository.findBuslinieByName(buslinie.getName());
		System.out.println(buslinie.getName());
		if (optionalBuslinie.isPresent()) {
			throw new IllegalArgumentException("Buslinie ist schon vergeben");
		}
		buslinienRepository.save(buslinie);
		System.out.println(buslinie.getName());

	}
	
	@Transactional
	public void updateHaltestelle(String haltestelleName, String updatedName) {
		Haltestelle haltestelle = haltestellenRepository.findHaltestelleByName(haltestelleName).orElseThrow();
	
	if (updatedName != null && !Objects.equals(haltestelle.getName(), updatedName)) {
		haltestelle.setName(updatedName);
	}
	
	}
	
	@Transactional
    public void updateBuslinie(String buslinieName, String updatedName) {
		Buslinie buslinie = buslinienRepository.findBuslinieByName(buslinieName).orElseThrow();
	
		if (updatedName != null && !Objects.equals(buslinie.getName(), updatedName)) {
			buslinie.setName(updatedName);
		}
    }

	
}
