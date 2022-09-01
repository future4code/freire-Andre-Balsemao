### RELAÇÕES SQL

## EXERCÍCIO 01

 

# a) Explique o que é uma chave estrangeira
# Resposta: Foreign Key (FK) é a chave que permite a referência a registros presentes em outras tabelas, ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela. FK é a representação de um relacionamento entre tabelas.

# b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes:
# Resposta: 
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("001","Muito bom!", 7,"003"),
    ("002", "Excelente!", 9, "004");

# c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
# Resposta:
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("003", "Muito bom!", 7, "001");

14:58:33	INSERT INTO Rating (id, comment, rate, movie_id)  VALUES ("003", "Muito bom!", 7, "001")	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-andre-balsemao`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.156 sec

Para a criação de um a FK é necessário que seja de um item presente em uma outra tabela, como a tabela Movie não possui item com o ID 001, o erro informa que não é possívedl se fazer o vínculo com um item inexistente.

# d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
# Resposta:
ALTER TABLE Movie DROP COLUMN rating;

# e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
# Resposta

15:10:40	DELETE FROM Movie WHERE id = "004"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-andre-balsemao`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.156 sec

Para que possamos deletar um item de uma tabela que possui itens vinculados é necessário que deletemos todos os seus vínculos, no caso acima o id 004 da tabela Movie possui um vínculo com a tabela Rating, sendo assim, não é possível apagar o pai sem deletar o filho antes.

## EXERCÍCIO 02

# a) Explique, com as suas palavras, essa tabela
# Resposta

A tabela MovieCasting possui  2 campos movie_id e actor_id, sendo que ela possui duas FKs que relaciona o campo movie_id com o campo id da tabela Movie e relaciona o campo actor_id com o id da tabela Actor.

# b) Crie, ao menos, 6 relações nessa tabela
# Resposta

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"001","001"),("001","002"),("002","003"),("003","004"),("003,"005")("001","003");
 
# c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
# Resposta
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"006","001");
15:54:07	INSERT INTO MovieCast(movie_id, actor_id) VALUES( "006","001")	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-andre-balsemao`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.172 sec

Para a criação de um a FK é necessário que seja de um item presente em uma outra tabela, como a tabela Movie não possui item com o ID 006, o erro informa que não é possível se fazer o vínculo com um item inexistente.

# d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
# Resposta
DELETE FROM Actor WHERE id = "005"
15:57:10	DELETE FROM Actor WHERE id = "005"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-andre-balsemao`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.157 sec

Para que possamos deletar um item de uma tabela que possui itens vinculados é necessário que deletemos todos os seus vínculos, no caso acima o id 005 da tabela Actor possui um vínculo com a tabela MovieCast, sendo assim, não é possível apagar o pai sem deletar o filho antes.

## EXERCÍCIO 03

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

# a) Explique, com suas palavras, a query acima. O que é o operador `ON`?
O operador ON é onde está a relação entre um campo e outro de uma tabela.

# b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
SELECT m.id as movie_id, m.title as Title, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

movie_id, Title, rating
003, Dona Flor e Seus Dois Maridos, 7
004, Cidade de Deus, 9

