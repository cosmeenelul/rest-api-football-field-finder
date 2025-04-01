CREATE DATABASE terenuriDB;

USE terenuriDB;

CREATE TABLE(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nume VARCHAR(200) NOT NULL,
	locatie VARCHAR(200),
	telefon VARCHAR(10),
	pretPeOra DECIMAL(10),
	latitudine DOUBLE,
	longitudine DOUBLE

);


INSERT INTO terenuriDB(nume,locatie,telefon,pretPeOra,latitudine,longitudine) VALUES
("Teren1","Str.Exemplu 1", "Bucuresti","0735695739",50,33.2330,123.2454),
("Teren2","Str.Exemplu 2", "Bucuresti","0735693242",50,33.2330,123.2454),
("Teren3","Str.Exemplu 3", "Bucuresti","0735692356",50,33.2330,123.2454);