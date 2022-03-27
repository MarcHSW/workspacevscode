INSERT IGNORE INTO
    T_BUSLINIE (
        BUSLINIE_NAME
    )
values
    (
        'S5'
    ),
    (
        'S6'
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

    INSERT IGNORE INTO T_FAHRPLAN (
        FAHRPLAN_ID,
        BUSLINIE_ID
    )
VALUES
    (
        1,
        2
    ),
    (
        1,
        1
    ),
    (
        2,
        1
    );

