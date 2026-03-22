FROM amazoncorretto:17-alpine-jdk
COPY ./target/coffee-break-backend-0.0.1-SNAPSHOT.jar coffee-break-backend-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/coffee-break-backend-0.0.1-SNAPSHOT.jar"]
