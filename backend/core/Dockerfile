# Build Stage
FROM maven:3.8-eclipse-temurin-19-alpine AS build

WORKDIR /app

COPY src src
COPY pom.xml .

RUN mvn clean package


# Package stage
FROM eclipse-temurin:19-jre-alpine

COPY --from=build /app/target/core-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
    
