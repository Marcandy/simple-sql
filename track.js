 CREATE TABLE Person (id INTEGER PRIMARY KEY AUTOINCREMENT, Name, Age, Height, City, FavoriteColor);


INSERT INTO Person VALUES (1, 'Marc', 24, 5.7, 'Provo', 'Blue');

INSERT INTO Person( Name, Age, Height, City, FavoriteColor)
VALUES
 ('hel', 24, 5.7, 'Provo', 'Blue'),
 ('Marc', 22, 6.7, 'Provo', 'Black'),
 ('Boy', 25, 7.7, 'Provo', 'Green'),
 ('Coy', 26, 5.5, 'Provo', 'Yellow'),
 ('Boom', 27, 4.7, 'Provo', 'Purple');

SELECT * FROM Person