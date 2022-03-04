INSERT INTO
    T_BUSLINIE (
        NAME
    )
values
    (
        'S5'
    );

INSERT INTO
    T_BUSFAHRT (
        BUSLINIE_ID,
        START_HALTESTELLE_ID,
        ZIEL_HALTESTELLE_ID,
        ABFAHRTS_ZEIT,
        ANKUNFTS_ZEIT
    )
VALUES
    (
        1,
        1,
        2,
        '2008-11-11 13:23:44',
        '2008-11-11 14:23:44'
    );

INSERT INTO
    T_HALTESTELLE (
        NAME
    )
VALUES
    (
        'Hannover HBF'
    ),
    (
        'Hildesheim HBF'
    );
