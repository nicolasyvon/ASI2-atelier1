package com.cpe.springboot.bus.rest;



import javax.jms.Message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import com.cpe.springboot.user.model.UserModel;
import com.fasterxml.jackson.databind.ObjectMapper;


@Component

public class HistoriqueConsumer {
	
	private  HistoriqueRepository historiqueRepository ;


    @Autowired
    JmsTemplate jmsTemplate;
    @Autowired
    ObjectMapper objectMapper;

    @JmsListener(destination = "historique ", containerFactory = "connectionFactory")
    public void receiveMessageB(String msgStr, Message message) {
        System.out.println("[BUSLISTENER] [CHANNEL historique] RECEIVED String MSG=["+msgStr+"]");
		//Historique h = new Historique (msgStr);
        //System.out.println(h.getChat());
		//historiqueRepository.save(h);
    }
}

