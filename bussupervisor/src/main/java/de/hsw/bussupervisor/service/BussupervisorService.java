package de.hsw.bussupervisor.service;

import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.hsw.bussupervisor.model.Busfahrt;
import de.hsw.bussupervisor.model.Buslinie;
import de.hsw.bussupervisor.model.Fahrplan;
import de.hsw.bussupervisor.model.Haltestelle;
import de.hsw.bussupervisor.repository.BusfahrtRepository;
import de.hsw.bussupervisor.repository.BuslinienRepository;
import de.hsw.bussupervisor.repository.FahrplanRepository;
import de.hsw.bussupervisor.repository.HaltestellenRepository;

@Service
public class BussupervisorService {
	private final HaltestellenRepository haltestellenRepository;
	private final BuslinienRepository buslinienRepository;
	private final FahrplanRepository fahrplanRepository;
	private final BusfahrtRepository busfahrtRepository;
	@Autowired
	public BussupervisorService(HaltestellenRepository haltestellenRepository,
			BuslinienRepository buslinienRepository, FahrplanRepository fahrplanRepository,BusfahrtRepository busfahrtRepository ) {
		this.haltestellenRepository = haltestellenRepository;
		this.buslinienRepository = buslinienRepository;
		this.fahrplanRepository = fahrplanRepository;
		this.busfahrtRepository = busfahrtRepository;
	}
	
	public void addNewHaltestelle(Haltestelle haltestelle) {
		Optional<Haltestelle> optionalHaltestelle = haltestellenRepository.findHaltestelleByName(haltestelle.getHaltestelleName());
		System.out.println(haltestelle.getHaltestelleName());
		if (optionalHaltestelle.isPresent()) {
			throw new IllegalArgumentException("Haltestelle ist schon vergeben");
		}
		haltestellenRepository.save(haltestelle);
		System.out.println(haltestelle.getHaltestelleName());
		
	}
	public void addNewFahrplan(String startHaltestelleName, String buslinieName, Timestamp abfahrtsZeit, String fahrplanId) {
		String ziel_haltestelle_id = haltestellenRepository.getIdForName(startHaltestelleName);
		String buslinie_id = buslinienRepository.getIdForName(buslinieName);
	
		Fahrplan fahrplan = new Fahrplan();
		fahrplan.setFahrplanId(Long.valueOf(fahrplanId));
		fahrplan.setAbfahrtsZeit(abfahrtsZeit);
		fahrplan.setBuslinieId(Integer.valueOf(buslinie_id));
		fahrplan.setZielHaltestelle(Integer.valueOf(ziel_haltestelle_id));
		System.out.println( startHaltestelleName+ buslinieName +abfahrtsZeit +fahrplanId);
		System.out.println(fahrplan);
		fahrplanRepository.save(fahrplan);
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

		if (updatedName != null && !Objects.equals(haltestelle.getHaltestelleName(), updatedName)) {
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
	@Transactional
	public void deleteHaltestelle(String haltestelleName) {
		Haltestelle haltestelle = haltestellenRepository.findHaltestelleByName(haltestelleName).orElseThrow();
		try {

			haltestellenRepository.deleteById(haltestelle.getId());
			System.out.println("Haltestelle: " + haltestelleName + " has been deleted");

		} catch (DataIntegrityViolationException e) {
			System.err.println("Die Haltestelle " + haltestelleName
					+ " konnte nicht gelöscht werden, da sie einer Buslinie zugeordnet ist");

		}

	}
	@Transactional
	public void deleteBuslinie(String buslinieName) {
		Buslinie buslinie = buslinienRepository.findBuslinieByName(buslinieName).orElseThrow();
		try {

			buslinienRepository.deleteById(buslinie.getBuslinieId());
			System.out.println("Buslinie: " + buslinieName + " has been deleted");

		} catch (DataIntegrityViolationException e) {
			System.err.println("Die Buslinie " + buslinieName
					+ " konnte nicht gelöscht werden, da sie einer Buslinie zugeordnet ist");

		}
	}

	@Transactional
	public void deleteFahrplan(Long fahrplanID) {
		try{

			fahrplanRepository.deleteFahrplaeneByID(fahrplanID);
			System.out.println("Fahrplan mit der ID: " +fahrplanID + " wurde gelöscht");
			
		} catch (DataIntegrityViolationException e){
			System.err.println("Der Fahrplan mit der ID " + fahrplanID +" konnte nicht gelöscht werden");

		}
	}

	public ArrayList<Haltestelle> getHaltestellenFromBuslinie(String buslinieName) {
		return haltestellenRepository.getHaltestellenFromBuslinie(buslinieName);
	}

	public ArrayList<Fahrplan> getFahrplanFuerHaltestelle(String haltestelleName, String uhrzeit) {
		Timestamp ts = Timestamp.valueOf(uhrzeit);
		Timestamp tsWith24Hours = new Timestamp(ts.getTime() + (1000* 60*60*24));
		System.out.println(ts);
		System.out.println(tsWith24Hours);
		return fahrplanRepository.getFahrplanFuerHaltestelle(haltestelleName, ts, tsWith24Hours);
	}

	public void addHaltestelleZuBuslinie(String startHaltestelleName, String zielHaltestelleName, String buslinieName, Timestamp abfahrtsZeit, Timestamp ankunftsZeit ) {
		System.out.println(startHaltestelleName + zielHaltestelleName + buslinieName + abfahrtsZeit.toString()+ankunftsZeit.toString());
		String start_haltestelle_id = haltestellenRepository.getIdForName(startHaltestelleName);
		String ziel_haltestelle_id = haltestellenRepository.getIdForName(zielHaltestelleName);
		String buslinie_id = buslinienRepository.getIdForName(buslinieName);
		Busfahrt busfahrt = new Busfahrt();
		busfahrt.setAbfahrtsZeit(abfahrtsZeit);
		busfahrt.setAnkunftsZeit(ankunftsZeit);
		busfahrt.setBuslinieId(Integer.valueOf(buslinie_id));
		busfahrt.setStartHaltestelle(Integer.valueOf(start_haltestelle_id));
		busfahrt.setZielHaltestelle(Integer.valueOf(ziel_haltestelle_id));
		busfahrtRepository.save(busfahrt);
	}

	@Transactional
	public void deleteHaltestelleFromBuslinie(String haltestelleName, String buslinieName) {
		String haltestelle_id = haltestellenRepository.getIdForName(haltestelleName);
		String buslinie_id = buslinienRepository.getIdForName(buslinieName);
		System.out.println(haltestelle_id);
		System.out.println(buslinie_id);
	try{

			busfahrtRepository.deleteHaltestelleFromBuslinie(haltestelle_id, buslinie_id);
			System.err.println("Die Haltestelle: " +haltestelleName + " wurde von der Buslinie" +buslinieName+ "gelöscht");
			
		} catch (DataIntegrityViolationException e){
			System.err.println("Die Haltestelle: " +haltestelleName + " konnte von der Buslinie" +buslinieName+ " nicht gelöscht werden");

		}
	}

	public ArrayList<Buslinie> getBuslinien() {
		return buslinienRepository.getBuslinien();
	}

	public ArrayList<Haltestelle> getHaltestellen() {
		return haltestellenRepository.getHaltestellen();
	}

	public ArrayList<Fahrplan> getFahrplaene() {
		return fahrplanRepository.getFahrplaene();
	}
	}


	


