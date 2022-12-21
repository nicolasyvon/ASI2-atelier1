package com.asi;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.asi.config.AppConfig;
import com.asi.producer.MessageSender;

public class MessageProducerApp
{

	public static void main(String[] args)
	{
		AbstractApplicationContext context = new AnnotationConfigApplicationContext(
				AppConfig.class);
		MessageSender messageSender = context.getBean(MessageSender.class);
		messageSender.sendMessage("Mon premier message de la queue");

		System.out.println("Le message a bien été envoyé...");
		((AbstractApplicationContext) context).close();
	}

}
