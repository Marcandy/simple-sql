 CREATE TABLE Person (id INTEGER PRIMARY KEY AUTOINCREMENT, Name, Age, Height, City, FavoriteColor);


INSERT INTO Person VALUES (1, 'Marc', 24, 5.7, 'Provo', 'Blue');

INSERT INTO Person( Name, Age, Height, City, FavoriteColor)
VALUES
 ('hel', 24, 5.7, 'Provo', 'Blue'),
 ('Marc', 22, 6.7, 'Provo', 'Black'),
 ('Boy', 25, 7.7, 'Provo', 'Green'),
 ('Coy', 26, 5.5, 'Provo', 'Yellow'),
 ('Boom', 27, 4.7, 'Provo', 'Purple');
 ('Zeus', 18, 5.7, 'Dallas', 'Blue'),
 ('Bob', 19, 6.7, 'Austin', 'Black'),
 ('Bob2', 39, 6.7, 'Austin', 'Black'),
 ('Tor', 30, 6, 'Der', 'red'),
 ('Bem', 35, 6.1, 'New York', 'orange')

SELECT * FROM Person

ORDER BY height desc
ORDER BY age desc
WHERE age > 20
WHERE age = 18
WHERE age < 20 or age > 30
WHERE age != 27
WHERE  FavoriteColor != 'red'
WHERE  FavoriteColor != 'red' and FavoriteColor !=  'Blue'
WHERE  FavoriteColor = 'orange' or FavoriteColor = 'Green'
WHERE  FavoriteColor in ('orange', 'Green')
WHERE  FavoriteColor in ('Yellow', 'Purple')
