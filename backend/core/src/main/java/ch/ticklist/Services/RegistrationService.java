package ch.ticklist.Services;

import org.springframework.stereotype.Service;

import ch.ticklist.model.RegistrationRequest;

@Service
public class RegistrationService {

    public static String register(RegistrationRequest request) {
        return "works";
    }
    
}
