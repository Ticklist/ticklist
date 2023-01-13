package ch.ticklist.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.ticklist.Services.RegistrationService;
import ch.ticklist.model.RegistrationRequest;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "registration")
@AllArgsConstructor
public class RegistrationController {
    
    public String registration(@RequestBody RegistrationRequest request) {
        return RegistrationService.register(request);
    }
}
