INSERT IGNORE INTO
    T_BUSLINIE (
        NAME
    )
values
    (
        'S5'
    );

INSERT IGNORE INTO
    T_HALTESTELLE (
        NAME
    )
VALUES
    (
        'HannoverHBF'
    ),
    (
        'HildesheimHBF'
    );

INSERT INTO
    T_BUSFAHRT (
        BUSLINIE_NAME,
        START_HALTESTELLE,
        ZIEL_HALTESTELLE,
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

