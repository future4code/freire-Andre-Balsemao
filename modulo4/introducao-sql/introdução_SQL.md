### Exercício 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);


## a)  O campo id foi criado no formato VARCHAR por se tratar de texto, similar a string,sendo ele o Primary Key da tabela. O campo name foi criado também no formato VARCHAR com no máximo 255 caracteres e não pode ser vazio. O campo salary já foi explicado no enunciado. O campo birth_date é do tipo DATE e não pode estar vazio. O campo gender foi criado também no formato VARCHAR com no máximo 6 caracteres e não pode ser vazio.

## b) O comando `SHOW DATABASES` retornou o Banco de Dados existente dentro do meu USUÁRIO. O comando SHOW TABLES retornou as tabelas existentes que no momento é somente a Actor.

# c) O comando `DESCRIBE Actor` retornou as informações de cada campo da tabela.


### Exercício 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

*a)
INSERT INTO Actor (id, name, salary, birth_date, gender) 
VALUES( 
    "002",
    "Glória Pires", 
    1200000, 
    "1963-08-23", 
    "female"
    );*
# b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' 0,171 seg. - Não é possível criar nova entrada com o ID 002 pois o PK não pode repetir.*
# id	name	salary	birth_date	gender
 001	Tony Ramos	400000	1948-08-25	male
 002	Glória Pires	1200000	1963-08-23	female

# c) Não foi possível criar o usuário pois não estava declarado os campos birth_date e gender. Após a inserção deles, foi possível adicionar a query.

# id	name	salary	birth_date	gender
 001	Tony Ramos	400000	1948-08-25	male
 002	Glória Pires	1200000	1963-08-23	female
 003	Fernanda Montenegro	300000	1929-10-19	female

*d) INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);*

*e) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

# Não foi possível inseriri pois o campo birth_date está sem as aspas. Foi inserida as aspas e o resultado foi:

# id	name	salary	birth_date	gender
 001	Tony Ramos	400000	1948-08-25	male
 002	Glória Pires	1200000	1963-08-23	female
 003	Fernanda Montenegro	300000	1929-10-19	female
 005	Juliana Paes	719333	1979-03-26	female
*

*f)
# id	name	salary	birth_date	gender
001	Tony Ramos	400000	1948-08-25	male
002	Glória Pires	1200000	1963-08-23	female
003	Fernanda Montenegro	300000	1929-10-19	female
004	Antônio Fagundes	400000	1949-04-18	male
005	Juliana Paes	719333	1979-03-26	female

*

### Exercício 3

*a)
# id	name	salary	birth_date	gender
002	Glória Pires	1200000	1963-08-23	female
003	Fernanda Montenegro	300000	1929-10-19	female
005	Juliana Paes	719333	1979-03-26	female
*

*b)
# salary
 400000
*

*c)
# id, name, salary, birth_date, gender
    
*
*d)
# id	name	salary
001	Tony Ramos	400000
003	Fernanda Montenegro	300000
004	Antônio Fagundes	400000
*

*e)
SELECT id, nome from Actor WHERE id = "002"
## Resultado:
## 21:32:27	SELECT id, nome from Actor WHERE id = "002" LIMIT 0, 1000	Error Code: 1054. Unknown column 'nome' in 'field list'	0.157 sec. Esse erro aconteceu pois foi utilizado o campo "nome" na query e o correto seria "name".
SELECT id, name from Actor WHERE id = "002"
Resultado:
# id, name
002, Glória Pires
*

### Exercício 4
*a)
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
# id	name	salary	birth_date	gender
004	Antônio Fagundes	400000	1949-04-18	male
005	Juliana Paes	719333	1979-03-26	female
*
## A sintaxe quer dizer o seguinte: Selecionar todos os campos da tabela Actor, ONDE nome começar "A" OU nome começar com "J". 

*b) 
# id	name	salary	birth_date	gender
001	Tony Ramos	400000	1948-08-25	male
002	Glória Pires	1200000	1963-08-23	female
005	Juliana Paes	719333	1979-03-26	female
*

*c)
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

# id	name	salary	birth_date	gender
002	Glória Pires	1200000	1963-08-23	female
003	Fernanda Montenegro	300000	1929-10-19	female
004	Antônio Fagundes	400000	1949-04-18	male
*

*d)
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%"name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;
Resultado:
# id	name	salary	birth_date	gender
001	Tony Ramos	400000	1948-08-25	male
004	Antônio Fagundes	400000	1949-04-18	male
005	Juliana Paes	719333	1979-03-26	female
*

### Exercício 5

*a) CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

## Foi criada uma tabela Filmes onde o id é um texto com no máximo 255 caracteres definido como Primary Key, ou seja, não pode ser repetido. O campo title é do tipo texto com no máximo 255 caracteres e não pode ser repetido. O campo synopsis é do tipo TEXT, ou seja, é idêntico ao VARCHAR sem a limitação de caracteres e não pode ser enviado vazio. O campo release_Date é do tipo DATE e não pode ser enviado vazio. O campo rating é um numero inteiro e não pode ser enviado vazio.
*

*b)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
	"2006-06-01",
    7
);
*
*c)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
	"2012-12-27",
	10
);
*
*d)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",   
    8
);
*

*e)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
    "004",
    "Cidade de Deus",
    "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
    "2002-08-30 ",
    9
);
*
# id	title	synopsis	release_Date	rating
001	Se Eu Fosse Você	Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.	2006-06-01	7
002	Doce de mãe	Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.	2012-12-27	10
003	Dona Flor e Seus Dois Maridos	Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.	2017-11-02	8
004	Cidade de Deus	Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.	2002-08-30	9

### Exercício 6
*a)
SELECT id, title, rating FROM Movie WHERE id = "004";
# id	title	rating
 004	Cidade de Deus	9
*
*b)
SELECT * FROM Movie WHERE title = "Cidade de Deus";
# id	title	synopsis	release_Date	rating
004	Cidade de Deus	Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.	2002-08-30	9
*
*c)
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
# id	title	synopsis
002	Doce de mãe	Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.
003	Dona Flor e Seus Dois Maridos	Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.
004	Cidade de Deus	Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.

*
### Exercício 7
*a)
SELECT * FROM Movie
WHERE title LIKE "%vida%";

# Retornou vazio pois nenhum filme contem a palavra vida.


*b)
SELECT * FROM Movie
WHERE title LIKE "%Dona%" OR synopsis LIKE "%jovem%";

# id	title	synopsis	release_Date	rating
003	Dona Flor e Seus Dois Maridos	Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.	2017-11-02	8
004	Cidade de Deus	Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.	2002-08-30	9

*
*c)
SELECT * FROM Movie
WHERE release_date < "2022-08-22";

# id	title	synopsis	release_Date	rating
001	Se Eu Fosse Você	Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.	2006-06-01	7
002	Doce de mãe	Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.	2012-12-27	10
003	Dona Flor e Seus Dois Maridos	Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.	2017-11-02	8
004	Cidade de Deus	Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.	2002-08-30	9

*

*d)
SELECT * FROM MOVIE
WHERE release_date < CURDATE() AND 
      (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%");
# Retornou vazio pois todos os filmes foram lançados em datas menores do que hoje.     




