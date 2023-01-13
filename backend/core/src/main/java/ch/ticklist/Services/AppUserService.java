package ch.ticklist.Services;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ch.ticklist.repository.AppUserRepository;
import lombok.AllArgsConstructor;


@Service
@EntityScan("ch.ticklist.repository")
public class AppUserService implements UserDetailsService{

    @Autowired
    AppUserRepository appUserRepository;

    private final static String USER_NOT_FOUND = 
        "The email you entered isn’t connected to an account.";

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return appUserRepository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException(USER_NOT_FOUND));
    }
    
}
