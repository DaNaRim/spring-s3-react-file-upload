package com.danarim.springS3ReactFileUpload;

import com.danarim.springS3ReactFileUpload.config.AmazonCredentials;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AmazonCredentials.class)
public class SpringS3ReactFileUpload {

    public static void main(String[] args) {
        SpringApplication.run(SpringS3ReactFileUpload.class, args);
    }

}
