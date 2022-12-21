package com.asi.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan(basePackages = "com.asi")
@Import({ MessagingConfiguration.class })
public class AppConfig
{
}
