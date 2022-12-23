package com.cpe.springboot.bus.rest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Historique {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private Integer id;
	private String chat;
	
	public Historique() {
		this.chat="chat_default";
	}

	public Historique(String chat) {
		super();
		this.chat = chat;
	}

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getChat() {
		return chat;
	}

	public void setChat(String chat) {
		this.chat = chat;
	}

}
