# Building and running the application

mvn clean package

docker build --tag=coffee-break-backend .

docker run -p8887:8080 coffee-break-backend:latest

If application should be available on different port, change the 8887 port.