package ch.ticklist.repository;

import ch.ticklist.model.Log;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class LogRepository {

    List<Log> streams = new ArrayList<>();

    public LogRepository() {
        streams.add( 
            Log.builder()
                .people("hans testli")
                .summit("Chasseral")
                .date("2022-01-01")
                .comment("ü hüerä geil gsi")
                .tags(new ArrayList<>(
                        Arrays.asList("Skitour", "Beginner")))
                .build()
        );
    }

    public List<Log> findAll() {
        return streams;
    }

    public void add(Log log) {
        streams.add(log);
    }
}