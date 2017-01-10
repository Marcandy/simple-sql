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


// -----------------------------Order By-------------------------

CREATE TABLE Orders (productName, productPrice, Quantity, personId INTEGER PRIMARY KEY AUTOINCREMENT)

INSERT INTO Orders (productName, productPrice, Quantity) VALUES // if you are doing the auto increment you need to specify which column you want to input those values
 ('Juice', 15, 20),
 ('Candy', 50, 100),
 ('Burrito', 5, 200),
 ('Beans', 10, 500),
 ('Cookie', 3, 12);

SELECT SUM(Quantity) FROM orders

SELECT SUM(productPrice) FROM orders

SELECT productPrice * Quantity FROM orders // multiply two column together
WHERE personId = 5

//////////////////////////ARTIST

- INSERT INTO Artist (Name)
Values ('Bal'),
('Po'),
('For')

* SELECT * FROM ARTIST
ORDER BY name desc
limit 10

* SELECT * FROM ARTIST
ORDER BY name
limit 5

SELECT * FROM ARTIST
WHERE Name like '%Black%'


/////////////////// Random ////

Can you return the tallest height for each species? Remember to return the species name next to the height too, like in the example query.
SELECT MAX(height_cm), species FROM friends_of_pickles
GROUP BY species

// join
SELECT character.name, character_actor.actor_name
FROM character
INNER JOIN character_actor
ON character.id = character_actor.character_id

// multiple join
// https://www.sqlteaching.com/#!multiple_joins
SELECT character.name, actor.name
FROM character
INNER JOIN  character_actor
ON character.id = character_actor.character_id
INNER JOIN actor
ON actor.id = character_actor.actor_id
