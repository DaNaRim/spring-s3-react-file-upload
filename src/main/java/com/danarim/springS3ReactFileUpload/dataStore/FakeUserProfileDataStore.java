package com.danarim.springS3ReactFileUpload.dataStore;

import com.danarim.springS3ReactFileUpload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("5cd39eac-e9e8-4318-8051-2518e96ad31d"), "janetjones", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("e18f6e64-7bc6-477a-836f-741e717b413d"), "antoniojunior", null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
