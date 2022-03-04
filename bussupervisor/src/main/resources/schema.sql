
create table if not exists T_BUSLINIE (
    id integer NOT NULL AUTO_INCREMENT,
    NAME varchar(100) UNIQUE,
    PRIMARY KEY (id)
);

create table if not exists T_HALTESTELLE (
    id integer NOT NULL AUTO_INCREMENT,
    NAME varchar(100) UNIQUE,
    PRIMARY KEY (id)
);

create table if not exists T_BUSFAHRT (
    id integer NOT NULL AUTO_INCREMENT,
    BUSLINIE_ID integer not null,
    START_HALTESTELLE_ID integer not null,
    ZIEL_HALTESTELLE_ID integer not null,
    ABFAHRTS_ZEIT DATETIME not null,
    ANKUNFTS_ZEIT DATETIME not null,
    PRIMARY KEY (id),
    FOREIGN KEY (BUSLINIE_ID) REFERENCES T_BUSLINIE(id),
    FOREIGN KEY (START_HALTESTELLE_ID) REFERENCES T_HALTESTELLE(id),
    FOREIGN KEY (START_HALTESTELLE_ID)REFERENCES T_HALTESTELLE(id)

);

