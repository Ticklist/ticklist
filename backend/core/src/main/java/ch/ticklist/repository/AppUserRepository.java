package ch.ticklist.repository;

import java.util.Optional;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;
import ch.ticklist.model.AppUser;
import ch.ticklist.model.AppUserRole;

@Repository
public class AppUserRepository {

    // TODO: connect with database

    public Optional<AppUser> findByEmail(String email) {

        if (email.equals("someemail@gmail.com")) {
            AppUser user = new AppUser("matibus",
            "hansi",
            "someemail@gmail.com",
            "hansvontan",
            AppUserRole.USER,
            false,
            true);

            return Optional.of(user);
        }
        return Optional.empty();
    }

}
