package com.cpe.springboot.bus.rest;

import java.util.List;

import org.springframework.data.repository.CrudRepository;



public interface HistoriqueRepository extends CrudRepository <Historique, Integer> {
	//public List<Historique> findByid(String id);
}


