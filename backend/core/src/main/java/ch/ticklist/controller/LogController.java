package ch.ticklist.controller;

import ch.ticklist.model.Log;
import ch.ticklist.repository.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("logs")
public class LogController {

    private final LogRepository logRepository;

    public LogController(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    @GetMapping
    public List<Log> findAll() {
        return logRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void add(@Valid @RequestBody Log log) {
        logRepository.add(log);
    }

}