docker build --no-cache -f SQL\Dockerfile.PostgreSql -t novoe_prilozhenie-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t novoe_prilozhenie-java/app ../../..
