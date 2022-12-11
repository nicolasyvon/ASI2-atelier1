package com.cpe.springboot.bus.rest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.jms.Message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import com.cpe.springboot.user.controller.UserService;
import com.cpe.springboot.user.model.UserDTO;

import antlr.collections.List;

@Component
public class BusListener {
	
    @Autowired
	UserService userService;
    @Autowired
    JmsTemplate jmsTemplate;

    @JmsListener(destination = "UserUpdate2", containerFactory = "connectionFactory")
    public void receiveMessage(String msgStr, Message message) {
            System.out.println("[BUSLISTENER] [CHANNEL UserUpdate1] RECEIVED String MSG=["+msgStr+"]");
            UserDTO user  = fromStringToUserDTO(msgStr);
            userService.updateUser(user);
            System.out.println("on a update " + user.getLogin()  + " en utilisant le bus.");
    }
    
    
	public UserDTO fromStringToUserDTO(String msgStr) {
        String[] splitMsgStr = msgStr.trim().split("\\s+");
		System.out.println("split par espace"+ String.valueOf(splitMsgStr[0]));
		Set<Integer> cardList = new HashSet<>();

		UserDTO user = new UserDTO();
        user.setLogin(String.valueOf(splitMsgStr[0]));
        user.setPwd(String.valueOf(splitMsgStr[1]));
        user.setAccount(Float.parseFloat(splitMsgStr[2]));
        user.setLastName(String.valueOf(splitMsgStr[3]));
        user.setSurName(String.valueOf(splitMsgStr[4]));
        
        user.setEmail(String.valueOf(splitMsgStr[5]));

		//Set<Integer> cardList =fromStringtoList(String.valueOf(splitMsgStr[6]));
        user.setCardList(cardList);
        return user;
	}
	
	public Set<Integer> fromStringtoList (String strcardlist) {
		String strcardl = strcardlist.substring(1, strcardlist.length() - 1);
        String[] cardliststr = strcardl.trim().split("\\s*,\\s*");
		Set<Integer> cardList = new HashSet<>();
		System.out.println(cardliststr.length);
		for (int i=0 ; i < cardliststr.length ; i++ ) {
			cardList.add(Integer.parseInt(cardliststr[2]));
		}
        return cardList ;

	}

            


}
