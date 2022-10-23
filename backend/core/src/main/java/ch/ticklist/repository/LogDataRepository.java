package ch.ticklist.repository;

import ch.ticklist.model.LogEntry;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class LogDataRepository {

    List<LogEntry> streams = new ArrayList<>();

    public LogDataRepository() {
        streams.add( LogEntry.builder()
                .userName("hans testli")
                .summit("Chasseral")
                .date("2022-01-01")
                .comment(""" 
                        ü hüerä geil gsi""")
                .build()
        );
    }

    public List<LogEntry> findAll() {
        return streams;
    }

    public void add(LogEntry log) {
        streams.add(log);
    }
}
