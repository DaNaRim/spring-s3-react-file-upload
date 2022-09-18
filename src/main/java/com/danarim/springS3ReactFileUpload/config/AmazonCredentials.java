package com.danarim.springS3ReactFileUpload.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("secrets")
public record AmazonCredentials(
        String accessKey,
        String secretKey
) {
}
