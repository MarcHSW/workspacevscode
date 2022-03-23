
create table if not exists T_BUSLINIE (
    ID int NOT NULL AUTO_INCREMENT,
    BUSLINIE_NAME varchar(100),
    PRIMARY KEY (ID)
);

create table if not exists T_HALTESTELLE (
    ID int NOT NULL AUTO_INCREMENT,
    HALTESTELLE_NAME varchar(100),
    PRIMARY KEY (ID)
);

create table if not exists T_BUSFAHRT (
    id integer NOT NULL AUTO_INCREMENT,
    BUSLINIE_NAME varchar(100) UNIQUE,
    START_HALTESTELLE_NAME varchar(100) UNIQUE,
    ZIEL_HALTESTELLE_NAME varchar(100) UNIQUE,
    ABFAHRTS_ZEIT DATETIME not null,
    ANKUNFTS_ZEIT DATETIME not null,
    PRIMARY KEY (id)

);

