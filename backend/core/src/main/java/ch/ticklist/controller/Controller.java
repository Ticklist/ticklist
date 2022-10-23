package ch.ticklist.controller;

import ch.ticklist.model.LogEntry;
import ch.ticklist.repository.LogDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/")
public class Controller {

    private final LogDataRepository logDataRepository;

    @Autowired
    public Controller(LogDataRepository logDataRepository) {
        this.logDataRepository = logDataRepository;
    }

    @GetMapping
    public List<LogEntry> findAll() {
        return logDataRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void add(@Valid @RequestBody LogEntry log) {
        logDataRepository.add(log);
    }

}
