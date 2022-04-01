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
    ),
    (
        'S7'
    ),
    (
        'S8'
    ),
    (
        'S9'
    ),
    (
        'S10'
    ),
    (
        'S11'
    ),
     (
        'S12'
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
    ),
     (
        'Haimar'
    ),
    (
        'Sehnde'
    ),
    (
        'Harsum'
    ),
    (
        'Gestorf'
    ),
    (
        'Hasede'
    ),
    (
        'Giesen'
    ),
    (
        'Himmelsthür'
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
        '2023-11-11 13:23:44',
        '2023-11-11 14:00:44'
    ),
    (
        1,
        3,
        4,
        '2023-11-11 14:00:44',
        '2023-11-11 14:30:44'
    ),
    (
        1,
        4,
        7,
        '2023-11-11 14:30:44',
        '2023-11-11 15:00:44'
    ),
    (
        1,
        7,
        8,
        '2023-11-11 15:30:44',
        '2023-11-11 16:00:44'
    ),
    (
        1,
        8,
        5,
        '2023-11-11 16:30:44',
        '2023-11-11 17:00:44'
    ),
     (
        2,
        10,
        11,
        '2023-11-14 13:23:44',
        '2023-11-14 14:00:44'
    ),
    (
        2,
        11,
        12,
        '2023-11-14 14:00:44',
        '2023-11-14 14:10:44'
    ),
    (
        3,
        12,
        13,
        '2023-11-22 22:00:44',
        '2023-11-22 22:13:44'
    ),
    (
        3,
        13,
        14,
        '2023-11-30 06:13:44',
        '2023-11-30 06:44:44'
    ),
    (
        4,
        11,
        12,
        '2023-11-09 14:00:44',
        '2023-11-09 14:10:44'
    ),
    (
        5,
        1,
        2,
        '2023-05-09 12:00:44',
        '2023-05-09 12:31:44'
    ),
    (
        5,
        2,
        3,
        '2023-05-09 12:31:44',
        '2023-05-09 12:44:44'
    ),
    (
        5,
        3,
        5,
        '2023-05-09 12:44:44',
        '2023-05-09 12:56:44'
    ),
    (
        6,
        5,
        9,
        '2023-04-09 11:44:44',
        '2023-04-09 11:56:44'
    ),
    (
        6,
        9,
        11,
        '2023-04-09 11:56:44',
        '2023-04-09 11:58:44'
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


