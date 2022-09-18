package com.danarim.springS3ReactFileUpload.bucket;

public enum BucketName {

    PROFILE_IMAGE("danarim-spring-react-app");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
