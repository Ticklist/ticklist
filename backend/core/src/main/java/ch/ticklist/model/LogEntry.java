package ch.ticklist.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LogEntry {
    private String userName;
    private String comment;
    private String summit;
    private String date;
}