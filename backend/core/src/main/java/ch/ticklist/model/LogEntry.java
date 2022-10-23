package ch.ticklist.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class LogEntry {
    private String people;
    private String comment;
    private String summit;
    private String date;
    private List<String> tags;
}