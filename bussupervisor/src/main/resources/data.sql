INSERT IGNORE INTO
    T_BUSLINIE (
        
        BUSLINIE_NAME
    )
values
    (
        'S5'
    );

INSERT IGNORE INTO
    T_HALTESTELLE (
        HALTESTELLE_NAME
    )
VALUES
    (
        'HannoverHBF'
    ),
    (
        'HildesheimHBF'
    );

INSERT IGNORE INTO
    T_BUSFAHRT (
        BUSLINIE_NAME,
        START_HALTESTELLE_NAME,
        ZIEL_HALTESTELLE_NAME,
        ABFAHRTS_ZEIT,
        ANKUNFTS_ZEIT
    )
VALUES
    (
        'S5',
        'HannoverHBF',
        'HildesheimHBF',
        '2008-11-11 13:23:44',
        '2008-11-11 14:23:44'
    );

