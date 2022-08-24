### Exercício 1
a) O comando irá apagar toda a coluna salary
b) O comando irá alterar o nome do campo de gender para sex, com no máximo 6 caracteres.
c) O comando irá alterar a quantidade de caracteres de 6 para 255.
### Exercício 2
a) UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003"

b)UPDATE Actor
SET name = "JULIANA PÂES"
WHERE name = "Juliana Paes"

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÂES"

c)
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

d)
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "006";

# Como eu rodei o comando SET SQL_SAFE_UPDATES = 0; Ele não retornou nenhum erro, entretanto não criou nenhuma linha. A mensagem foi: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0.	

### Exercício 3
a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

### Exercício 4

a) SELECT MAX(salary) FROM Actor; Resultado: '1200000'

b) SELECT MIN(salary) FROM Actor; Resultado: '300000'

c) SELECT COUNT(*) FROM Actor WHERE gender = "female"; Resultado: 3

d) SELECT SUM(salary) FROM Actor Resultado: '3019333.3125'


### Exercício 5
a) 
# O resultado retornado foi o agrupamento dos elementos da tabela Actor, separando entre "male" e "female" e o resultado foi oseguinte: # COUNT(*)	gender
2	male
3	female

b) SELECT id, name FROM Actor
ORDER BY name DESC;
Resultado:
# id, name
'001', 'Tony Ramos'
'005', 'Juliana Paes'
'002', 'Glória Pires'
'003', 'Fernanda Montenegro'
'004', 'Antônio Fagundes'

c) SELECT * FROM Actor
ORDER BY salary;
Resultado:
# id, name, birth_date, gender, salary, type
'003', 'Fernanda Montenegro', '1929-10-19', 'female', '300000', 'NotDirector'
'001', 'Tony Ramos', '1948-08-25', 'male', '400000', 'NotDirector'
'004', 'Antônio Fagundes', '1949-04-18', 'male', '400000', 'NotDirector'
'005', 'Juliana Paes', '1979-03-26', 'female', '719333', 'NotDirector'
'002', 'Glória Pires', '1963-08-23', 'female', '1200000', 'NotDirector'

d) SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

Resultado:
# id, name, birth_date, gender, salary, type
'002', 'Glória Pires', '1963-08-23', 'female', '1200000', 'NotDirector'
'005', 'Juliana Paes', '1979-03-26', 'female', '719333', 'NotDirector'
'001', 'Tony Ramos', '1948-08-25', 'male', '400000', 'NotDirector'

e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
Resultado:
# AVG(salary), gender
'400000', 'male'
'739777.7708333334', 'female'
			
### Exercício 6

a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) 
UPDATE Movie
SET playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2022-10-31"
WHERE id = "002";
 
d) UPDATE Movie
SET playing_limit_date = "2022-10-31"
WHERE id = "002";

d) UPDATE Movie
SET synopsis = "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos."
WHERE id = "001";

# Resposta: 18:11:19	UPDATE Movie SET synopsis = "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos." WHERE id = "001"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.204 sec Como eu rodei o comando SET SQL_SAFE_UPDATES = 0; acredito que ele não retorna mensagem de erros.
