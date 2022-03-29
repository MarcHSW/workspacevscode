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
    ),
    (
        'Völksen'
    ),
    (
        'Bennigsen'
    ),
    (
        'Eldagsen'
    ),
    (
        'Springe'
    ),
    (
        'Holtensen'
    ),
    (
        'Weetzen'
    );
    


INSERT IGNORE INTO
    T_BUSFAHRT (
        BUSLINIE_ID,
        START_HALTESTELLE_ID,
        ZIEL_HALTESTELLE_ID,
        ANKUNFTS_ZEIT,
        ABFAHRTS_ZEIT
        
    )
VALUES
    (
        1,
        6,
        3,
        '2008-11-11 13:23:44',
        '2008-11-11 14:00:44'
    ),
    (
        1,
        3,
        4,
        '2008-11-11 14:00:44',
        '2008-11-11 14:30:44'
    ),
    (
        1,
        4,
        7,
        '2008-11-11 14:30:44',
        '2008-11-11 15:00:44'
    ),
    (
        1,
        7,
        8,
        '2008-11-11 15:30:44',
        '2008-11-11 16:00:44'
    ),
    (
        1,
        8,
        5,
        '2008-11-11 16:30:44',
        '2008-11-11 17:00:44'
    );

    INSERT IGNORE INTO T_FAHRPLAN (
        FAHRPLAN_ID,
        BUSLINIE_ID,
        ABFAHRTS_ZEIT,
        ZIEL_HALTESTELLE_ID
    )
VALUES
    (
        1,
        2,
        '2008-12-11 17:00:44',
        2


    ),
    (
        1,
        1,
        '2008-11-11 17:30:44',
        1

    ),
    (
        2,
        1,
        '2010-05-05 17:30:44',
        1
    );

